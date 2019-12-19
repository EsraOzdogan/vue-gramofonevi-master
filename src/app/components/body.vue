<template>
<div class="slider">
      <div class="wrapper">
        <div class="slider1">
          <img src="../components/img/img1.jpeg" alt="">
        </div>

        <div class="tablo">
          <div class="tablo-kutu">
            <h2 class="tablo-başlık">GUVENLI ALISVERIS</h2>
            <span class="tablo-başlık-br"></span>
            <p>
              <img src="../components/img/img7.jpg">
            </p>
          </div>
          <div class="tablo-kutu">
            <h2 class="tablo-başlık">EN IYI 10</h2>
            <span class="tablo-başlık-br"></span>
            <p>
              <img src="../components/img/img8.jpg">
            </p>
          </div>
          <div class="tablo-kutu">
            <h2 class="tablo-başlık">ILETISIM</h2>
            <span class="tablo-başlık-br"></span>
            <p>
              <img src="../components/img/img9.jpg">
            </p>
          </div>
        </div>

        <div class="ürün">
          <div class="title">
            <h2>Yeni Eklenen Urunler</h2>
          </div>
          <div class="carousel">

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>

              </ol>


              <div class="carousel-inner">

                <div class="item active">
                  <img src="../components/img/img2.png" alt="BOĞA FERDINAND - CAN GÜÇKAN & YETKİN DİKİNCİLER-MAXI SINGLE" style="width:100%;">
                  <div class="carousel-caption">
                    <a href="#">BOĞA FERDINAND - CAN GÜÇKAN & YETKİN DİKİNCİLER-MAXI SINGLE</a>
                    <p>120TL</p>
                  </div>
                </div>

                <div class="item">
                  <img src="../components/img/img3.jpg" alt="AYTEN ALPMAN - Türk Pop Tarihi / Eski 45'likler (PLAK" style="width:100%;">
                  <div class="carousel-caption">
                    <a href="#">AYTEN ALPMAN - Türk Pop Tarihi / Eski 45'likler (PLAK</a>
                    <p>120TL</p>
                  </div>
                </div>

                <div class="item">
                  <img src="../components/img/img4.jpg" alt="FAZIL SAY - NAZIM ORATORYOSU - 2 PLAK" style="width:100%;">
                  <div class="carousel-caption">
                    <a href="#">FAZIL SAY - NAZIM ORATORYOSU - 2 PLAK</a>
                    <p>135TL</p>
                  </div>
                </div>
                <div class="item">
                  <img src="../components/img/img10.jpg" alt="BELKIS ÖZENER - YEŞİLÇAM ŞARKILARI  - 2 LP" style="width:100%;">
                  <div class="carousel-caption">
                    <a href="#">BELKIS ÖZENER - YEŞİLÇAM ŞARKILARI  - 2 LP</a>
                    <p>150TL</p>
                  </div>
                </div>
                <div class="item">
                  <img src="../components/img/img6.jpg" alt="BİRSEN TEZER - CİHAN" style="width:100%;">
                  <div class="carousel-caption">
                    <a href="#">BİRSEN TEZER - CİHAN</a>
                    <p>120TL</p>
                  </div>
                </div>

              </div>

              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<style scoped>
.wrapper{
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .slider1{
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .slider1 img{
    width: 100%;
  }
  .tablo{
    display: flex;
    justify-content: space-between;
  }
  .tablo-kutu {
    background: #fff;
    text-align: center;
    position: relative;
    padding: 20px;
    margin-top: 30px;
    z-index: 1;
    width: 330px;
  }
  .tablo-kutu img{
    width: 100%;
  }
  .span.tablo-başlık-br {
    border-top: 4px double #ddd;
    height: 4px;
    margin: 0 auto;
    max-width: 200px;
    display: block;
  }
  .tablo-kutu:before{
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    border: 1px solid #ddd;
    content: "";
  }
  .ürün .title{
    background: url("../components/img/bg-title.png") no-repeat scroll center center;
    height: 65px;
    margin: 40px 0;
    text-align: center;
  }
  .ürün .title h2{
    color: #333;
    font-size: 16px;
    font-weight: normal;
    line-height: 55px;
    padding: 0;
    text-transform: uppercase;
  }
  .carousel-caption a{ color:white;}
  .carousel-caption p{ color: #88604B;
    font-size: medium;
  }
</style>