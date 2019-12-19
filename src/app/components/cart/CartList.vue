<template>
  <div id="cart">
    <div>
    <div class="wrapper">
      <div class="sepet-container">  <!-- sepetin arkaplanı-->
        <div class="sepet-row">
          <v-stepper  ref="stepper" :steps="steps" v-model="step" style="margin-left:100px;width:70%; margin-top:10px"></v-stepper>

          <template v-if="step==1">
              <div class="ürün">  <!-- ürün tablosu paneli-->
            <div class="panel">
              <div class="panel-icerik">
                <div class="cart--header has-text-centered">
                  <i class="fa fa-2x fa-shopping-cart"></i>
                </div>
                <p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
                  SEPET BOŞ
                </p>
                <ul v-if="cartItems.length > 0">
                  
                  
                
                <table class="tablo table-hover">  <!-- tablo-->
                  <thead>
                  <tr>
                    <th>Ürün</th>
                    <th>Adet</th>
                     <!--<th>Fiyat</th>-->
                    <th>Toplam Tutar</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      <div v-for="cartItem in cartItems" :key="cartItem.id" class="cart-item">
                        <CartListItem :cartItem="cartItem" />
                      </div>
                   </td>  <!--tablo içeiği-->
                    <td>
                      <p>
                        <span class="has-text-weight-bold">{{cartItemsCount}}</span>
                      </p>

                    </td>
                    <!--<td>
                      <p v-for="cartItem in cartItemsPrice" :key="cartItem.id" class="cart-item">
                        <CartListItem :cartItem="cartItemsPrice" />
                      </p>
                    </td>-->
                    <td>
                       <div :disabled="!cartItemsCount">                    
                        <span >₺{{cartTotalPrice}}</span>
                      </div>
                      <!--<button :disabled="!cartItems.length" class="button is-primary">
                         <span class="has-text-weight-bold">₺{{ cartTotal }}</span>
                      </button>-->
                      
                    </td>
                    <td>
                      <p @click="removeAllCartItems"
                        class="cart-remove-all--text">
                        <i class="fa fa-trash"></i>Sepeti Boşalt
                      </p>
                  
                    </td>
                  </tr>
                  </tbody>
                </table>
                </ul>

              </div>

            </div>

          </div>


<!--
          <div class="cart--header has-text-centered">
            <i class="fa fa-2x fa-shopping-cart"></i>
          </div>
          <p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
            Add some items to the cart!
          </p>
          <ul v-if="cartItems.length > 0">
            <li v-for="cartItem in cartItems" :key="cartItem.id" class="cart-item">
              <CartListItem :cartItem="cartItem" />
            </li>
            <div class="cart-details">
              <p>Total Quantity:
                <span class="has-text-weight-bold">{{ cartQuantity }}</span>
              </p>
              <p @click="removeAllCartItems"
                class="cart-remove-all--text">
                <i class="fa fa-trash"></i>Remove all
              </p>
            </div>
          </ul>-->
          


          

          



          </template>

        <template v-if="step === 2">
           <div class="siparisözeti">  <!--sipariş özeeti paneli-->
            <div class="panel">
              <div class="panel-icerik1">

                <row>                           <!-- başlık-->
                  <h2>SİPARİŞ ÖZETİ</h2>
                </row>

                <!--<div class="sol">
                  <h5>Ara Toplam:</h5>
                </div>
                <div class="sag">
                  <h5> ₺<span class="has-text-weight-bold">₺</span></h5>
                </div>-->

                <div class="toplam-tutar">   <!-- toplam tutar-->
                  <h6>Toplam Tutar:</h6>
                </div>
                <div class="para">            <!--para -->
                  <div class="toplamf" :disabled="!cartItemsCount">                    
                    <span >₺{{cartTotalPrice}}</span>
                  </div>
                </div>
            

                <button type="button" class="buton1 btn-success ladda-button" >  <!--satın al butonu-->

                  <span class="ladda-label"><i class="icons-office-51" @click="$refs.stepper.next()"></i> <router-link to="">SATIN AL</router-link></span>

                </button>

              </div>

            </div>

          </div>


        </template>
        <template v-if="step==3">
           <div class="siparisözeti">  <!--sipariş özeeti paneli-->
            <div class="panel">
              <div class="panel-icerik1">

                <row>                           <!-- başlık-->
                  <h2>SİPARİŞ ÖZETİ</h2>
                </row>

                <!--<div class="sol">
                  <h5>Ara Toplam:</h5>
                </div>
                <div class="sag">
                  <h5> ₺<span class="has-text-weight-bold">₺</span></h5>
                </div>-->

                <div class="toplam-tutar">   <!-- toplam tutar-->
                  <h6>Toplam Tutar:</h6>
                </div>
                <div class="para">            <!--para -->
                  <div class="toplamf" :disabled="!cartItemsCount">                    
                    <span >₺{{cartTotalPrice}}</span>
                  </div>
                </div>
            

                <button type="button" class="buton1 btn-success ladda-button" >  <!--satın al butonu-->

                  <span class="ladda-label"><i class="icons-office-51"></i> <router-link to="/giris">GİRİŞ YAP</router-link></span>

                </button>
                 <button type="button" class="buton1 btn-success ladda-button" >  <!--satın al butonu-->

                  <span class="ladda-label"><i class="icons-office-51"></i> <router-link to="/kayıt">ÜYE OL</router-link></span>

                </button>
                 <button type="button" class="buton1 btn-success ladda-button" >  <!--satın al butonu-->

                  <span class="ladda-label"><i class="icons-office-51"></i> <router-link to="/misafirolarakdevamet">MİSAFİR OLARAK DEVAM ET</router-link></span>

                </button>

              </div>

            </div>

          </div>


        </template>
           <template v-if="step==4">
           </template>


        </div>
        <br>
        <br>

         <button type="button" @click="$refs.stepper.previous()">Geri Dön</button>
         <button type="button" @click="$refs.stepper.next()">Sipariş Tablosu</button>
         <button type="button" @click="$refs.stepper.reset()">Reset</button>
      </div>

    </div>
    
  </div>
















    
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import CartListItem from './CartListItem';
import { VStepper } from 'vue-stepper-component'

export default {
  name: 'CartList',
  computed: {
    ...mapGetters(['cartItems', 'cartTotal', 'cartQuantity']),
    ...mapGetters(["cartItems", "cartItemsCount", "cartTotalPrice","cartItemsPrice"])
  },
  created() {
    this.$store.dispatch('getCartItems');
  },
  methods: {
    ...mapActions(['removeAllCartItems'])
  },
  components: {
    CartListItem,
    VStepper
  },
    props: {
    message: String
  },
  el: "#app5",
 
    data: () => ({ steps: 4, step: undefined })
};
</script>

<style scoped>
.wrapper {
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .sepet-container {
    background-color: white; /*üye kaydınıın arkasının arka zemininin rengi*/
    min-height: 430px;
    padding-top: 25px;
    padding-left: 20px;
    width: 100%;
  }
  .ürün{  /*ürün tablosu özelliği*/
    width: 600px;  /*genişlik*/
    margin-left: 45px; /*soldan 45px ötelenmesi*/
    margin-top: 10px; /*sağdan 10px ötelenmesi*/
  }
  .panel{  /*panellerin özellikleri*/
    background: white;
    border-radius: 0;
    border: 1px solid #E2E2E2;
    color: dimgrey;
    box-shadow: 0 0 5px #E2E2E2;
    margin-top: 35px;
    width:100%;
    margin-left: 120px

  }
  .panel-icerik{ /*panelin içinden kenar boşlukları*/
    padding: 20px 20px 10px 20px;
    font-size: 15px;
  }
  .tablo{ /*ürün özellikleri tablosunun özelliikleri*/
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    background-color: transparent;
    border-spacing: 0;
    border-collapse: collapse;
    display: table;
    border-color: grey;
  }
  thead {  /*ürün özellikleri tablosunun yukarıdaki ürün adet fiyat vsnin özellikleri*/
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .tablo > thead > tr > th{  /*tablodaki ürün adet fiyat vs özellikleri*/
    padding: 8px;
    vertical-align: middle;
    border-bottom: 2px solid #ddd;
    line-height: 1.5;
  }
  .tablo> tbody > tr > td{ /*tablodaki body kısmındaki yazıların özellikleri*/
    padding: 8px;
    vertical-align: middle;
    border-top: 1px solid #ddd;
    line-height: 1.5;
  }
  .table-hover td {/*ürünün özelliklerinin alttondaki çizgi*/
    border-bottom: 2px solid #F0F4F8;
  }
  button{
       margin-bottom: 30px;
       padding: 5px 5px 5px 5px;
       border-radius: 2px
  }
  .buton { /*ürünü silme butonunun özellikleri*/
    margin: 10px 1px;
    cursor: pointer;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0 0 5px #E2E2E2;
    font-size: 11px;
    padding: 5px 12px ;
    border: 1px solid #E0E0E0 ;
    color: #373C40;
  }
  .siparisözeti{  /*sipariş özeti tablosunun gridinin öaellikleri*/
    width: 45%;
    margin-left: 80px;
  }
  .panel-icerik1{ /*sipariş özeti tablosunun panel içeriği*/
    padding: 10px 40px 20px 40px;
    background-clip: padding-box;
  }
  h2{ /*sipariş özeti yazısının özellikleri*/
    text-align: center; /*yazının  merkezde olması*/
    color: inherit; /*rengini panel rengine benzemesi*/
    font-family: Helvetica Neue,Helvetica,Arial;
    font-weight: 300; /*yazının  kalınlıpı*/
    font-size: 25px;
  }
  .sol{ /*aratoplam yazısının sola konumladırılması*/
    float: left;
  }
  .sag{ /*fiyatın sağa konumlandırılması*/
    float:right;
  }
  .toplam-tutar{ /*toplam tutar yazısının özelliği*/
    margin-left: 100px;
    margin-right: 100px;
    color: #2d2d2d;
    background-color: #9e9e9e;
    margin-top: 50px;
    text-align: center;
    width: 80px;
    margin-bottom: -25px;
    margin-right: 20px;
  }
  .para{ /*fiyatın merkeze konumlandırılması*/
    text-align: center;
    margin-top: -5px;
  }
  .buton1{  /*satın al butonunun özellikleri*/
    height: 35px;
    background-color: #4caf50;
    color: white;
    position: relative;
    border-color: gray;
    margin-left: 65px;
    width: 58%;
    padding : 8px 15px 15px;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    box-shadow: 0 0 5px gray;
    border: 0;
    border-radius: 2px;
    outline: none !important;
  }
  .btn-success {  /*butona gelince butonun renginin değişmesi**/
    background-color: #4caf50;
    color: rgba(255, 255, 255, 0.84);
  }
  /* .icons-office-51:before {
     content: "\e125";
   }*/
   button{
     background-color: #4caf50;
     color: #ddd;
     margin-right: 10px;
   }
   button:hover{
     background-color: white;
     color: #2d2d2d
   }
#cart {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-empty-text {
  padding: 10px 0;
}

.cart--header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

.cart-item {
  padding: 10px 0;
}

.cart-details {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.cart-remove-all--text {
  cursor: pointer;
}

.cart-remove-all--text .fa {
  padding-right: 5px;
}
.toplamf{
  margin-bottom:35px;
  font-size: 15px;
  margin-left:5px;
}
</style>
