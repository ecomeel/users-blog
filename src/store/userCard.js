import axios from "axios";

export default {
    state() {
        return {
            user: {},
            albums: [],
            photosById: {},
        };
    },
    getters: {
        // getUserById: (state, getters, rootState) => (id) => {
        //     const users = getters.users;
        //     const user = users.find((user) => user.id == id);
        // },
        albums(state) {
            return state.albums;
        },
        photosById: (state) => (id) => {
            return state.photosById[id];
        },
    },
    mutations: {
        setSelectedUserById(state, payload) {
            const user = payload.users.find((user) => payload.id == user.id)
            console.log(user)
        }
    },
    actions: {
        setSelectedUserContent(context, { userId }) {
            // Set albums
            const baseAlbumsUrl = "https://jsonplaceholder.typicode.com/albums";
            axios.get(`${baseAlbumsUrl}?userId=${userId}`).then((res) => {
                context.state.albums = res.data;

                // Set photos
                context.state.albums.forEach((album) => {
                    axios
                        .get(`${baseAlbumsUrl}/${album.id}/photos`)
                        .then((response) => {
                            const albumPhotos = response.data;
                            const fivePhotos = albumPhotos.slice(0, 5);
                            album.photos = albumPhotos;
                            album.fivePhotos = fivePhotos;
                        });
                });
            });
        },
    },
};
// Что нужно сделать:
// Рендер страницы пользователя (Альбомы + карусель 5 )
