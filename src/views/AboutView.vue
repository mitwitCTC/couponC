<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="scan">
    <vue-qrcode />
  </div>
</template>

<script>
import qrcode from '../components/QrcodeScanner.vue';
export default {
  components: {
    'vue-qrcode': qrcode,
  },
};
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
