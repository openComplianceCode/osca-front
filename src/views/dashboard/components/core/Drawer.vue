<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    theme="dark"
    :expand-on-hover="expandOnHover"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <v-divider class="mb-1" />

    <!-- <v-list color="transparent" nav>
      <v-list-item>
        <v-list-item-avatar class="align-self-center" contain>
          <v-img
            src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"
            max-height="30"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="display-1" v-text="profile.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list> -->
    <div class="row-item-center padding-15">
      <img src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico" class="round-img" style="flex: 0 0" />
      <span style="flex: 1 1">Vuetify MD</span>
    </div>
    

    <v-divider class="mb-2 v-divider theme--dark" />

    <v-list color="transparent" nav>
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <!-- <template v-for="(item, i) in computedItems">
        <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
        </base-item-group>

        <base-item v-else :key="`item-${i}`" :item="item" active-color="success"/>
      </template> -->

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>

    <v-list nav style="padding: 15px">
      <template v-for="(item, i) in computedItems" :key="`group-${i}`">
        <v-list-item
          nav
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.title"
          rounded="l"
          active-color="success"
          color="white"
          style="user-select:none"
        >
        </v-list-item>
      </template>
    </v-list>

    <!-- <v-list nav style="padding: 15px">
      <v-list-item
        prepend-icon="mdi-email"
        title="Inbox"
        value="inbox"
        rounded="l"
        active-color="success"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-supervisor-circle"
        title="Supervisors"
        value="supervisors"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-clock-start"
        title="Clock-in"
        value="clockin"
      ></v-list-item>
    </v-list> -->

    <template v-slot:append>
      <base-item
        :item="{
          title: $t('upgrade'),
          icon: 'mdi-package-up',
          to: '/upgrade',
        }"
      />
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "DashboardCoreDrawer",

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      {
        icon: "mdi-view-dashboard",
        title: "dashboard",
        to: "/",
      },
      {
        icon: "mdi-account",
        title: "user",
        to: "/pages/user",
      },
      {
        title: "rtables",
        icon: "mdi-clipboard-outline",
        to: "/tables/regular-tables",
      },
      {
        title: "typography",
        icon: "mdi-format-font",
        to: "/components/typography",
      },
      {
        title: "icons",
        icon: "mdi-chart-bubble",
        to: "/components/icons",
      },
      {
        title: "google",
        icon: "mdi-map-marker",
        to: "/maps/google-maps",
      },
      {
        title: "notifications",
        icon: "mdi-bell",
        to: "/components/notifications",
      },
    ],
  }),

  computed: {
    ...mapState(["barColor", "barImage"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: this.$t("avatar"),
      };
    },
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.$t(item.title),
      };
    },
  },
};
</script>

<style scoped>
.round-img {
   background-color: white;
   border-radius: 50%;
   max-height: 40px;
   margin-right: 15px;
}
.row-item-center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.padding-15 {
  padding: 15px 25px;
}
</style>
