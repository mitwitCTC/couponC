<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="scan">
    <div class="stream">
      <qr-stream @decode="onDecode" class="mb" style="width: 30%;">
        <div style="color: red;" class="frame"></div>
      </qr-stream>
    </div>
    <div class="result">
      Result: {{ data }}
    </div>
  </div>
</template>

<script>
import { QrStream, QrCapture, QrDropzone } from 'vue3-qr-reader';

export default {
  data() {
    return {
      data: null
    }
  },
  components: {
    QrStream,
    QrCapture,
    QrDropzone,
  },
  methods: {
    onDecode(data) {
      this.data = data
    }
  }
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
