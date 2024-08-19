import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import "primeicons/primeicons.css";
import VueCarousel from "vue-carousel";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(VueCarousel);
app.mount("#app");
