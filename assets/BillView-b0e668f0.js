import{_ as m,v as _,r as h,o as i,c as d,a as s,b,w as y,t as l,F as f,p as g,d as M,e as a,f as S,n as w,g as u,h as p}from"./index-60919979.js";const C={data(){return{discount:{qrcode:"",amount:""}}},components:{QrStream:_.QrStream,QrCapture:_.QrCapture,QrDropzone:_.QrDropzone},methods:{onDecode(o){this.discount.qrcode=o}}},Q=o=>(g("data-v-40153c87"),o=o(),M(),o),I={class:"stream"},D=Q(()=>s("div",{style:{color:"red"},class:"frame"},null,-1)),k={class:"result"};function q(o,e,v,x,t,c){const r=h("qr-stream");return i(),d(f,null,[s("div",I,[b(r,{onDecode:c.onDecode,class:"mb"},{default:y(()=>[D]),_:1},8,["onDecode"])]),s("div",k,[s("p",null,"Result: "+l(t.discount.qrcode),1)])],64)}const V=m(C,[["render",q],["__scopeId","data-v-40153c87"]]),B="/couponC/assets/icons8-info-success-38adac5f.svg";const N={data(){return{bill:{station:"群和智慧MitWit",plate:"",fee:"180",arr_time:"2023-09-05 13:30:00"},isScan:!0,discount:{qrcode:"",amount:""}}},components:{QrcodeScanner:V},methods:{search(){this.bill.plate=localStorage.getItem("plate"),console.log(this.discount)},openModal(){const o=this.$refs.discountModal;o&&new bootstrap.Modal(o).show()},scanInput(){this.isScan=!this.isScan},getDiscount(){console.log(this.discount),this.bill.fee="50";const o=this.$refs.discountModal;o&&new bootstrap.Modal(o).hide(),this.search()}},mounted(){this.search()}},F=s("header",null,[s("div",{class:"bg-dark text-white text-center py-3"},"停車費折抵")],-1),j={class:"container mt-2"},z={class:"plate-img"},T={class:"bill p-4"},E={class:"border-bottom"},R=s("p",{class:"text-secondary"},"應繳金額",-1),U={class:"text-center"},A={class:"fs-3"},W={class:"mt-2"},G={class:"text-secondary"},H={class:"text-primary"},J={class:"text-secondary"},K={class:"text-primary"},L={key:0,class:"warningInfo"},O=s("p",{class:"text-success fs-6 mt-1"},[s("img",{src:B,alt:"info-icon"}),a(" 無需繳費，請儘速離場，謝謝！")],-1),P=[O],X={class:"btns d-flex justify-content-around"},Y={class:"modal",tabindex:"-1",id:"discountModal",ref:"discountModal"},Z={class:"modal-dialog modal-dialog-centered"},$={class:"modal-content"},ss={class:"modal-body"},ts={key:0,class:"scan d-flex flex-column align-items-center"},os={key:1},es={class:"mb-3"},ns=s("label",{for:"exampleFormControlInput1",class:"form-label"},[a("折扣券號碼或發票號碼"),s("span",{class:"text-danger"},"*")],-1),cs={class:"mb-3"},ls=s("label",{for:"exampleFormControlInput1",class:"form-label"},"發票金額",-1),as=s("small",{class:"text-secondary"},"若為折扣券，則金額請輸入 0",-1),is={class:"modal-footer"},ds={class:"d-flex justify-content-between"},rs={class:"d-flex justify-content-between"},_s=s("button",{type:"button",class:"btn btn-sm btn-outline-secondary me-1","data-bs-dismiss":"modal"},"取消",-1);function us(o,e,v,x,t,c){const r=h("QrcodeScanner");return i(),d(f,null,[F,s("div",j,[s("div",z,l(t.bill.plate),1),s("section",T,[s("section",E,[R,s("p",U,[a("NT$ "),s("span",A,l(t.bill.fee),1)])]),s("section",W,[s("p",G,[a("停車地點"),s("span",H,"　"+l(t.bill.station),1)]),s("p",J,[a("進場時間"),s("span",K,"　"+l(t.bill.arr_time),1)])]),t.bill.fee==0?(i(),d("div",L,P)):S("",!0),s("div",X,[s("button",{class:"btn btn-primary",id:"toggleMyModal",onClick:e[0]||(e[0]=(...n)=>c.openModal&&c.openModal(...n))},"發票折抵"),s("button",{class:w(["btn",t.bill.fee==0?"btn-secondary":"btn-primary"])},"繳費離場",2)]),s("div",Y,[s("div",Z,[s("div",$,[s("div",ss,[a(l(t.discount)+" ",1),t.isScan?(i(),d("div",ts,[b(r)])):(i(),d("div",os,[s("div",es,[ns,u(s("input",{type:"text",class:"form-control",id:"discountQrcode",placeholder:"請輸入折扣券號碼或發票號碼","onUpdate:modelValue":e[1]||(e[1]=n=>t.discount.qrcode=n)},null,512),[[p,t.discount.qrcode]])]),s("div",cs,[ls,u(s("input",{type:"text",class:"form-control",id:"discountAmount",placeholder:"請輸入發票金額","onUpdate:modelValue":e[2]||(e[2]=n=>t.discount.amount=n)},null,512),[[p,t.discount.amount]]),as])]))]),s("div",is,[s("div",ds,[s("button",{class:"btn btn-primary me-4",onClick:e[3]||(e[3]=(...n)=>c.scanInput&&c.scanInput(...n))},l(t.isScan?"手動輸入":"掃描輸入"),1),s("div",rs,[_s,s("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:e[4]||(e[4]=n=>c.getDiscount())},"確認")])])])])])],512)])])],64)}const ms=m(N,[["render",us]]);export{ms as default};