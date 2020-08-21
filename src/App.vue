<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/about">關於</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/admin">後台管理頁面</router-link> |
      <router-link to="/admin/products">後台產品列表頁面</router-link> |
      <router-link to="/admin/coupons">後台優惠券頁面</router-link> |
    </div>
    12345
    <hr>
    <router-view/>
    67890
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
