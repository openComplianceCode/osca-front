import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import { createI18n } from "vue-i18n";
import store from "./store";
loadFonts();

const vueApp = createApp(App);
const i18n = createI18n({
  // something vue-i18n options here ...
});
vueApp.use(vuetify).use(router).use(i18n).use(store).mount("#app");
