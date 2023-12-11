import axios from "axios";
import { createStore } from "vuex";

import users from './users';

const store = createStore({
    modules: {
        users
    }
});

export default store;

// state() {
//     return {
//         count: 0,
//         albums: [],
//         isErrorLoad: false,
//         isLoading: true
//     };
// },
// mutations: {
//     increment(state, payload) {
//         state.count += payload.value;
//     },
//     multByFive(state) {
//         state.count *= 5;
//     },
//     setAlbums(state, payload) {
//         state.albums = payload;
//     },
// },
// getters: {
//     count(state) {
//         return state.count;
//     },
//     albums(state) {
//         return state.albums;
//     },
// },
// actions: {
//     asyncMultByFive(context) {
//         setTimeout(() => {
//             context.commit("multByFive");
//         }, 1000);
//     },
//     getAlbumsFromApi(context) {
//         context.state.isErrorLoad = false
//         axios
//             .get("https://jsonplaceholder.typicode.com/albums")
//             .then((response) => {
//                 context.commit('setAlbums', response.data)
//             })
//             .catch((err) => {
//                 console.log(err);
//                 context.state.isErrorLoad = true;
//             })
//             .finally(() => {
//                 context.state.isLoading = false;
//             });
//     },
// },