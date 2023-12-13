import axios from "axios";

export default {
    state() {
        return {
            selectedUser: {},
            albums: [],
            photosById: {},
        };
    },
    getters: {
        selectedUser(state) {
            return state.selectedUser
        },
        albums(state) {
            return state.albums;
        },
        photosById: (state) => (id) => {
            return state.photosById[id];
        },
    },
    mutations: {
        setSelectedUserById(state, payload) {
            const user = payload.users.find((user) => payload.id == user.id);
            state.selectedUser = user;
            console.log(state.selectedUser)
        },
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
