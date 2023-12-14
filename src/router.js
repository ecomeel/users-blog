import { createRouter, createWebHashHistory } from "vue-router";
import UserBlog from "./UsersBlog.vue";
import UserPage from "./components/UserPage.vue";

import UserInfo from "./components/UserInfo.vue";
import Photos from "./components/Photos.vue";
import Posts from "./components/Posts.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", name: "home", component: UserBlog, alias: "/" },
        {
            path: "/user/:id",
            component: UserPage,
            props: true,
            children: [
                {
                    path: "userInfo",
                    component: UserInfo,
                },
                {
                    path: "albums",
                    component: Photos,
                },
                {
                    path: "posts",
                    component: Posts,
                },
            ],
        },
    ],
});
