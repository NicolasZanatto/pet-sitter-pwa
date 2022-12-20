import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "./modules/home-module/routes";
import agendaRoutes from "./modules/agenda-module/routes";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      ...homeRoutes,
      ...agendaRoutes,
    ],
  });
  
  export default router;