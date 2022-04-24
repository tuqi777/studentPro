import Vue from 'vue'
import VueRouter from 'vue-router'
// 自动生成页面--自动添加路由
import addRoute from './addRoute'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "layout",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/pages/login/index1.vue"),
  },
  {
    path: "/layout",
    name: "layout",
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/pages/layout/index.vue"),
    children: [
      {
        path: "/workBeanch",
        name: "workBeanch",
        meta: {
          title: "首页",
        },
        component: () =>
          import(/* webpackChunkName: "workBeanch" */ "@/views/workBeanch"),
      },
      {
        path: "/ele",
        name: "ele",
        redirect: "/ele/form",
        meta: {
          title: "案例",
        },
        // redirect: "/userMange/commonUserMange",
        component: () =>
          import(/* webpackChunkName: "userMange" */ "@/views/ele"),
        children: [
          {
            path: "table",
            name: "table",
            meta: {
              title: "table",
            },
            component: () =>
              import(
                /* webpackChunkName: "commonUserMange" */ "@/views/ele/commonUserMange"
              ),
          },
          {
            path: "index",
            name: "index",
            meta: {
              title: "农林",
            },
            component: () =>
              import(
                /* webpackChunkName: "commonUserMange" */ "@/views/ele/form"
              ),
          },
          {
            path: "index1",
            name: "index1",
            meta: {
              title: "物流",
            },
            component: () =>
              import(
                /* webpackChunkName: "vipUserMange" */ "@/views/ele/form/index1"
              ),
          },
          {
            path: "index2",
            name: "index2",
            meta: {
              title: "vip用户管理",
            },
            component: () =>
              import(
                /* webpackChunkName: "vipUserMange" */ "@/views/ele/form/index2"
              ),
          },
          {
            path: "index3",
            name: "index3",
            meta: {
              title: "vip用户管理",
            },
            component: () =>
              import(
                /* webpackChunkName: "vipUserMange" */ "@/views/ele/form/index3"
              ),
          },
        ],
      },
      {
        path: "/setting",
        name: "setting",
        meta: {
          title: "设置",
        },
        component: () =>
          import(/* webpackChunkName: "setting" */ "@/views/setting"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    name: "404",
    meta: {
      title: "404",
    },
    component: () => import(/* webpackChunkName: "404" */ "@/pages/404.vue"),
  },
];

const router = new VueRouter({
  routes:routes.concat(addRoute)
})

export default router
