
import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import Details from "@/views/details.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: Details,
  },
];


const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
});

export default router;
