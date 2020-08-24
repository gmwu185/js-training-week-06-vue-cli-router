<template>
  <div>
    <h2>這是產品列表頁</h2>
    <table>
      <tr v-for="(item) in products" :key="item.id">
        <td>產品名稱：{{ item.title }}</td>
        <td>原價：{{ item.origin_price }}</td>
        <td>特價：{{ item.price }}</td>
        <td>
          <!-- <router-link to="/product">單一產品連結</router-link> -->
          <router-link :to="`/product/${item.id}`">單一產品 router-link</router-link> |
          <button @click="goPage(item)">單一產品 goPage() 按鈕</button> |
          <a href="#" @click.prevent="goPage(item)">
            單一產品 goPage() 連結
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    goPage(item) {
      console.log('goPage() => item', item);
      console.log('this.$router', this.$router);
      this.$router.push(`/product/${item.id}`);
    },
  },
  created() {
    console.log('UUID', process.env.VUE_APP_UUID);
    // api/{uuid}/admin/ec/products
    this.$http
      .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        console.log('res.data.data', res.data.data);
        this.products = res.data.data;
      });
  },
};
</script>
