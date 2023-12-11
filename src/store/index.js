import axios from "axios";
import { createStore } from "vuex";

import users from './users';
import userCard from "./userCard";

const store = createStore({
    modules: {
        users,
        userCard,
    }
});

export default store;