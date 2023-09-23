<script>
import { RouterLink, RouterView } from 'vue-router'
import router from '../router';
const Api = 'https://7e0a-122-116-23-30.ngrok-free.app';
export default {
  data() {
    return {
      isLoading: false,
      plate: "",
      stationIndex: 359,
      hasPlate: true
    }
  },
  components: {
    RouterView,
    RouterLink,
  },
  methods: {
    search(plate) {
      this.isLoading = true;
      const searchApi = `${Api}/qrcode/search`;
      this.$http
        .post(searchApi, { "stationIndex": this.stationIndex, "plate": this.plate })
        .then((response) => {
          if (response.data.arr_time) {
            localStorage.setItem('plate', response.data.plate);
            this.isLoading = false;
            router.push('/bill');
          } else {
            this.hasPlate = false;
            this.isLoading = false;
          }
        })
    }
  },
  // created(){
  //   this.stationIndex = this.$route.params.stationIndex;
  // }
}
</script>

<template>
  <main>
    <div class="bg-dark text-white text-center py-3">停車費查詢</div>
    <div v-if="isLoading" class="loading"></div>
    <div class="container mt-5">
      <label for="exampleInputEmail1" class="form-label">車牌號碼</label>
      <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="請輸入車牌號碼搜尋" v-model="plate"
          @keydown.enter="search(plate)">
        <img src="../assets/icons8-search.svg" alt="search" class="mx-3" @click="search(plate)">
      </div>
      <p v-if="!hasPlate" class="text-warning fs-6 mt-1"><img src="../assets/icons8-info.svg" alt=""> 查無此車號，請重新輸入</p>
    </div>
  </main>
</template>

<style scoped>
.loading {
  background: #FFFFFF;
  background-image: url(/public/Spinner-1s-200px.svg);
  background-repeat: no-repeat;
  background-position: top center;
  width: 100vw;
  height: 100vh;
}
</style>
