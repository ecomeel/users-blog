import axios from "axios";

export default {
    state() {
        return {
            users: [],
            isLoadingUsers: false,
            isErrorLoadingUsers: false,
        };
    },
    getters: {
        users(state) {
            return state.users;
        },
        isLoadingUsers(state) {
            return state.isLoadingUsers;
        },
        isErrorLoadingUsers(state) {
            return state.isErrorLoadingUsers;
        },
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload;
        },
    },
    actions: {
        getUsersFromApi(context) {
            context.state.isLoadingUsers = true;
            context.state.isErrorUserLoad = false;
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    const userList = [];
                    response.data.forEach(user => {
                        userList.push({
                            id: user.name,
                            name: user.name,
                            phone: user.phone,
                        });
                    });
                    context.commit("setUsers", userList);
                })
                .catch((error) => {
                    console.log(error);
                    context.state.isErrorLoadingUsers = true;
                })
                .finally(() => {
                    context.state.isLoadingUsers = false;
                });
        },
    },
};
