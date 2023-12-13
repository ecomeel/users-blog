import axios from "axios";

export default {
    state() {
        return {
            selectedUser: {},
            albums: [],
            posts: [],
            // photosById: {},
        };
    },
    getters: {
        selectedUser(state) {
            return state.selectedUser;
        },
        albums(state) {
            return state.albums;
        },
        // photosById: (state) => (id) => {
        //     return state.photosById[id];
        // },
    },
    mutations: {
        setSelectedUserById(state, payload) {
            const user = payload.users.find((user) => payload.id == user.id);
            state.selectedUser = user;
        },
        setPosts(state, payload) {
            state.posts = payload.posts;
        },
    },
    actions: {
        setSelectedUserContent(context, { userId }) {
            const baseUrl = "https://jsonplaceholder.typicode.com";
            // Set albums
            const AlbumsUrl = `${baseUrl}/albums`;
            axios.get(`${AlbumsUrl}?userId=${userId}`).then((res) => {
                context.state.albums = res.data;

                // Set photos
                context.state.albums.forEach((album) => {
                    axios
                        .get(`${AlbumsUrl}/${album.id}/photos`)
                        .then((response) => {
                            const albumPhotos = response.data;
                            const fivePhotos = albumPhotos.slice(0, 5);
                            album.photos = albumPhotos;
                            album.fivePhotos = fivePhotos;
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
