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

      <div class="header-üst">
        <div class="menü-sol">
          <ul>
            <li class=" " @click="doAjax"><router-link to="/hakkımızda">{{message}}</router-link></li>
            <li class=" " @click="doAjax"><router-link to="/iletisim">İLETİŞİM</router-link></li>
          </ul>
        </div>
        <div class="menü-sağ">
          <ul>

            <li @click="doAjax"  ><router-link to="/giris" v-if="!user">ÜYE GİRİŞİ</router-link></li>
            <li @click="doAjax"><router-link to="/kayıt" v-if="!user">YENİ ÜYE</router-link>
            <a href="javascript:void(0)" v-else @click="logout" >ÇIKIŞ</a></li>

            <md-dialog :md-active.sync="showDialog1">
                <uyegiris/>
              <md-button class="md-primary" @click="showDialog1 = false">Close</md-button>
           </md-dialog>
            <md-li class="md-primary md-raised" @click="showDialog1 = true">ÜYE GİRİŞİ</md-li>




             <md-dialog :md-active.sync="showDialog">
                    <yeniuye/>
              <md-button class="md-primary" @click="showDialog = false">Close</md-button>
              </md-dialog>
              <md-li class="md-primary md-raised" @click="showDialog = true">YENİ ÜYE</md-li>
          </ul>
        </div>
      </div>
      <div class="header-orta">
        <div id="logo">
          <a href=""></a>

        <img src="../components/img/logo.png">

        </div>


            <div class="arama-alanı">
            <form class="arama-kutusu" action="index.html" method="post">
               <a>
                <input type="text" placeholder="Urunlerde ara..." name="">
                <button type="button" name="button">
                         <div id="app5" class="arama">
                          <div ref="myNav" class="overlay">
                            <a class="closebtn" @click="closeNav()">&times;</a>
                            <div class="overlay-content">
                              <textarea
                                name="directions"
                                required
                                placeholder="ARAMAK İSTEDİĞİNİZ ŞEYİ YAZINIZ..."
                                rows="3"
                                class="aramak"
                              ></textarea>
                            </div>
                          </div>
                          <svg width="25px" role="img" color="#fff" viewBox="0 0 512 512" @click="openNav()">
                            <path
                              fill="currentColor"
                              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                            />
                          </svg>
                          <img src="../components/img/search.png" />
                          <!-- <span @click="openNav()">open</span> -->
                        </div>


                </button>
               </a>
            </form>
          </div>













        <div id="kart">
          <img src="../components/img/cart.png" alt="" />
          <a href="#">
            <span><router-link to="/cartlist">SEPETİM</router-link></span>
          </a>
        </div>
      </div>
      <div class="header-menu">
        <ul class="menu">
          <li  @click="doAjax">
             <a ><router-link to="/productlist">PİKAP İĞNELERİ</router-link></a>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">YERLI PLAK</a>
            <div class="dropdown-içerik">
              <a href="#">
                YERLI 33'LUK PLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                YERLI 45'LIK PLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                YERLI TAŞPLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                KARTPOSTAL PLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
            </div>
          </li>
          <li class="dropdown">
            <a class="dropbtn">YABANCI PLAK</a>
            <div class="dropdown-içerik">
              <a href="#">
                YABANCI 33'LUK PLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                YABANCI 45'LIK PLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                YABANCI TAŞPLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                FONOGRAF KOVANI
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
            </div>
          </li>
          <li class="dropdown">
            <a class="dropbtn">PIKAP-GRAMOFON-RADYO</a>
            <div class="dropdown-içerik">
              <a href="#">
                PIKAP
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                AMFI/HOPARLÖR
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                GRAMOFON/RADYO
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>

            </div>
          </li>
          <li>
            <a href="#">MEKANIK ANTIKA</a>
          </li>
          <li>
            <a @click="doAjax"><router-link to="/objekoleksiyon">OBJE KOLEKSİYONU</router-link></a>
          </li>
          <li>
            <a href="#">OYUNCAK</a>
          </li>
          <li>
            <a href="#">EFEMERA</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
/*import { mapGetters ,mapActions } from 'vuex'*/
import uyegiris from './uyegiris'
import yeniuye from './yeniuye';


export default {
  /*  computed: {
        ...mapGetters({
            UserInfo:"UserInfo"
        }),
        ...mapActions({
            UserLogout:"UserLogout"
        }),
        user(){
            return this.UserInfo
        }
    },*/
  return: {
    isLoading: false,
    fullPage: true
  },
  props: {
    message: String
  },
   data: () => ({
    showDialog: false,
    showDialog1: false,
  }),
  components: {
    Loading,
    yeniuye,
    uyegiris
  },
  el: "#app5",
  methods: {
     /*   logout(){
          this.$store.dispatch('UserLogout');
          },*/
    closeNav() {
      this.$refs.myNav.style.width = "0%";
    },
    openNav() {
      this.$refs.myNav.style.width = "100%";
      this.$refs.myNav.style.height = "28.3%";
    },
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
md-dialog {
  max-width: 268px;
  height: 100%;
  }
md-li:hover {
  cursor: pointer;
  color: black;
  background-color: transparent;
  text-decoration: underline;
}

md-li{
  float: left;
  list-style-type: none;
}

md-dialog .arama {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  max-width: 100%;
}
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 1000px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
.arama {
  display: flex;
  padding-left: 25px;
  cursor: pointer;
}

.overlayarama {
  background-color: black;
  border: 0;
  cursor: pointer;
}
 .wrapper{ /*üye kaydının sayfanın ortasında durması için wrapper*/
    width: 1170px; /*sayfadaki genişliği*/
    margin: 0 auto; /*üye kaydının wrapperin başlangıcından başlaması*/
    padding: 0 15px; /*üye kaydının sağ ve soldan ortalanması*/
  }
  .kayıt-container {
    background-color:white; /*üye kaydınıın arkasının arka zemininin rengi*/
    padding-top: 25px;
    padding-left:20px;
    padding-bottom: 20px;
    height: 664px;
  }
  .kayıt-container .üye-kayıt-panel {
    width: 50%;
    height: 550px;
    margin-left: 50px;
    margin-right:500px;
    margin-bottom:20px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .kayıt-container .üye-kayıt-panel .panel-üst h2 { /* ÜYE KAYDI yazısının özellikleri*/
    font-family: 'Open Sans'; /*yazı stili*/
    font-size: 24px; /*yazı büyüklüğü*/
    font-weight: 100; /*yazı kalınlığı*/
    line-height: normal; /*satır yüksekliği*/
    margin-bottom: 5px; /*aşağıdan yüksekliği*/
    margin-top: 7px; /*yukarıdan yüksekliği*/
  }
  .panel-üst {/*üye kayıt panelinin üstündeki alan*/
    background-color: black ; /*arkaplan rengi*/
    color: white;/*yazı rengi*/
    padding: 6px 15px 6px 18px;/*panelin üst (siyah) kısmının yanlardan boşluk olması yukarı sağ aşağı sol*/
  }
  .panel-alt { /*üye kayıt panelinin alt kısmı*/
    background-color: white; /*alt kınmın arka plan rengi*/
    color: black; /*yazı rengi*/
    padding: 20px 20px 10px 20px; /*üyekayıt panelinin alt kısmının kenardan boşlukları*/
  }
  strong { /*Girişinin kalın yazılması */
    font-family: 'Open Sans';/*Girişinin yazı tipi */
    font-weight: 900;/*Girişinin kalınlığı */
  }
  p {/*kayıt olmak için üye bilgilerinizi doldurun kısmı*/
    line-height: 23px;
    font-size:large;
    margin: 0 0 10px;
  }
  .kontrolkenar{
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .bilgiformu .kontroltuş {
    color: rgba(0, 0, 0, 0.84); /*formun içindeki ad soyadın vs.nin rengi*/
    text-align: left; /*formun içindeki ad soyadın soldan başlaması*/
    top: 10px; /*formun içindeki ad soyadın yukardan boşlğu*/
    font-size: 12px;
    padding-right: 100px;
    padding-top: -15px;
    margin-bottom: 7px;
  }
  .bilgiformu .formitem{
    text-align: left;
  }
  .labelkontrol{
    text-align: left;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    margin-left: 105px;
  }
  .ikon {
    position: relative;
  }
  .ikon input {
    padding-left: 36px ;/*ikonun bulundupu inputtaki soldan 36px kaydırılması*/
  }
  input.kontrolform {
    border: 0; /*sınırların 0 olması yani hiç olmaması*/
    background-image: linear-gradient(#0097a7,#0097a7),linear-gradient(#d2d2d2,#d2d2d2);
    height: 34px;/*her bir itemin yüksekliği*/
    background-size: 0px,  100% 1px;/*alt çizginin rengi, çizginin tüm satırda olması çizgi genişliği,çizgininyerden yukarıya yüksekliği yani çizgikadar 1px*/
    background-repeat: no-repeat;/*inputların arka planı yukarda gri oluyor ya resimden dolayı onun tekrar edilmemesi*/
    background-position: center bottom, center calc(100% - 1px);/*inputların  arasındaki çizginini orta ve aşağıdaki sınır*/
  }
  .kontrolform{
    background-size: 0 2px, 100% 1px;
    background-repeat: no-repeat;
    background-position: center bottom, center calc(100% - 1px);
    color: #555555;
    display: inline-block;
    font-size: 13px;/*inputun içindeki giriniz yazıları*/
    vertical-align: middle;
    width: 75%;
  }
  input {
    word-spacing: normal;/*kelime boşluğu normal*/
    cursor: text;/*inputun içine gelince imleç text biçiminde*/
  }
  .bilgiformu .ikon i {
    left: 15px;/*ikonun ikon divinin içindeki konumu*/
  }
  .ikon i {
    color: gray;/*ikon rengi*/
    font-size: 14px; /* ikon bobyutu*/
    height: 34px; /*yükseklik*/
    line-height: 34px; /*satır yükeskliği*/
    position: absolute;
    text-align: center; /* metine göre konumu*/
    top: 0;
    width: 36px; /*genişliği*/
  }
  .butonsağ{/*kayıt ol butonunun sağa götürüyor*/
    float: right;
  }
  .buton{
    height: 35px;
    width:135px;
    margin: 10px 1px;
    background-color: #0097a7;
    color: white;
    border-radius: 2px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    font-size: 14px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
button {
    font-size: 1.25rem;
    border-radius: 3%;
    background-color: #f63954;
    border-color: #f63954;
    color: #fff;
    font-weight: 500;
}
  .wrapper{

    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }
  a{
    color: black;
    font-size: 12px;
    font-family: 'Century', serif;
    text-decoration: none;
    transition: all 150ms ease 0s;
  }
  ul{
    padding: 0;
    margin: 0
  }

  .header-üst{
    border-bottom: 2px dashed #6f6d6e;
    height: 59px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-üst ul li a:hover {
    color: black;
    background-color: transparent;
    text-decoration: underline;
  }

  .header-üst ul li{
    float: left;
    list-style-type: none;
  }
  .header-üst ul li a{
    padding: 0 10px;
    border-right: 1px solid #ddd;
  }
  .header-üst ul li:last-child a {
    border-right: none;
  }

  .header-orta{
    border-top: 4px double #acabab;
    margin-top: 5px;
    padding-top: 20px;
    height: 104px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .arama-kutusu{
    background: #faf9f8 none repeat scroll 0 0;
    padding: 3px;
    position: relative;
  }

  .arama-kutusu button{
    position: absolute;
    right: 10px;
    top: 12px;
    border: 0;
    background: none;
    cursor: pointer;
  }
  .arama-kutusu img{
    width: 15px;
    opacity: .5;
  }
  .arama-kutusu input{
    width: 354px;
    height: 33px;
    padding: 0 10px;
    border: 1px solid #ddd;
  }
  .kart {
    display: flex;
    align-items: center;
  }
  .kart a{
    border-bottom: 4px double #ddd;
    border-top: 4px double #ddd;
    color: #070504;
    display: inline-block;
    padding: 10px 5px 10px 20px;
  }
  .header-menu{
    background: url("../components/img/menu.jpg") repeat;
    margin-top: 5px;
    padding: 5px;
  }
  .header-menu .menu {
    border: 1px solid #ddd;
  }
  .header-menu ul li{
    position: relative;
    display: inline-block;
    padding: 0px;
  }

  .header-menu ul li a {
    color: #333;
    display: block;
    font-family: 'Lora', sans-serif;
    letter-spacing: -1px;
    font-size: 14px;
    margin: 0 1px;
    padding: 8px 14px 7px;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
  }
  .header-menu ul li a:before {
    background: #ddd none repeat scroll 0 0;
    content: "";
    height: 21px;
    position: absolute;
    right: 0;
    top: 20%;
    width: 1px;
    z-index: 1;
  }
  .header-menu ul li a:hover{
    background: #413d3e;
    color:#fff;
  }
  li.dropdown {
    display: inline-block;
  }
  .dropdown-içerik {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-içerik a {
    background-color:white;
    color: black;
    padding: 35px 42px;
    font-family: 'Lora', sans-serif;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  .dropdown-içerik a:hover {background:white;
    color:black;
    text-decoration: underline;}

  .dropdown:hover .dropdown-içerik {
    display: inline-block;
  }

  .dropdown-içerik a i {
    float: left;
    color:black;
    padding: 2px;

  }
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 450px;
  }
  .mean-container .mean-bar {
    background: #88604B;
    z-index: 99;
    margin-top: 5px;
  }
  .mean-container .mean-bar {
    box-sizing: content-box;
  }
  .mean-container .mean-bar {
    float: left;
    min-height: 42px;
    padding: 4px 0 0;
    position: relative;
    width: 100%;
  }
  .mean-container a.meanmenu-reveal {
    width: 22px;
    height: 22px;
    padding: 13px 13px 11px;
    top: 0;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    text-indent: -9999em;
    line-height: 22px;
    font-size: 1px;
    display: block;
    font-family: Arial,Helvetica,sans-serif;
    font-weight: 700;
    float: right;
  }


  a {
    background-color: transparent;
  }
  .mean-container .mean-nav {
    float: left;
    width: 100%;
    background: #0c1923;
  }
  nav {
    display: block;
  }
  .mean-container .mean-nav ul {
    padding: 0;
    margin: 0;
    width: 100%;
    list-style-type: none;
  }
  ul {
    list-style: outside none none;
    /* margin-block-start: 1em;
   margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;*/
  }
  .mean-container .mean-nav ul li {
    background: #f8f8f8 none repeat scroll 0 0;
    float: left;
    position: relative;
    width: 100%;
    border-top: 1px solid#ddd;
  }
  .mean-container .mean-nav ul li a {
    background: #f8f8f8 none repeat scroll 0 0;
    color: #666666;
    display: block;
    float: left;
    font-size: 12px;
    margin: 0;
    padding: 1em 5%;
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
    width: 90%;
    font-weight: bold;
  }
  .mean-container .mean-nav ul li a {
    font-family: sans-serif;
  }
  .mobile-menu-area {
    background: none;
  }
























.yazitipi {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  color: #444444;
  text-align: left;
  background-color: #ffffff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
}

.navbar ul li {
  float: left;
}

.navbar ul li a,
.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar ul li a:hover,
.dropdown:hover .dropbtn {
  color: #fba241;
  background-color: black;
}

.navbar ul li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.ust {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: black;
}

.ust2 {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding-left: 25px;
}

.logo {
  display: block;
  margin: 24px 0;
  width: 236px;
  text-align: center;
  position: relative;
  transition: all 0.2s;
}

.ust3 {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.ustyazilar1 {
  margin-left: -35px;
}

.urunler {
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px;
  height: 100%;
}

.ustyazilar {
  list-style: none;
  height: 100%;
}

.ustyazilar li {
  height: 100%;
  float: left;
  display: block;
}

.ustyazilar li a {
  padding: 25px 8px;
  display: flex;
  text-decoration: none;
  font-size: larger;

  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #fff;
}

.ustyazilar li:hover > a {
  color: #fa9628;
}

.arama {
  display: flex;
  padding-left: 25px;
  cursor: pointer;
}

.overlayarama {
  background-color: black;
  border: 0;
  cursor: pointer;
}

.sagust {
  align-self: center !important;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
  padding-left: 40px;
}

.sagust2 {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.turuncu {
  border-radius: 10px;
  background-color: #fa9628;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
}

.turuncu:hover {
  background-color: #fba241;
}

.turuncuspan {
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
}

.siparishatti {
  color: #9a560a;
  font-size: 17px;
  font-weight: 500;
}

.tel {
  color: #fff;
  font-style: normal;
  display: block;
  line-height: 1.2;
  font-size: 23px;
  font-weight: 900;
}

.kirmizibuton {
  border-radius: 10px;
  background-color: #cc021b;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
}

.kirmizibuton:hover {
  background-color: #e5021e;
}

.kirmizispan {
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
}

.online {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  font-style: normal;
}

.siparisver {
  color: #fff;
  font-style: normal;
  display: block;
  line-height: 1.2;
  font-size: 23px;
  font-weight: 900;
  font-style: normal;
}

.sepet {
  width: 60px;
  text-align: center;
  background-color: #585858;
  padding-top: 12px;
  border-radius: 10px;
}
.sepet:hover {
  background-color: #3f3f3f;
}

.giriskirmizi {
  background-color: #cc021b;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 20px;
  min-width: 150px;
  max-width: 100%;
  text-align: center;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 7px;
}

.giriskirmizi:hover {
  background-color: #e5021e;
}

.giristuruncu {
  background-color: #fa9628;
  color: #000;
  border: none;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 20px;
  min-width: 150px;
  max-width: 100%;
  text-align: center;
  border-radius: 10px;
  box-sizing: border-box;
  display: block !important;
  text-decoration: none;
  margin-top: 7px;
}
.girisbutonlar {
  margin-left: 30px;
}
.giristuruncu:hover {
  background-color: #fba241;
}
.aramak {
  width: 100%;
  height: 182px;
}
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: white;

  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  /* position: relative;
  top: 25%; */
  width: 100%;
  /* text-align: center;
  margin-top: 30px; */
}

.overlay a {
  padding: 10px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>











