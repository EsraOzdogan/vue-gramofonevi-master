<template>
 <div id="products" class="box">
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
              <a><router-link to="/">ANA SAYFA</router-link></a>  <!--eski sayfalara dönüş linkleri-->
              <span> &nbsp; &gt; &nbsp;</span>
              <a><router-link to="/productlist">PİKAP İĞNELERİ-AKS</router-link></a>
            </div>
          </div>
          <div class="Urun">
            <div class=""><!--ürün adet ve filtre-->
              <h1>PİKAP İĞNESİ -AKS</h1>
              <div>
                <div class="ürünsayi">
                  <div>  <!--ürün bilgisi-->
                    <div>
                      {{productItemsCount}} ürün
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
              
                <br>
                <br>
                <div class="container"><!--anasayfa ve pikapiğnesi sayfasına gidiş-->
    
                     <div class="Urun">
                        <div class="row">
                          <div v-for="productItem in productItems" :key="productItem.id">
                             <ProductListItem :productItem="productItem" />
                          </div>  
                        </div>
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
                              <a ><router-link to="/objekoleksiyonu" data-ci-pagination-page="3" class="" >3</router-link></a>
                            </li>
                            <li>
                              <a ><router-link to="/pikapignesi" data-ci-pagination-page="" class="" >&gt;</router-link></a>
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
    </div>











 

</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
// import { mapGetters } from "vuex";
import ProductListItem from "./ProductListItem";
export default {
  name: "ProductList",
   data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },
  components: {
    ProductListItem,
    Loading
  },
  computed: {
    productItems() {
      return this.$store.getters.productItems;
    },
    productItemsCount() {
      return this.$store.getters.productItemsCount;
    }
    // ...mapGetters(["productItems", "productItemsCount"])
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
  el: "#app5",
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

<style>
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
.box .products--header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

.box .product-list {
  padding-top: 10px;
}
</style>
