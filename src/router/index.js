import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '', // 使用空自串自動導回父層路由
        component: () => import('../views/front/Index.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/front/Products.vue'),
      },
      { // 動態路由
        path: 'product/:id',
        component: () => import('../views/front/Product.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/front/Cart.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
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
