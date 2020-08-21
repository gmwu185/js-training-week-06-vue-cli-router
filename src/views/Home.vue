<template>
  <div class="home">
    <Loading :active.sync="isLoading"></Loading>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="這是頁面 (Home.vue) 裡的 HelloWord 元件"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
    HelloWorld,
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
    console.log('this.isLoading', this.isLoading);
  },
};
</script>
