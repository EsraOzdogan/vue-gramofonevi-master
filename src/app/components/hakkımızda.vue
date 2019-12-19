<template>
  <div>
    <div class="vld-parent">
      <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"
      ></loading>
    </div>
     <div class="wrapper">
     <div class="container">
        <h3>Hakkımızda</h3>
       <div class="logo">
         <img src="../components/img/hakkımızda.jpeg">
       </div>
        <div class="sepet-row">
          <v-stepper  ref="stepper" :steps="steps" v-model="step" style="margin-left:100px;width:70%; margin-top:10px"></v-stepper>

          <template v-if="step==1">
            <p class="boşluk"> 
               2003 YILININ HAZİRAN AYINDA 8 M2  ALANDA BAŞLADIĞIMIZ İŞİMİZ BİZİ ZAMANLA GÜZEL BİR SERÜVENE SÜRÜKLEDİ. KÜÇÜK DÜKKANIMIZDA HAREKET EDECEK YER YOKKEN , O ZAMANIN VERDİĞİ HEYECANLA PLAK ARŞİVİMİZİ OLUŞTURUP DAHA SONRA SESİMİZİ KOLEKSİYON SEVDALILARININ DESTEĞİYLE DUYURMAYA ÇALIŞTIK. ZAMANLA DÜKKANIMIZ VE FISILTI GAZETEMİZ GELİŞTİ. BÜYÜDÜK VE ARTIK FISILDAMIYORDUK. OLUŞTURDUĞUMUZ WEB SAYFAMIZ GRAMOFONEVİ.COM LA BİRÇOK KİTLEYE ULAŞABİLİYORDUK.    
           </p>
          </template>

        <template  v-if="step === 2">
           <p class="boşluk">
             Sonra müzik kayıt tarihini oluşturuken geçmişimizin aslında plaklardan, pikaplardan yada gramofonlardan, yani sadece müzikten ibaret olmadığını gördük. Geçmiş zamanlarda; evlerde ve işyerlerinde kulanılmış objeleri, eşyaları mekanikleri toplamaya başladık. Ya da bize hikayeleri ile geldiler. Gramofon Evi bir yandan müzik derken, diğer taraftan da her döneme ait popart retro ve vintage ürünler ile hem restorasyon hem de satışını yaparak yelpazesini genişletmiş oldu.  Amatör ruhumuzu kaybetmeden sanatın ve tarihin etkisinde kalarak kendini yenielyen ve büyüyen ailemiz önce Balçova ve Alaçatı devamında da Kızlarağası Hanında Gramofon Evi ve Gramofon Evi Atölye olarak faaliyetine devam etmektedir.  
           </p>
              
        </template>
        <template v-if="step==3">
          <p class="boşluk">
            Kaderine terk edilmiş, zamana karşı duramayan pikap, radyo ve nostaljik cihazlarınızın bakımını, ayrıca antikalarınızın restorasyonlarını yaparak, yeniden hayat bulmalarını sağlıyoruz. Anılarınızdaki ürünler, işini bilen usta ellerde ilk günkü görüntüsüne ve performansına yeniden kavuşuyor. 
           </p>
        </template>
        <template  v-if="step==4">
          <p class="boşluk">
            Gramofon Evi Atölyeye gelen bütün ürünler restorasyon ve onarım işlemine tabi tutulmadan önce gerekli olan bütün kontrolleri yapılıp, eksiklikler tespit edildikten sonra, katalog ve şema bilgilerine göre yeniden değerlendirilmekte ve müşterilerin onay vermesiyle ilk günkü hallerine kavuşturulmaktadır.Bazen küçük bir oyuncağınız, bazen babanızdan kalan bir pikap, hatta anne annenizin duvarını süsleyen kocaman bir saat bile Gramofon Evi Atölyede hayat bulur.
           </p>
        </template>
        <template  v-if="step==5">
           <p class="boşluk">
              Gramofon Evi Atölye hakkında ayrıntılı bilgiyi aşağıdaki linte bulabilirsiniz:http://www.gramofoneviatolye.com
           </p>
        </template>

       </div>
           <br>
        <br>

         <button type="button" @click="$refs.stepper.previous()">Geri Dön</button>
         <button type="button" @click="$refs.stepper.next()">İleri</button>
         <button type="button" @click="$refs.stepper.reset()">Başa Dön</button>
     </div>
     


   </div>
 </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { VStepper } from 'vue-stepper-component'

export default {
  components: {
    Loading,
    VStepper
  },
  data: () => ({ steps: 6, step: undefined }),
  methods: {
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    }
  }
};
</script>

<style scoped>
 .wrapper {
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .container{
      background-color: white;
      height: 700px;
  }
button{
    background-color: black;
    color:white;
    margin-right: 8px
}
.logo{
  text-align: center;
  margin-top:25px;
}
h3{
  text-align: center;
    margin-top: 40px;

}
button{
  background-color: peru;
  padding: 10px 10px 10px 10px;
  border-radius: 3px;

}
button:hover{
  background-color: bisque
}
.sepet-row{
  margin-top: 25px
}
.boşluk{
    margin-top: 25px;
    padding-top:25px;
}
</style>


  

