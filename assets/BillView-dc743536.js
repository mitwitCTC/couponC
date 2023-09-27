import{_ as f,v as u,r as y,o as a,c as l,a as t,t as c,n as m,b as r,d as x,e as g,w as v,f as h,g as p,F as w}from"./index-70470355.js";const M="/couponC/assets/icons8-info-success-38adac5f.svg";const _="https://coupon.mitwit-cre.com.tw",I={data(){return{stationIndex:null,plate:"",bill:{station:"",plate:"",fee:"",arr_time:""},isScan:!0,discount:{qrcode:"",amount:""},error:"",discountSuccess:null,discountMessage:""}},components:{QrStream:u.QrStream,QrCapture:u.QrCapture,QrDropzone:u.QrDropzone},methods:{getPlate(){this.plate=localStorage.getItem("plate")},search(o){this.getPlate();const s=`${_}/qrcode/search`;this.$http.post(s,{stationIndex:this.stationIndex,plate:this.plate}).then(d=>{d&&(this.bill=d.data)})},openModal(){const o=this.$refs.discountModal;new bootstrap.Modal(o).show()},hideModal(){const o=this.$refs.discountModal;bootstrap.Modal.getInstance(o).hide()},scanInput(){this.isScan=!this.isScan},async onInit(o){try{await o}catch(s){s.name==="NotAllowedError"?this.error="您需要允許鏡頭權限":s.name==="NotFoundError"?this.error="本裝置無鏡頭":s.name==="NotSupportedError"?this.error="操作失敗(https)":s.name==="NotReadableError"?this.error="相機正在使用中?":s.name==="OverconstrainedError"?this.error="裝置相機未安裝成功":s.name==="StreamApiNotSupportedError"&&(this.error="請嘗試使用別的瀏覽器操作")}},onDecode(o){this.discount.qrcode=o,this.discount.amount=0,this.getDiscount()},getDiscount(){const o=`${_}/qrcode/discount`;this.$http.post(o,{qrcode:"coupon://"+this.discount.qrcode,amount:this.amount}).then(s=>{this.discountMessage=s.data.message,s.data.message=="折抵成功."?(this.discountSuccess=!0,this.discount={},this.hideModal(),this.search()):(this.discountSuccess=!1,this.discount={},this.hideModal(),this.search())})},pay(){parent.window.location.replace("https://utaggoif.utaggo.com.tw/payment/startpay01")}},mounted(){this.search()},created(){this.stationIndex=this.$route.params.stationIndex}},S=t("header",null,[t("div",{class:"bg-dark text-white text-center py-3"},"停車費折抵")],-1),C={class:"container mt-2"},k={class:"plate-img"},D={class:"bill p-4"},q={class:"border-bottom"},N=t("p",{class:"text-secondary"},"應繳金額",-1),E={class:"text-center"},Q={class:"fs-3"},V={class:"mt-2"},A={class:"text-secondary"},B={class:"text-primary"},F={class:"text-secondary"},j={class:"text-primary"},z={key:0,class:"warningInfo"},T=t("p",{class:"text-success fs-6 mt-1"},[t("img",{src:M,alt:"info-icon"}),r(" 無需繳費，請儘速離場，謝謝！")],-1),P=[T],R={class:"btns d-flex justify-content-around"},U={class:"modal",tabindex:"-1",id:"discountModal",ref:"discountModal"},O={class:"modal-dialog modal-sm modal-dialog-centered"},G={class:"modal-content"},H={class:"modal-body"},J={key:0,class:"scan d-flex flex-column align-items-center"},K={class:"stream"},L=t("div",{style:{color:"red"},class:"frame"},null,-1),W={key:0,class:"text-warning"},X={key:1},Y={key:1},Z={class:"mb-3"},$=t("label",{for:"exampleFormControlInput1",class:"form-label"},[r("折扣券號碼或發票號碼"),t("span",{class:"text-danger"},"*")],-1),tt={class:"mb-3"},st=t("label",{for:"exampleFormControlInput1",class:"form-label"},"發票金額",-1),et=t("small",{class:"text-secondary"},"若為折扣券，則金額請輸入 0",-1),ot={class:"modal-footer"},nt={class:"d-flex justify-content-between"},it={class:"d-flex justify-content-between"},ct=t("button",{type:"button",class:"btn btn-sm btn-outline-secondary me-1","data-bs-dismiss":"modal"},"取消",-1);function at(o,s,d,lt,e,i){const b=y("qr-stream");return a(),l(w,null,[S,t("div",C,[t("div",k,c(e.bill.plate),1),t("section",D,[t("p",{class:m(["text-center fs-3",{"text-success":e.discountSuccess,"text-warning":!e.discountSuccess}])},c(e.discountMessage),3),t("section",q,[N,t("p",E,[r("NT$ "),t("span",Q,c(e.bill.fee),1)])]),t("section",V,[t("p",A,[r("停車地點"),t("span",B,"　"+c(e.bill.station),1)]),t("p",F,[r("進場時間"),t("span",j,"　"+c(e.bill.arr_time),1)])]),e.bill.fee==0?(a(),l("div",z,P)):x("",!0),t("div",R,[t("button",{class:"btn btn-primary",id:"toggleMyModal",onClick:s[0]||(s[0]=n=>i.openModal())},"發票折抵"),t("button",{class:m(["btn",e.bill.fee==0?"btn-secondary":"btn-primary"]),onClick:s[1]||(s[1]=(...n)=>i.pay&&i.pay(...n))},"繳費離場",2)]),t("div",U,[t("div",O,[t("div",G,[t("div",H,[e.isScan?(a(),l("div",J,[t("div",K,[g(b,{onInit:i.onInit,onDecode:i.onDecode,class:"mb"},{default:v(()=>[L]),_:1},8,["onInit","onDecode"])]),e.error?(a(),l("p",W,c(e.error),1)):(a(),l("p",X,"掃描中..."))])):(a(),l("div",Y,[t("div",Z,[$,h(t("input",{type:"text",class:"form-control",id:"discountQrcode",placeholder:"請輸入折扣券號碼或發票號碼","onUpdate:modelValue":s[2]||(s[2]=n=>e.discount.qrcode=n)},null,512),[[p,e.discount.qrcode]])]),t("div",tt,[st,h(t("input",{type:"text",class:"form-control",id:"discountAmount",placeholder:"請輸入發票金額","onUpdate:modelValue":s[3]||(s[3]=n=>e.discount.amount=n)},null,512),[[p,e.discount.amount]]),et])]))]),t("div",ot,[t("div",nt,[t("button",{class:"btn btn-primary me-4",onClick:s[4]||(s[4]=(...n)=>i.scanInput&&i.scanInput(...n))},c(e.isScan?"手動輸入":"掃描輸入"),1),t("div",it,[ct,t("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:s[5]||(s[5]=n=>i.getDiscount())},"確認")])])])])])],512)])])],64)}const dt=f(I,[["render",at]]);export{dt as default};
