<template>
  <div class="hello">
    <div class="wrapper">  <!--  sayfanın ortalanması için wrapper-->
      <div class="giris-container"> <!--  giris container-->
        <div class="üye-giris-panel"> <!--  üye giriş panel-->

            <div class="sidebar-hover ng-scope" ng-controller="mainCtrl">
            <div class="main-content ng-scope" ng-controller="uyelikSifremiUnuttumCtrl">
                <div class="page-content">
                <div class="row">
                    <div class="col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-header bg-dark">
                        <h2 class="panel-title">ŞİFREMİ <strong>UNUTTUM</strong></h2>
                        </div>
                        <div class="panel-content bg-white">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                            <p>E-posta adresinizi girdikten sonra Gönder tuşuna tıkladığınızda şifreniz sıfırlanarak e-posta adresinize gönderilecektir.</p>
                            <br>
                            <form id="uyeSifremiUnuttumForm" ng-submit="uyeSifremiUnuttum()" role="form" class="form-horizontal form-validation ng-pristine ng-valid-email ng-invalid ng-invalid-required">
                                <div class="form-group">
                                <label class="col-sm-3 control-label">E-posta
                                </label>
                                <div class="col-sm-9 prepend-icon">
                                    <input type="email" name="eposta" ng-model="eposta" class="form-control ng-pristine ng-untouched ng-empty ng-valid-email ng-invalid ng-invalid-required" placeholder="E-posta adresinizi giriniz." required="">
                                    <i class="icon-envelope"></i>
                                </div>
                                </div>
                                <div class="row">
                                <div class="col-sm-9 col-sm-offset-3">
                                    <div class="pull-right">
                                    <button type="submit" id="submit-button" class="btn btn-embossed btn-primary ladda-button" data-style="expand-left">GÖNDER</button>
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
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
  export default {
    name: 'SifremiUnuttum'
  }
</script>

<style scoped>
 .giris-container {
    background-color:white; /*üye kaydınıın arka zemininin rengi*/
    min-height: 350px; /*üye giriş containerının en az yüksekliği*/
    padding-top: 25px;
    padding-left:20px;
  }
.wrapper {
    width: 1170px; /*sayfadaki genişliği*/
    margin: 0 auto; /*üye kaydının wrapperin başlangıcından başlaması*/
    padding: 0 15px; /*üye kaydının sağ ve soldan ortalanması*/
  }
  .sidebar-hover .main-content {
    margin-left: 0 ;
  }
  .main-content {
    min-height: 350px;
  }
  body:not(.fixed-topbar) .main-content .page-content {
    margin-top: 0;
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-md-6,.col-sm-12, .col-md-12 {
    text-align: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .main-content .page-content .panel-default {
    border-color: #E8E8E8;
  }
  .main-content .page-content .panel {
    background: #ffffff;
    border-radius: 0;
    border: none;
    color: #5b5b5b;
    margin-bottom: 20px;
    min-height: 30px;
    position: relative;
  }
  .main-content .page-content .panel .panel-header {
    display: block;
    height: auto;
    padding: 6px 15px 6px 18px;
  }

  .bg-dark:not(i) {
    background-color: #2B2E33 !important;
    color: #fff !important;
  }
  .main-content .page-content .panel .panel-header h2 {
    display: block;
    font-family: 'Open Sans';
    font-size: 24px;
    font-weight: 100;
    line-height: normal;
    margin-bottom: 5px;
    margin-top: 7px;
    text-transform: uppercase;
  }
  .bg-white:not(i) {
    background-color: #fff !important;
    color: black !important;
  }
  p {
    line-height: 23px;
    margin: 0 0 10px;
  }
  form {
    display: block;
    margin-top: 0em;
  }
</style>
