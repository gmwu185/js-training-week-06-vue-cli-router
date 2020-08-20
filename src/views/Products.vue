<template>
  <div>
    <h2>這是產品列表頁</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    console.log('UUID', process.env.VUE_APP_UUID);
  },
};
</script>
