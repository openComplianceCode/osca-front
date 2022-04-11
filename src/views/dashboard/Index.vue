<template>
  <v-app>
    <dashboard-core-drawer />
    <dashboard-core-app-bar value="true" />

    <dashboard-core-view />
  </v-app>
</template>

<script>
import DashboardCoreAppBar from "./components/core/AppBar.vue";
import DashboardCoreView from "./components/core/View.vue";
import DashboardCoreDrawer from "./components/core/Drawer.vue";

export default {
  name: "DashboardIndex",

  components: {
    DashboardCoreAppBar,
    DashboardCoreView,
    DashboardCoreDrawer,
  },

  data: () => ({
    expandOnHover: false,
  }),
};
</script>
