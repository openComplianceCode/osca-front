import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import i18n from "./i18n.js";
import store from "./store";
loadFonts();

const vueApp = createApp(App);

vueApp.use(vuetify).use(router).use(i18n).use(store).mount("#app");
