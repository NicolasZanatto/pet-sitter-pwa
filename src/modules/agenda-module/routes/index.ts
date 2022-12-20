import type { RouteRecordRaw } from "vue-router";
import AgendaIndexViewVue from "../views/AgendaIndexView.vue";

const agendaRoutes: RouteRecordRaw[] = [
  {
    path: "/Agenda",
    name: "Agenda",
    component: AgendaIndexViewVue,
  },
];

export default agendaRoutes;
