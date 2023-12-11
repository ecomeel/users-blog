import { createRouter, createWebHashHistory } from "vue-router";
import UserBlog from "./UsersBlog.vue";
import UserPage from "./components/UserPage.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", name:'home', component: UserBlog, alias: "/" },
        { path: "/user/:id", component: UserPage, props: true },
    ],
});
