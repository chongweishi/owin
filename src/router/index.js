// createWebHashHistory 是hash模式就是访问链接带有#
// createWebHistory  是history模式
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// 引入文件，动态路由

const routes = [
  {
    //框架页
    path: "/",
    name: "Index",
    meta: {
      keepAlive: false,
    },
    component: () => import(`../views/Index.vue`),
  },
  {
    path: "/:pathMatch(.*)*", // 代替vue2的通配符path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
