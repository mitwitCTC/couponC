<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="scan d-flex flex-column align-items-center">
    <QrcodeScanner></QrcodeScanner>
  </div>
</template>

<script>
import QrcodeScanner from '../components/QrcodeScanner.vue';
export default {
  components: {
    QrcodeScanner
  },
  methods: {
    // 搜尋車號取得停車明細
    search() {
      console.log(localStorage.getItem('plate'));
    }
  },
  mounted() {
    this.search(); // 初始搜尋車號取得停車明細
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
