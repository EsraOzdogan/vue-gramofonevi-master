<template>
  <div id="app">

       <!-- <UserList />-->
       <hea message="HAKKIMIZDA"/>
        <router-view></router-view>
      <alt/>
      <scrollUp/>

  </div>
</template>

<script>
import CartList from './components/cart/CartList';
import ProductList from './components/product/ProductList';
import UserList from "./components/users/UserList";
import yeniuye from "./components/yeniuye";
import uyegiris from "./components/uyegiris";
import hea from "./components/hea";
import alt from "./components/alt";
import scrollUp from './components/scrollUp';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: 'App',
  components: {
    UserList,
    CartList,
    ProductList,
    yeniuye,
    uyegiris,
    hea,
    alt,
    scrollUp
  }
};
</script>

<style>
 #app {
    background: url("components/img/general_bg_image.png") repeat;
    margin: 0;
    color: #333;
    font-size: 12px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }

@media screen and (min-width: 769px) {
  html,
  body {
    height: 100%;
  }
}
</style>
