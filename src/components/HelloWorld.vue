<script>
import { RouterLink, RouterView } from 'vue-router'
import router from '../router';

export default {
  data() {
    return {
      isLoading: false,
      plate: "",
      dbPlate: 'AAA-1111',
      hasPlate: true
    }
  },
  components: {
    RouterView,
    RouterLink,
  },
  methods: {
    search(plate) {
      if (this.plate === this.dbPlate) {
        localStorage.setItem('plate', this.plate);
        router.push('/bill');
        this.hasPlate = true
      } else {
        this.hasPlate = false
      }
    }
  }
}
</script>

<template>
  <main>
    <div class="bg-dark text-white text-center py-3">停車費查詢</div>
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

<style scoped></style>
