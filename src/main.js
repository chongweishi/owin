import { createApp } from "vue";
import "./index.css";
import router from "./router/index";
import App from "./App.vue";
import AOS from "aos";

import "../node_modules/aos/dist/aos.css";

const app = createApp(App);
app.use(router).use(AOS).mount("#app");
