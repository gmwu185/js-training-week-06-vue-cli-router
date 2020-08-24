<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/about">關於</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/admin">後台管理頁面</router-link>
    </div>
    <Loading :active.sync="isLoading"></Loading>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  // components: {
  //   HelloWorld,
  // },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
    console.log('this.isLoading', this.isLoading);
  },
};
</script>
