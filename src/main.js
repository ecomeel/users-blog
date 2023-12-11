import { createApp } from "vue";
import './index.scss';

import App from "./UsersBlog.vue";
import store from "./store/index";

const app = createApp(App);
app.use(store);
app.mount("#app");
