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
     <div class="container"><!--anasayfa ve pikapiğnesi sayfasına gidiş-->
      <div class="row">
            <div class="geridönüs-ic">
              <a><router-link to="/objekolekiyon">Ana Sayfa</router-link></a>  <!--eski sayfalara dönüş linkleri-->
              <span> &nbsp; &gt; &nbsp;</span>
              <a><router-link to="/objekoleksiyon">KOLEKSİYON ÜRÜNLERİ</router-link></a>
              <span> &nbsp; &gt; &nbsp;</span>
              <a><router-link to="/objekoleksiyon">OBJE KOLEKSİYONU</router-link></a>
            </div>
          </div>
          <div class="Urun">
            <div class=""><!--ürün adet ve filtre-->
              <h1>PİKAP İĞNESİ -AKS</h1>
              <div>
                <div class="ürünsayi">
                  <div>  <!--ürün bilgisi-->
                    <div>
                      9 ürün
                    </div>

                    <div class="ürünsecenek">  <!--ürün filtreleme-->
                      <select id="ürünfiltreleme">
                        <option value="alfabetik-asc">Ürün Adı (A-Z)</option>
                        <option value="alfabetik-desc">Ürün Adı (Z-A)</option>
                        <option value="tarih-desc" selected="selected">En yeniler</option>
                        <option value="fiyat-asc">En düşük fiyat</option>
                        <option value="fiyat-desc">En yüksek fiyat</option>
                      </select>
                    </div>

                  </div>
                </div>
                <div class="row ">
                    <b-card
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                
                    >
                    <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/8080e-a329768b-b50a-40f7-ac7e-64cf739ef88f-262x184.jpeg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                        <b-card-text style="font-size:13px;">                   
                            DÜNYA UÇAK TARİHİ AFİŞ
                        </b-card-text>
                        <span class="image1f"> 500 TL</span>                    
                    </b-card>

                      <b-card
                    
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                      href="/PikapIgnesiVeKristali"
                    >
                    <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/a1446-c7f19af6-d5b6-4471-a001-0b5cd6deff59-262x262.jpeg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                        <b-card-text style="font-size:13px;">                   
                            ESKİ DÜNYA HARİTASI(2 PARÇA)
                        </b-card-text>
                        <span class="image1f"> 945 TL</span>                    
                    </b-card>
                    
                    <b-card
                          
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                        <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/43fc9-dc69f58c-4366-42b0-bfc5-4a4519d42e2a-262x262.jpeg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                            <b-card-text style="font-size:13px;">                   
                                PERGEL;ÖLÇÜ ALETİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                    </b-card>
                   

                     <b-card
                     
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                      href="/PikapIgnesiVeKristali"
                    >
                    <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/213d4-ce3b1a02-00f6-4643-9486-bc3e7ef9d7ab-262x302.jpeg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                        <b-card-text style="font-size:13px;">                   
                            ESKİ ÇEKİ ÖLÇÜ ALETİ
                         </b-card-text>
                         <span class="image1f"> 150 TL</span>                    
                    </b-card>

                    <b-card
                         
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                         <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/9ae7c-c71256ad-590c-4a46-b8b2-5447282af308-262x287.jpeg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                            <b-card-text style="font-size:13px;">          
                              SİGARA KUTUSU         
                            </b-card-text>
                            <span class="image1f"> 200 TL</span>                    
                     </b-card>

                     <b-card
                          
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                          <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/b4489c288c4a591bbc4759623f845a5e531f2c8e-262x262.jpg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                            <b-card-text style="font-size:13px;">                   
                               KUTUDA ÇANAKKALE SUBAY DÜRBİNİ
                            </b-card-text>
                            <span class="image1f"> 2250 TL</span>                    
                     </b-card>

                      <b-card
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                         <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/6a51c7f51ed1c4a7fc9d8940a758623d9810fb01-262x262.jpg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                            <b-card-text style="font-size:13px;">                   
                               İNGİLİZ OCAKLI ÇAY SEMAVERİ 
                            </b-card-text>
                            <span class="image1f"> 1200 TL</span>                    
                     </b-card>
                     <b-card
                          
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                        <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/8daf2372e4d2f40cf8e2afa142728e7fc4f4440f-262x262.jpg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                            <b-card-text style="font-size:13px;">                   
                               GÖNÜL YAZILI AHŞAP TABELA
                            </b-card-text>
                            <span class="image1f"> 500 TL</span>                    
                     </b-card>
                     <b-card
                         
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                        <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/qb2ih01sxy-262x262.jpg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                            <b-card-text style="font-size:13px;">                   
                               YILDIZ ELEKTRİKLİ EKMEK KIZARTMA MAKİNESİ
                            </b-card-text>
                            <span class="image1f"> 250 TL</span>                    
                     </b-card>
                    
                </div>
                    <div class="ürünsayi">
                      <div class="row">
                        <div class="ürünsecenek1">
                          <ul>
                            <li class="aktifsayfa">  <!--aktif sayfai-->
                              <a>1</a>
                            </li>         <!--sonraki sayfaya geçiş-->
                            <li>
                              <a><router-link to="/pikapignesi" data-ci-pagination-page="2" class="" >2</router-link></a>
                            </li>
                            <li>
                              <a ><router-link to="/productlist" data-ci-pagination-page="3" class="" >3</router-link></a>
                            </li>
                            <li>
                              <a ><router-link to="/productlist" data-ci-pagination-page="" class="" >&gt;</router-link></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
             </div>
           </div>    
         </div>

     </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },

  components: {
    Loading
  },
  methods: {
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    say: function (message) {
        alert(message)
      }
  }
};
</script>

<style scoped>
.image-sepet {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
  height: 200px;
  width: 180px;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
 
  
}
.sepetbuton{
   width: 120px;
  background-color: #88604B;
  color: white;
  box-shadow:brown;
  cursor: pointer;
 border-radius: 33px;

}
.image-sepet:hover .image {
  opacity: 0.3;
}

.image-sepet:hover .middle {
  opacity: 1;
}






.row img:hover{
    -webkit-transform: scaleX(-1); 
    transform: scaleX(-1);
    transition: .5s ease;
  backface-visibility: hidden;
}
 .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    background-color: inherit;
  }
  .geridönüs-ic {   /*geridönüş anasayfa ve pikapsayfasına döniş kısmının yazı rengi ve kenarlardan boşluğu*/
    color: black;
    padding: 20px 0;

  }
  .geridönüs-ic a {  /*geridönüş anasayfa ve pikapsayfasının yazı rengi stiili ve kenar boşluğu*/
    font-family: "century";
    color: black;
    padding: 2px;
  }
  a:hover { /*anasayfa ve pikap iğnesine gidiş linkinin underline olması*/
    text-decoration: underline;
  }
  h1 {  /*pikap iğnesi aks yazısının özellükleri*/
    font-size: 30px;
    margin: 0px 0 0;
    font-family: 'Lora';
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
    display: block;
  }
  .ürünsayi {  /*87 ürün yazısının ve select menünün bulunduğu gridin özellikleri*/
    border: 3px double #ddd;
    background: white;
    margin: 15px 0 30px;
    padding: 3%;
  }
  .ürünsecenek { /*select menünün mzellikleri*/
    float: right;
    margin-bottom: -75px;
  }
  .ürünfiltreleme { /*select menünün genişliği ve kenar boşlukları*/
    width: 135px;
    padding: 5px;
  }
  option {/* select menüdeki optionların özellikleri*/
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
  .ürün-grid {
    float: left;
    width: 25%;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .ürün-resim {  /*ürün resminin özellikleri*/
    height: 300px;
  }
  .ürün-resim a img { /*ürün gridindeki resimlerin özellikleri*/
    width: 100%;
    vertical-align: middle;
    border: 0;
  }
  .ürün-aciklama a.ürün-baslik { /*ürünlerin isimlerinin özellikleri renk biyiklik kenar boşluğu vs*/
    color: #333;
    display: inline-block; /*başlık arası blok görünümü**/
    font-size: 12px;
  }
  .ürün-aciklama a { /*ürün başlık ve fiyatın arasındaki boşluk*/
    font-family: "century";
    height: 50px;
  }
  span.ürün-fiyat { /*ürün fiyatının özellikleri*/
    color: #8a624d;
    margin: 6px 0;
    font-size: 15px;
    font-weight: bold; /*yazının kalın olması*/
  }
  .ürünsecenek1 ul li {
    display: inline-block;/*sayfa ileri gerisinin blok şeklinde yanyana olmaası*/
  }
  .ürünsecenek1 ul li.aktifsayfa a { /*şuanki sayfanın yani 1. sayfanın özellikleri renk ve arka planın kahverengi olması*/
    color: black;
    background-color: #88604B;
  }
  .ürünsecenek1 ul li.active a:hover { /*1 rakamına tıklarken rengin siyah ve yazının altının çizgili olması*/
    color: black;
    text-decoration: underline;
  }
  .ürünsecenek1 ul li a { /*sayfa geçişleri kısmındaki blok olma özellikleri*/
    color: #88604B;
    border: 1px solid gray;
    display: inline-block;
    height: 36px;
    line-height: 34px;
    text-align: center;
    width: 36px;
  }
</style>


  

