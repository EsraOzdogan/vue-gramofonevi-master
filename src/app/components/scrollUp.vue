<template>
  <div class="scrollUp">
    <div class="wrapper">
      <a class="scrollUp" href="#top" style="position: fixed; z-index: 2147483647; "><i class="fa fa-angle-up"></i></a> <!--button z indeksinde yukarı ikonuyla-->
    </div>
  </div>

</template>

<script>
  export default {
    name: 'scrollUp',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  .wrapper{
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .scrollUp{
    background: #88604b ; /*buton arka rengi*/
    bottom: 80px; /*aşağıdan 80px uzaklıkta*/
    color: #fff; /*reni*/
    font-size: 25px;/*ikon büyüklüğü*/
    height: 40px; /*buton yüksekliği*/
    right: 101px;/*butonun sağ taraftan 101px sol tarafta olması*/
    text-align: center;/*ikonun butondaki konumu*/
    width: 40px;/*butonun genişliği*/
  }
</style>
