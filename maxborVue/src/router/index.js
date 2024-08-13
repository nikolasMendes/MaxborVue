import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutUs from "../views/AboutUs.vue";
import Contact from "../views/Contact.vue";
import Products from "../views/Products.vue";

const lazyLoad = (view) => import(`../views/${view}.vue`);
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/aboutUs",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
