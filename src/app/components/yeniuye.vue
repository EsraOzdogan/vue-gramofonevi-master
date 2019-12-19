<template>
    <div class="wrapper"> <!--sayfanın ortalanması için wrapperla sarıldı-->
      <div class="kayıt-container"><!-- menünün altından container arka plan rengini veriyor-->
        <div class="üye-kayıt-panel"> <!-- üye kayıt paneli-->
          <div class="panel-üst ">  <!-- üye kayıt panelinin üstü-->
            <h2 class="panel-baslık">UYE <strong>KAYDI</strong></h2>  <!-- üye kayıt üstpanelinin başlığı-->
          </div>
          <div class="panel-alt">  <!-- üye kayıt panelinin altı-->
            <p>Kayit olmak icin uyelik bilgilerinizi doldurarak Kayit Ol'a tiklayiniz.</p> <!-- kayıt ol yazısı-->
            <br>
            <form  class="bilgiformu"> <!-- üye kayıt formu-->
              <div class="formitem">  <!-- üye kayıt formundaki özellikler-->
                <label class=" kontrolkenar kontroltuş"> <!-- üye kayıt formundaki label-->
                  Ad
                </label>
                <row class="labelkontrol ikon">  <!-- üye kayıt formundaki kullanıcı ikon-->
                  <input type="text" class="kontrolform " required="" placeholder="Adinizi giriniz." > <!-- üye kayıt formundaki adınızı giriniz kısmı-->
                  <i class="fa fa-user"></i>  <!-- üye kayıt formundaki ikon-->
                </row>
              </div>
              <div class="formitem">
                <label class=" kontrolkenar kontroltuş">
                  Soyad
                </label>
                <row class="labelkontrol ikon"> <!-- üye kayıt formundaki kullanıcı ikon-->
                  <input type="text" class="kontrolform " required="" placeholder="Soyadinizi giriniz." > <!-- üye kayıt formundaki soyad giriniz kısmı-->
                  <i class="fa fa-user"></i>
                </row>
              </div>
              <div class="formitem">
                <label class="kontrolkenar kontroltuş">
                  Gsm
                </label>
                <row class="labelkontrol ikon">  <!-- üye kayıt formundaki telefon ikon-->
                  <input type="text"  data-mask="(999) 999 99 99" class="kontrolform "  required="" placeholder="Gsm giriniz." > <!-- üye kayıt formundaki gsm giriniz kısmı-->
                  <i class="fa fa-phone"></i>
                </row>
              </div>
              <div class="formitem">
                <label class="kontrolkenar kontroltuş">
                  E-posta
                </label>
                <row class="labelkontrol ikon"> <!-- üye kayıt formundaki email ikon-->
                  <input type="email" class="kontrolform " required="" placeholder="E-posta adresinizi giriniz." >
                  <i class="icon-envelope"></i>
                </row>
              </div>
              <div class="formitem">
                <label class="kontrolkenar kontroltuş">Parola</label>
                <div class="labelkontrol ikon">  <!-- üye kayıt formundaki parola ikon-->
                  <input type="password"  class="kontrolform "  required="" placeholder="Parolanızı giriniz." >

                </div>
              </div>
               <div class="captcha">
                 <img alt="nocaptcha" width="600" height="150" data-src="https://webmaster.kitchen/wp-content/uploads/nocaptcha.gif" class="alignnone wp-image-3060 size-full lazyloaded" src="https://webmaster.kitchen/wp-content/uploads/nocaptcha.gif">
               </div>

              <div class="butonsağ">
                <button class="buton" >KAYIT OL</button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>

</template>

<style scoped>
.wrapper{ /*üye kaydının sayfanın ortasında durması için wrapper*/
    width: 1170px; /*sayfadaki genişliği*/
    margin: 0 auto; /*üye kaydının wrapperin başlangıcından başlaması*/
    padding: 0 15px; /*üye kaydının sağ ve soldan ortalanması*/
            width: 58%;

  }
  .kayıt-container {
    background-color:white; /*üye kaydınıın arkasının arka zemininin rengi*/
    padding-top: 25px;
    padding-left:20px;
    padding-bottom: 20px;
    height: 954px;

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
 
</style>