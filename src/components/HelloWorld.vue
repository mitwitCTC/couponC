<script>
import router from '../router';
const Api = 'https://coupon.mitwit-cre.com.tw';
export default {
  data() {
    return {
      isLoading: false,
      plate1:"",
      plate2:"",
      plate: "",
      hasPlate: true,
      stationIndex: null,
    }
  },
  methods: {
    // 取場站資訊
    getStationInfo() {
      const getStationInfoApi = `${Api}/qrcode/stationInfo`;
      this.$http
        .post(getStationInfoApi, { "stationIndex": this.stationIndex })
        .then((response) => {
          if (!response.data.ip) {
            console.warn(response.data.message);
          }
        })
    },
    search() {
      this.isLoading = true;
      const searchApi = `${Api}/qrcode/search`;
      this.plate = this.plate1 + "-" + this.plate2;
      this.$http
        .post(searchApi, { "stationIndex": this.stationIndex, "plate": this.plate })
        .then((response) => {
          if (response.data.arr_time) {
            localStorage.setItem('plate', response.data.plate);
            this.isLoading = false;
            router.push(`${this.stationIndex}/bill`);
          } else {
            this.hasPlate = false;
            this.isLoading = false;
          }
        })
    }
  },
  created() {
    this.stationIndex = this.$route.params.stationIndex;
    this.getStationInfo();
  }
}
</script>

<template>
  <main>
    <div class="bg-dark text-white text-center py-3">停車費查詢</div>
    <div v-if="isLoading" class="loading"></div>
    <div class="container mt-5">
      <label for="exampleInputEmail1" class="form-label">請輸入車牌號碼</label>
      <div class="d-flex">
        <input class="form-control me-2" type="search" v-model="plate1">
        <span class="fs-5"> - </span>
        <input class="form-control me-2" type="search" v-model="plate2" @keydown.enter="search(plate)">
        <img src="../assets/icons8-search.svg" alt="search" class="mx-3" @click="search(plate)">
      </div>
      <p v-if="!hasPlate" class="text-warning fs-6 mt-1"><img src="../assets/icons8-info.svg" alt=""> 查無此車號，請重新輸入</p>
    </div>
  </main>
</template>

<style scoped>
.loading {
  background: #FFFFFF;
  background-image: url(/Spinner-1s-200px.svg);
  background-repeat: no-repeat;
  background-position: top center;
  width: 100vw;
  height: 100vh;
}
</style>
