<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat style="overflow: visible">
    <v-btn
      icon="mdi-dots-vertical"
      class="mr-3"
      elevation="1"
      size="small"
      @click="setDrawer(!drawer)"
    >
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <v-btn class="ml-2" text>
      <v-icon icon="mdi-view-dashboard"></v-icon>
    </v-btn>
    
    <!--<v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{}">
        <v-btn class="ml-2">
          <v-badge color="red" content="5">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-list :items="notifications" :tile="false" nav>
        <div></div>
      </v-list>
    </v-menu>-->

    <!--<v-menu
      transition="scale-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Scale Transition
        </v-btn>
      </template>

      <v-list active-color="red" bg-color="#ffffff">
        <v-list-item
          v-for="(item, i) in notifications"
          :key="i"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>-->
    
    <div style="position: relative;">
      <v-btn @click="isExpanded = !isExpanded" class="ml-2" text>
        <v-icon icon="mdi-bell-outline"></v-icon>
        <span class="i-remind top-right">
            <span>5</span>
        </span>
      </v-btn>
      <transition>
        <dropdown-menu
          v-if="isExpanded"
          position="bottom-right"
          :items="notifications"
        >
        </dropdown-menu>
      </transition>
    </div>
    
    <v-btn class="ml-2" text>
      <v-icon icon="mdi-account"></v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
// Components
// Utilities
import { mapState, mapMutations } from "vuex";
import  DropdownMenu  from "./DropdownMenu.vue"
export default {
  name: "DashboardCoreAppBar",

  components: {
    DropdownMenu
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one",
    ],
    isExpanded: true,
  }),

  computed: {
    ...mapState(["drawer"]),
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>
<style scoped>
.card {
  background-color: #fff;
  border-radius: 5px 5px 5px 0;
  box-shadow: 1px 1px 15px 0 rgba(69, 65, 78, 0.08);
  padding: 10px;
  font-family: Arial;
}
.nitification-card {
  width: 300px;
  height: 200px;
  position: absolute;
  right: 0;
}
.i-remind {
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: #F44336;
}
.top-right {
  position: absolute;
  bottom: 50%;
  left: 50%;
}
.bottom-right {
  position: absolute;
  top: 100%;
  right: 0;
}
.v-enter-from {
  opacity: 0;
  /* transform不影响元素的实际位置和大小，会导致变小时领近的元素位置没变，但是这里的transform目标脱离文档流，刚好 */
  transform: scale(0,0);
  transform-origin: top right;
}
.v-enter-to {
  opacity: 1;
  transform: scale(1,1);
  transform-origin: top right;
}
.v-enter-active {
  transition: all 0.3s;
}
.v-leave-from {
  opacity: 1;
  transform: scale(1,1);
  transform-origin: top right;
}
.v-leave-to {
  opacity: 0;
  transform: scale(0,0);
  transform-origin: top right;
}
.v-leave-active {
  transition: all 0.3s;
}
</style>