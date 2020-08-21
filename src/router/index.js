import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/products',
    component: () => import('../views/Products.vue'),
  },
  { // 動態路由
    path: '/product/:id',
    component: () => import('../views/Product.vue'),
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
    ],
  },
  { // 避免進入沒設定的頁面，直接返回到首頁，又或可以設定成 404 頁面。
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    component: () => import('../views/404.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
