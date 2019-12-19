<template>
  <div id="app5" style="background-color:#101010">
    <div ref="myNav" class="overlay ">
      <button class="closebtn footerkapat" @click="closeNav()">Hakkımızda ve Daha Fazlası</button>
      <div class="wrapper ">
      <div class="sticky">
        <div class="footer-üst">
          <div class="footer-container">
            <div class="footer-row">
              <div class="grid">
                <div class="footer-iç">
                  <p>
                  </p><p>2003 YILININ HAZİRAN AYINDA 8 M2 ALANDA BAŞLADIĞIMIZ İŞİMİZ BİZİ ZAMANLA GÜZEL BİR SERÜVENE SÜRÜKLEDİ. KÜÇÜK DÜKKANIMIZDA HAREKET EDECEK YER YOKKEN ...<a href="http://www.gramofonevi.com/hakkimizda">(Devamı)</a></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="footer-orta">
          <div class="footer-container">
            <div class="footer-row">
              <div class="grid">
                <h2 class="grid-başlık"><span>Hakkımızda</span></h2>
                <div class="grid-kutu">
                  <span>
                  <a ><router-link to="/hakkımızda">HAKKIMIZDA</router-link></a>
                  <a ><router-link to="/iletisim">İLETİŞİM</router-link></a></span>
                </div>
              </div>

              <div class="grid">
                <h2 class="grid-başlık"><span>Yardım</span></h2>
                <div class="grid-kutu">
                  <span><a class="" href="#">Güvenli Alışveriş</a> <a ><router-link to="/SSS">SIKÇA SORULAN SORULAR</router-link></a><a class="" href="hesap-numaralari">Hesap Numaraları</a></span>
                </div>
              </div>

              <div class="grid">
                <h2 class="grid-başlık"><span>Üyelik</span></h2>
                <div class="grid-kutu">
                  <span><a class="" href="#i">Üyelik Sözleşmesi</a><a ><router-link to="/kayıy">ÜYE KAYIT</router-link></a><a ><router-link to="/giris">ÜYE GİRİŞ</router-link></a></span>
                </div>
              </div>

              <div class="grid">
                <h2 class="grid-başlık"><span>Sipariş</span></h2>
                <div class="grid-kutu">
                  <span><a class="" href="#">Gizlilik Taahhütü</a><a class="" href="#">Satış Sözleşmesi</a><a class="" href="#">Teslimat Koşulları</a></span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="footer-alt">
          <div class="footer-container">
            <div class="footer-alt-iç">
              <div class="footer-alt-row">
                <div class="grid">
                  <div class="footer-kutu">
                    <h3>TAKİP EDİN</h3>
                    <div class="footer-sosyal-ikon">
                      <a href="#" target="_blank">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
              <div class="footer-alt-row">
                <div class="grid">
                  <div class="footer-yazı">
                    <p>
                      <a class="rhonshop-copyright" href="#" target="_blank" title="Rhonshop E-ticaret Yazılımı" rel="nofollow">
                        <span>Rhonshop</span> e-ticaret yazılımı ile hazırlanmıştır.
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

     

      
      
    </div>

    <button class="footerac" @click="openNav()">Hakkımızda ve Daha Fazlası</button>
  </div>
</template>
<script>
export default {
  el: "#app5",
  methods: {
    closeNav() {
      this.$refs.myNav.style.width = "0%";
    },
    openNav() {
      this.$refs.myNav.style.width = "100%";
    }
  }
};
</script>

<style scoped>
.wrapper{
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;

  }
  .footer-üst {
    margin: 30px 0;
  }
  div.sticky {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  /*   position: fixed;*/

  }
  .footer-container{
      
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  .footer-row{
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .grid{
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .footer-iç{
    background: #fff;
    position:relative;
    padding:40px 100px;
    z-index:1;
  }
  .footer-iç:before {
    border:1px solid #ddd;
    position:absolute;
    top:10px;
    left:10px;
    right:10px;
    bottom:10px;
    content:"";
    z-index:-1;
  }
  .footer-iç p {
    color: #413d3e;
    font-size: 16px;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }
  .footer-iç p a {
    color:#568e4f;
  }
  .footer-iç p a:hover {
    color:#333;
  }
  .footer-orta {
    margin-top:40px;
  }
  .footer-orta h2.grid-başlık:before {
    border-top: 4px double #ddd;
    content: "";
    left: 0;
    margin-top: -2px;
    position: absolute;
    top: 50%;
    width: 100%;
  }
  .footer-orta h2.grid-başlık{
    color: #2d2d2d;
    font-size: 25px;
    font-weight: normal;
    margin: 0 auto;
    padding: 0;
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }
  .footer-orta h2.grid-başlık span {
    background: rgba(0, 0, 0, 0) url("../components/img/general_bg_image.png") repeat scroll 0 0;
    margin: 0;
    padding: 0 15px;
    position: relative;
    z-index: 11;
  }
  .grid-kutu{
    background: #fff;
    text-align: center;
    position: relative;
    padding: 20px;
    margin-top: 30px;
    z-index: 1;
  }
  .footer-orta .grid-kutu a {
    font-family:"century";
    color: #333;
    display: block;
    font-size: 12px;
    line-height: 26px;
    padding: 0 16px;
    text-align: center;
    text-transform: uppercase;
  }
  .footer-alt-iç {
    border-top: 4px double #acabab;
    float: left;
    margin: 50px 0 0;
    padding-top: 20px;
    position: relative;
    text-align: center;
    width: 100%;
  }
  .footer-alt-iç:before {
    border-top: 2px dashed #6f6d6e;
    content: "";
    left: 0;
    position: absolute;
    top: -10px;
    width: 100%;
  }
  .footer-kutu h3 {
    font-size: 30px;
    font-weight: normal;
    margin: 0 0 10px;
    font-family: 'Lora', sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
  }
  .footer-alt-row{
    margin-left: -15px;
    margin-right: -15px;
  }
  .footer-sosyal-ikon a {
    border: 1px solid #333;
    color: #333;
    display: inline-block;
    font-size: 24px;
    height: 40px;
    line-height: 40px;
    margin: 0 10px 0 0;
    width: 45px;
    text-align:center;
  }
  .footer-sosyal-ikon a:hover {
    color:#88604B;
    border-color:#88604B;
  }
  .footer-yazı {
    color: #333;
    font-size: 13px;
    padding: 20px 0;
    text-align: center;
  }
.footerac {
  background-color: rosybrown;
  color: white;
  outline: 0;
  border: 0;
  height: 50px;
  width: 300px;
  font-weight: bold;
  cursor: pointer;
    z-index: 4px;

}

.footerac:hover {
  background-color: rosybrown;
}

.footerkapat {
  background-color: rosybrown;
  color: white;
  outline: 0;
  border: 0;
  height: 50px;
  width: 300px;
  font-weight: bold;
  z-index: 4px;
}

.footerkapat:hover {
  background-color: rosybrown;
}

.overlay {
  width: 0;
  position: absolute;
  z-index: 1;
  left: 0;
  background: url("../components/img/general_bg_image.png") repeat scroll 0 0;
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  cursor: pointer;
}

/* @media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  } 
  .overlay .closebtn {
    top: 15px;
    right: 35px;
  }
}*/

</style>





