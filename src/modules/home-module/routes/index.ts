import type { RouteRecordRaw } from "vue-router";
import HomeIndexView from "../views/HomeIndexView.vue";

const homeRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeIndexView,
  },
];

export default homeRoutes;
