<template>
  <div>
    <h2>單一產品頁面</h2>
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    console.log('單一產品頁面 id', this.$route.params.id);
    /** 使用結構物件，取得物件資料中的 id
      * ! 結構是將 this.$route.params 做為一筆物件來源資料。
      * ! 所以不能直接使用 this.$route.params.id 後面帶上 .id 做為結構的來源，這樣來源會被成字串純值。
      * ! id 物件屬性取出，直接賦予在函式內的 id 變數中，也只能在函式中作用域操作使用 id 變數。
    */
    const { id } = this.$route.params;
    console.log('const id', id);
    this.$http
      .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        console.log('單一產品頁面 => res.data.data', res.data.data);
        this.product = res.data.data;
      });
  },
};
</script>
