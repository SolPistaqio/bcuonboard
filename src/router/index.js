import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/journey",
    name: "Journey",
    component: () => import("../views/Journey/index.vue"),
    redirect: "/Journey/blockchain",
    children: [
      {
        path: "blockchain",
        name: "Blockchain",
        component: () => import("../views/Journey/JourneyBlockchain.vue"),
      },
      {
        path: "profile",
        component: () => import("../views/Journey/JourneyProfile.vue"),
      },
      {
        path: "strategy",
        component: () => import("../views/Journey/JourneyStrategy.vue"),
      },
      {
        path: "mastery",
        component: () => import("../views/Journey/JourneyMastery.vue"),
      },
      { path: "/:pathMatch(.*)*", redirect: "/" },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path != "/" && to.path != "/journey/blockchain") {
    const destinationStep = store.state.steps.filter(
      (step) => step.path === to.path
    )[0];

    if (destinationStep.order > store.state.currentStep) {
      next(store.state.steps[store.state.currentStep - 1].path);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
