import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "login", component: import("../components/login/FMLogin.vue") },
    { path: "/:id", name: "home", component: import("../components/main/FMMain.vue") },
    { path: "/register", name: "register", component: import("../components/login/FMSignUp.vue") },
  ],
});

export default router;
