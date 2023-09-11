<template>
  <header>
    <div class="bg-dark text-white text-center py-3">停車費折抵</div>
  </header>
  <div class="container mt-2">
    <div class="plate-img">{{ bill.plate }}</div>
    <section class="bill p-4">
      <!-- 費用 -->
      <section class="border-bottom">
        <p class="text-secondary">應繳金額</p>
        <p class="text-center">NT$ <span class="fs-3">{{ bill.fee }}</span></p>
      </section>
      <!-- 明細 -->
      <section class="mt-2">
        <p class="text-secondary">停車地點<span class="text-primary">　{{ bill.station }}</span></p>
        <p class="text-secondary">進場時間<span class="text-primary">　{{ bill.arr_time }}</span></p>
      </section>
      <!-- 無需繳費 -->
      <div v-if="bill.fee == 0" class="warningInfo">
        <p class="text-success fs-6 mt-1"><img src="../assets/icons8-info-success.svg" alt="info-icon">
          無需繳費，請儘速離場，謝謝！</p>
      </div>
      <!-- 按鈕 -->
      <div class="btns d-flex justify-content-around">
        <button class="btn btn-primary" id="toggleMyModal" @click="openModal()">發票折抵</button>
        <button class="btn" :class="bill.fee == 0 ? 'btn-secondary' : 'btn-primary'">繳費離場</button>
      </div>
      <!-- 折抵 modal -->
      <div class="modal" tabindex="-1" id="discountModal" ref="discountModal">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <!-- 掃描折抵 -->
              <div v-if="isScan" class="scan d-flex flex-column align-items-center">
                <div class="stream">
                  <qr-stream @init="onInit" @decode="onDecode" class="mb">
                    <div style="color: red;" class="frame"></div>
                  </qr-stream>
                </div>
                <p v-if="error" class="text-warning">{{ error }}</p>
                <p v-else>掃描中...</p>
              </div>
              <!-- 輸入折抵 -->
              <div v-else>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">折扣券號碼或發票號碼<span
                      class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="discountQrcode" placeholder="請輸入折扣券號碼或發票號碼"
                    v-model="discount.qrcode">
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">發票金額</label>
                  <input type="text" class="form-control" id="discountAmount" placeholder="請輸入發票金額"
                    v-model="discount.amount">
                  <small class="text-secondary">若為折扣券，則金額請輸入 0</small>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="d-flex justify-content-between">
                <button class="btn btn-primary me-4" @click="scanInput">
                  {{ isScan ? '手動輸入' : '掃描輸入' }}</button>
                <div class="d-flex justify-content-between">
                  <button type="button" class="btn btn-sm btn-outline-secondary me-1" data-bs-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-sm btn-outline-primary" @click="getDiscount()">確認</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { QrStream, QrCapture, QrDropzone } from 'vue3-qr-reader';

export default {
  data() {
    return {
      bill: {
        station: "群和智慧MitWit",
        plate: "",
        fee: "180",
        arr_time: "2023-09-05 13:30:00"
      },
      isScan: true,
      discount: {
        qrcode: "",
        amount: ""
      },
      error: ""
    }
  },
  components: {
    QrStream,
    QrCapture,
    QrDropzone,
  },
  methods: {
    // 搜尋車號取得停車明細
    search() {
      this.bill.plate = localStorage.getItem('plate');
    },
    openModal() {
      const discountModal = this.$refs.discountModal;
      const modal = new bootstrap.Modal(discountModal);
      modal.show();
    },
    hideModal(){
      const myModal = this.$refs.discountModal;
      const modal = bootstrap.Modal.getInstance(myModal);
      modal.hide();
    },
    // 切換掃描或手動輸入
    scanInput() {
      this.isScan = !this.isScan;
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "您需要允許鏡頭權限";
        } else if (error.name === "NotFoundError") {
          this.error = "本裝置無鏡頭";
        } else if (error.name === "NotSupportedError") {
          this.error = "操作失敗(https)";
        } else if (error.name === "NotReadableError") {
          this.error = "相機正在使用中?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "裝置相機未安裝成功";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "請嘗試使用別的瀏覽器操作";
        }
      }
    },
    onDecode(data) {
      // 折抵券
      this.discount.qrcode = 'coupon://' + data;
      this.discount.amount = '0';
      this.getDiscount();
    },
    getDiscount() {
      this.bill.fee = 50
      this.discount = {};
      this.hideModal();
      // 折抵後重新執行搜尋車號取得停車明細
      this.search();
    }
  },
  mounted() {
    this.search(); // 初始搜尋車號取得停車明細
  }
}
</script>

<style>
.bill {
  width: 324px;
  margin: 0 auto;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 2px 2px 25px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.plate-img {
  background-image: url(../assets/blank_plate3-sm.png);
  background-repeat: no-repeat;
  max-height: auto;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  font-size: 32px;
}

.stream {
  width: 150px;
  height: 150px;
}
</style>
