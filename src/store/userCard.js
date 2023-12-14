import axios from "axios";

export default {
    state() {
        return {
            selectedUser: {},
            albums: [],
            posts: [],

            isLoadingUser: false,
            isErrorLoadingUser: false,
            isLoadingAlbums: false,
            isErrorLoadingAlbums: false,
            isLoadingPosts: false,
            isErrorLoadingPosts: false,
        };
    },
    getters: {
        selectedUser(state) {
            return state.selectedUser;
        },
        albums(state) {
            return state.albums;
        },
        posts(state) {
            return state.posts;
        },

        isLoadingUser(state) {
            return state.isLoadingUser;
        },
        isErrorLoadingUser(state) {
            return state.isErrorLoadingUser;
        },

        isLoadingAlbums(state) {
            return state.isLoadingAlbums;
        },
        isErrorLoadingAlbums(state) {
            return state.isErrorLoadingAlbums;
        },

        isLoadingPosts(state) {
            return state.isLoadingPosts;
        },
        isErrorLoadingPosts(state) {
            return state.isErrorLoadingPosts;
        },
    },
    mutations: {
        setUser(state, payload) {
            state.selectedUser = payload.user;
        },
        setAlbums(state, payload) {
            state.albums = payload.albums;
        },
        setPosts(state, payload) {
            state.posts = payload.posts;
        },
    },
    actions: {
        setSelectedUser(context, userId) {
            context.state.isLoadingUser = true;
            context.state.isErrorLoadingUser = false;
            const baseUrl = "https://jsonplaceholder.typicode.com";

            // Set bio
            axios
                .get(`${baseUrl}/users?id=${userId}`)
                .then((res) => {
                    context.commit("setUser", {
                        user: res.data[0],
                    });
                })
                .catch((error) => {
                    console.log(error);
                    context.state.isErrorLoadingUser = true;
                })
                .finally(() => {
                    context.state.isLoadingUser = false;
                });
        },
        setAlbums(context, userId) {
            context.state.isLoadingAlbums = true;
            context.state.isErrorLoadingAlbums = false;
            context.state.isLoadingPhotos = true;
            context.state.isErrorLoadingPhotos = false;

            const baseUrl = "https://jsonplaceholder.typicode.com";
            const AlbumsUrl = `${baseUrl}/albums`;

            axios
                .get(`${AlbumsUrl}?userId=${userId}`)
                .then((res) => {
                    context.commit("setAlbums", { albums: res.data });

                    // Set albums photos
                    context.state.albums.forEach((album) => {
                        axios
                            .get(`${AlbumsUrl}/${album.id}/photos`)
                            .then((response) => {
                                const albumPhotos = response.data;
                                album.photos = albumPhotos;
                            })
                            .catch((error) => {
                                console.log(error);
                                context.state.isErrorLoadingPhotos = true;
                            });
                    });
                })
                .catch((error) => {
                    console.log(error);
                    context.state.isErrorLoadingAlbums = true;
                })
                .finally(() => {
                    context.state.isLoadingAlbums = false;
                });
        },
        setPosts(context, userId) {
            context.state.isLoadingPosts = true;
            context.state.isErrorLoadingPosts = false;

            const baseUrl = "https://jsonplaceholder.typicode.com";
            const userPostsUrl = `${baseUrl}/posts?userId=${userId}`;
            axios
                .get(userPostsUrl)
                .then((res) => {
                    context.commit("setPosts", { posts: res.data });
                })
                .catch((error) => {
                    console.log(error);
                    context.state.isErrorLoadingPosts = true;
                })
                .finally(() => {
                    context.state.isLoadingPosts = false;
                });
        },
    },
};
