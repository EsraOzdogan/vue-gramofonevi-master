<template>
<div class="wrapper">  <!--  sayfanın ortalanması için wrapper-->
      <div class="giris-container"> <!--  giris container-->
        <div class="üye-giris-panel"> <!--  üye giriş panel-->
          <div class="panel-üst"> <!--  üye giriş panelinin üst kısmı-->
            <h2 class="panel-baslık">UYE <strong>GIRISI</strong></h2> <!-- ÜYE GİRİŞ i yazısı-->
          </div>
          <div class="panel-alt"> <!--  üye giriş panelinin alt kısmı-->
            <p>Giriş yapmak icin üyelik bilgilerinizi doldurarak Giris Yap'a tıklayınız.</p>
            <br>
            <form  class="bilgiformu"> <!-- üye giris formu-->
              <div class="formitem">  <!-- üye giriş formundaki herbir item-->
                <label class=" kontroltuş">  <!-- üye giriş formundaki özellik-->
                  E-posta
                </label>
                <row class=" ikon"> <!-- üye giriş formundaki email ikonu-->
                  <input type="email"  class="kontrolform" required="" placeholder="E-posta adresinizi giriniz." >
                  <i class="icon-envelope"></i>
                </row>
              </div>
              <div class="formitem">
                <label class=" kontroltuş">Şifre</label>
                <row class=" ikon">  <!-- üye giriş formundaki kilit ikonu-->
                  <input type="password" class="  kontrolform"  required="" placeholder="Sifrenizi giriniz." >
                  <i class="icon-lock"></i>
                </row>
              </div>
              <div class="butonsağ">

                <button class="buton " v-on:click="say('Hoşgeldiniz :)')" ><router-link to="/">GİRİŞ YAP</router-link></button>
               <button class="buton1 " ><router-link to="/sifreunuttum"> ŞİFREMİ UNUTTUM</router-link></button> 


              </div>
            </form>
          </div>

        </div>
      </div>

    </div>

</template>
<script>
export default {
   methods: {
     say: function (message) {
        alert(message)
      }
  }
}
</script>

<style scoped>
.wrapper {
    width: 1170px; /*sayfadaki genişliği*/
    margin: 0 auto; /*üye kaydının wrapperin başlangıcından başlaması*/
    padding: 0 15px; /*üye kaydının sağ ve soldan ortalanması*/
    width: 58%;

  }
  .giris-container {
    background-color:white; /*üye kaydınıın arka zemininin rengi*/
    min-height: 350px; /*üye giriş containerının en az yüksekliği*/
    padding-top: 25px;
    padding-left:20px;

    
  }
  .giris-container  .üye-giris-panel {
    border:solid 1px;
    margin-bottom: 20px;/*panel aşağıdan 20px kaydırılması*/
    margin-left: 50px;
    margin-right:500px;

  }
  .giris-container  .üye-giris-panel .panel-üst h2 {  /* ÜYE KAYDI yazısının özellikleri*/
    font-family: 'Open Sans'; /*yazı stili*/
    font-size: 24px; /*yazı büyüklüğü*/
    font-weight: 100; /*yazı kalınlığı*/
    line-height: normal; /*satır yüksekliği*/
    margin-bottom: 5px; /*aşağıdan yüksekliği*/
    margin-top: 7px; /*yukarıdan yüksekliği*/
  }
  .panel-üst {/*üye kayıt panelinin üstündeki alan*/
    background-color: black ; /*arkaplan renfi*/
    color: white;/*yazı rengi*/
    padding: 10px 30px 10px 18px;/*panelin üst (siyah) kısmının yanlardan boşluk olması*/
  }
  strong { /*Girişinin kalın yazılması */
    font-family: 'Open Sans';/*Girişinin yazı tipi */
    font-weight: 900;/*Girişinin kalınlığı */
  }
  .panel-alt { /*üye giriş panelinin alt kısmı*/
    background-color: white; /*alt kınmın arka plan rengi*/
    color: black; /*yazı rengi*/
    padding-bottom: 60px;
    padding-right: 10px;
  }
  p {
    line-height: 23px;
    margin: 20px 10px 0 10px;
    font-size:large;
  }
  .bilgiformu .formitem {
    margin-right: -15px; /*formitemin sağdan boşluğu*/
    margin-left: 35px; /*formitemin soldan boşluğu*/
  }
  .bilgiformu .kontroltuş {
    color: black; /*formun içindeki mail parola vs.nin rengi*/
    text-align: left; /*formun içindeki mail parola soldan başlaması*/
    top: 10px; /*formun içindeki mail parola yukardan boşlğu*/
  }
  .ikon{
    margin-left:75px;
  }
  .ikon input {
    padding-left: 36px ;/*ikonun bulundupu inputtaki soldan 36px kaydırılması*/
  }
  input.kontrolform {
    border: 0; /*sınırlar*/
    background-image: linear-gradient(gray,gray),linear-gradient(gray,gray);/*inputlar arası çizgiler*/
    height: 34px;
    background-size: 0 , 100% 1px;
    background-repeat: no-repeat;/*inputların arka planı*/
    background-position: center bottom, center calc(100% - 1px);/*inputların  arasındaki çizginini orta ve aşağıdaki sınır*/
  }
  .bilgiformu .ikon i {
    left: 95px;/*ikon konumu*/
  }
  .ikon i {
    color: gray;/*ikon rengi*/
    font-size: 14px; /* ikon boyutu*/
    height: 34px; /*yükseklik*/
    line-height: 34px; /*satır yükeskliği*/
    text-align: center; /* metine göre konumu*/
    top: 0;
    width: 36px; /*genişliği*/
  }
  input {
    word-spacing: normal;/*kelime boşluğu normal*/
    cursor: text;/*inputun içine gelince imleç text biçiminde*/
  }
  .butonsağ{
    float:right;
  }
  .buton {
    width: 150px;
    background-color: #0097a7; /*giriş yap butonunun arka plan rengi*/
    color: #fff;/*yazı rengi*/
    margin-top:10px;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer; /*butona gelince fare imlecinin ok şeklinde gözükmesi*/
    border: 1px solid transparent; /*buton sınırının transparan şeklinde 1 px olması*/
    padding: 6px 12px; /*buton kenar boşluğu*/
    font-size: 14px;
    line-height: 1.5;
    border-radius: 2px;/*butonun çevresinin kenar boşluklaır*/
    box-shadow: 0 0 5px #E2E2E2;
  }
  .buton1{
    box-shadow: 0 0 5px #E2E2E2;
    width: 250px;
    margin-top:10px;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer; /*butona gelince fare imlecinin ok şeklinde gözükmesi*/
    border: 1px solid transparent; /*buton sınırının transparan şeklinde 1 px olması*/
    padding: 6px 12px; /*buton kenar boşluğu*/
    font-size: 14px;
    line-height: 1.5;
    border-radius: 2px;/*butonun çevresinin kenar boşluklaır*/
    background-color: #e0e6eb ;/*şifremi unuttum butonunun arkaplanrengi*/
    color: rgba(0, 0, 0, 0.84); /*şifremi unuttum butonunun yazı*/
  }

</style>