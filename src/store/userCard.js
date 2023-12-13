import axios from "axios";

export default {
    state() {
        return {
            selectedUser: {},
            albums: [],
            posts: [],
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
        setSelectedUserContent(context, { userId }) {
            const baseUrl = "https://jsonplaceholder.typicode.com";

            // Set bio
            axios.get(`${baseUrl}/users?id=${userId}`).then((res) => {
                context.commit("setUser", {
                    user: res.data[0],
                });
            });

            // Set albums
            const AlbumsUrl = `${baseUrl}/albums`;
            axios.get(`${AlbumsUrl}?userId=${userId}`).then((res) => {
                context.commit("setAlbums", { albums: res.data });

                // Set albums photos
                context.state.albums.forEach((album) => {
                    axios
                        .get(`${AlbumsUrl}/${album.id}/photos`)
                        .then((response) => {
                            const albumPhotos = response.data;
                            album.photos = albumPhotos;
                        });
                });
            });

            // Set Posts
            const userPostsUrl = `${baseUrl}/posts?userId=${userId}`;
            axios.get(userPostsUrl).then((res) => {
                context.commit("setPosts", { posts: res.data });
            });
        },
    },
};
