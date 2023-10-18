// Importing necessary functions for Vue 3 and Vue Router 4
import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // ... other routes ...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
