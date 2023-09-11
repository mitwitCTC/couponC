<template>
    <div class="stream">
        <qr-stream @decode="onDecode" class="mb">
            <div style="color: red;" class="frame"></div>
        </qr-stream>
    </div>
    <div class="result">
        <p>Result: {{ data }}</p>
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
            this.data = data;
        },
    },
    mounted() {
    }
};
</script>
<style scoped>
.stream {
    width: 100px;
    height: 100px;
}
</style>