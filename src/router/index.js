import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "login", component: import("../components/login/FMLogin.vue") },
    { path: "/:id", name: "home", component: import("../components/main/FMMain.vue") },
    { path: "/register", name: "register", component: import("../components/login/FMRegister.vue") },
  ],
});

export default router;
