<template>
  <v-content style="padding-top: 64px;transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);min-height: 100vh" :style="{'padding-left': this.drawer?'260px':'0px'}">
    <router-view />

    <dashboard-core-footer />
  </v-content>
</template>

<script>

export default {
  name: "DashboardCoreView",

  components: {
    DashboardCoreFooter: () => import("./Footer.vue"),
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      }
    },
  },
};
</script>
