import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import i18n from "./i18n.js";
import store from "./store";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

import BaseCard from "./components/base/Card.vue";
import BaseItem from "./components/base/Item.vue";
import BaseItemGroup from "./components/base/ItemGroup.vue";
import BaseItemSubGroup from "./components/base/ItemSubGroup.vue";
import BaseMaterialAlert from "./components/base/MaterialAlert.vue";
import BaseMaterialCard from "./components/base/MaterialCard.vue";
import BaseMaterialChartCard from "./components/base/MaterialChartCard.vue";
import BaseMaterialSnackbar from "./components/base/MaterialSnackbar.vue";
import BaseMaterialStatsCard from "./components/base/MaterialStatsCard.vue";
import BaseMaterialTabs from "./components/base/MaterialTabs.vue";
import BaseMaterialTestimony from "./components/base/MaterialTestimony.vue";
import BaseSubheading from "./components/base/Subheading.vue";
import BaseVComponent from "./components/base/VComponent.vue";

loadFonts();
import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()
//var defaultOptions: WatchQueryFetchPolicy = "cache-and-network"
const apolloClient = new ApolloClient({
  cache,
  uri: 'http://localhost:3000/graphql',
  // 不使用缓存，每次都重新取
  defaultOptions: <DefaultOptions>"network-only",
})
import { createApolloProvider } from '@vue/apollo-option'
const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})
const vueApp = createApp(App);

vueApp.use(vuetify).use(router).use(apolloProvider).use(i18n).use(store).mount("#app");

vueApp.component("BaseCard", BaseCard);
vueApp.component("BaseItem", BaseItem);
vueApp.component("BaseItemGroup", BaseItemGroup);
vueApp.component("BaseItemSubGroup", BaseItemSubGroup);
vueApp.component("BaseMaterialAlert", BaseMaterialAlert);
vueApp.component("BaseMaterialCard", BaseMaterialCard);
vueApp.component("BaseMaterialChartCard", BaseMaterialChartCard);
vueApp.component("BaseMaterialSnackbar", BaseMaterialSnackbar);
vueApp.component("BaseMaterialStatsCard", BaseMaterialStatsCard);
vueApp.component("BaseMaterialTabs", BaseMaterialTabs);
vueApp.component("BaseMaterialTestimony", BaseMaterialTestimony);
vueApp.component("BaseSubheading", BaseSubheading);
vueApp.component("BaseVComponent", BaseVComponent);
