import { createApp } from "vue";
import './reset.scss';
import App from "./UsersBlog.vue";

// import MyComp from "./components/MyComp.vue";
import store from "./store/store";

const app = createApp(App);
app.use(store);
app.mount("#app");

// app.component("my-component", MyComp);
