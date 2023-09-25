import { createApp } from "vue";
import "./index.css";
import router from "./router/index";
import App from "./App.vue";
import AOS from "aos";
import store from "./store";
import i18n from "./locales";

import "../node_modules/aos/dist/aos.css";

const app = createApp(App);
app
  .use(router)

  .use(store)
  .use(i18n)
  .use(AOS)
  .use(i18n)
  .use(i18n)
  .use(i18n)
  .mount("#app");
