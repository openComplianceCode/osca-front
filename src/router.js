import * as VueRouter from "vue-router";

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/dashboard/Index.vue"),
      children: [
        // Dashboard
        {
          name: "Dashboard",
          path: "",
          component: () => import("@/views/dashboard/Dashboard.vue"),
        },
        {
          name: "User Profile",
          path: "pages/user",
          component: () => import("@/views/dashboard/pages/UserProfile.vue"),
        },
      ],
    },
  ],
});
