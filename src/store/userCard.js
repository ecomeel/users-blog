import axios from "axios";

export default {
    state() {
        return {
            id: "",
            user: {},
            albums: [],
            photosById: {},
        };
    },
    getters: {
        // getUserById(state) {
        //     console.log(id)
        // }
        getUserById: (state, getters, rootState) => (id) => {
            const users = getters.users;
            const user = users.find((user) => user.id == id);
            console.log(user);
        },
    },
    mutations: {},
    actions: {
        // get Albums
        getAlbumsByUserIdFromApi(state, { id }) {
            const baseAlbumsUrl = "https://jsonplaceholder.typicode.com/albums";
            axios.get(`${baseAlbumsUrl}?userId=${id}`).then((res) => {
                state.albums = res.data;

                const albumsIds = state.albums.map((album) => album.id);
                const photosById = {};
                albumsIds.forEach((albumId) => {
                    // get photos
                    axios
                        .get(`${baseAlbumsUrl}/${albumId}/photos`)
                        .then((response) => {
                            photosById[albumId] = response.data
                        });
                });
                state.photosById = photosById;
                console.log(state.photosById)
            });
        },
    },
};

// Что нужно сделать:
// Рендер страницы пользователя (Альбомы + карусель 5 )
