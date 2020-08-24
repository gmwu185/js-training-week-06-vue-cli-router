<template>
  <div>
    <div id="nav">
      <router-link to="/">前台首頁</router-link> |
      <router-link to="/admin">後台管理頁面</router-link> |
      <router-link to="/admin/products">後台產品列表頁面</router-link> |
      <router-link to="/admin/coupons">後台優惠券頁面</router-link> |
    </div>
    <router-view/>
  </div>
</template>
