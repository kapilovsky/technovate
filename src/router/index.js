import { createRouter, createWebHistory } from "vue-router";
import HeroSection from "../views/HeroSection.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HeroSection,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
    {
      path: "/tracks",
      name: "tracks",
      component: () => import("../views/Tracks.vue"),
    },
    {
      path: "/faqs",
      name: "faqs",
      component: () => import("../views/FAQs.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactUs.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/problems",
      name: "problems",
      component: () => import("../views/ProblemStatements.vue"),
    },
  ],
});

export default router;
