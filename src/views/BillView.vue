<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="scan">
   <QrcodeScanner></QrcodeScanner>
  </div>
</template>

<script>
import QrcodeScanner from '../components/QrcodeScanner.vue';
export default {
  components: {
    QrcodeScanner
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
