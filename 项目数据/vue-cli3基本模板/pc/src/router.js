import Vue from "vue";
import Router from "vue-router";
const Home = () => import('./views/Home.vue')


Vue.use(Router);

let routers = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

  ]
});

export default routers
