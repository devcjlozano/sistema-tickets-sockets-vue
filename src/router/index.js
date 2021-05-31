import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TicketsGenerator from "../views/TicketsGenerator.vue";
import AttendTicketsDesktop from "../views/AttendTicketsDesktop";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/generator",
    component: TicketsGenerator,
    name: "Generator",
  },
  {
    path: "/attend-tickets-deskop/:numberDesktop",
    component: AttendTicketsDesktop,
    name: "AttendTicketsDesktop",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
