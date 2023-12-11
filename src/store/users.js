import axios from "axios";

export default {
    state() {
        return {
            users: [],
        };
    },
    getters: {
        users(state) {
            return state.users
        }
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload;
        },
    },
    actions: {
        getUsersFromApi(context) {
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    context.commit("setUsers", response.data);
                });
        },
    },
};
