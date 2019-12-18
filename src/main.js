import Vue from 'vue';
import App from './app/App.vue';
import VueRouter from 'vue-router'
import store from './app/store';
/*import gif from './app/components/gif.vue'*/
import pikapignesi2 from './app/components/pikapignesi2.vue'

import yeniuye from './app/components/yeniuye.vue'
import uyegirisi from './app/components/uyegiris.vue'
import hakkımızda from './app/components/hakkımızda.vue'
import ıletisim from './app/components/ıletisim.vue'
import body from './app/components/body.vue'
import pikapignesivekristali from './app/components/pikapignesivekristali.vue'
import objekoleksiyonu from './app/components/objekoleksiyonu.vue'
import CartList from './app/components/cart/CartList.vue'
import ProductList from './app/components/product/ProductList.vue'
import ProductList1 from './app/components/product/ProductList1.vue'
import sss from './app/components/sss.vue'
import sifremiunuttum from './app/components/sifremiunuttum.vue'
import misafirolarakdevamet from './app/components/misafirolarakdevamet.vue'


import VueClazyLoad from 'vue-clazy-load'
import "vue-loading-overlay/dist/vue-loading.css";
import VueMaterial from 'vue-material'
import BootstrapVue from 'bootstrap-vue'
import VueTinyLazyloadImg from 'vue-tiny-lazyload-img'
Vue.use(VueTinyLazyloadImg);
Vue.use(VueClazyLoad)
Vue.use(BootstrapVue)
Vue.use(VueMaterial)
/* import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' */

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
 /* { path: '/', component: gif },*/

  { path: '/', component: body },
  { path: '/giris', component: uyegirisi },
  { path: '/kayıt', component: yeniuye },
  { path: '/hakkımızda', component: hakkımızda },
  { path: '/iletisim', component: ıletisim },
  { path: '/cartlist', component: CartList },
  { path: '/productlist', component: ProductList },
  { path: '/productlist1', component: ProductList1 },
  { path: '/SSS', component: sss },
  { path: '/pikapignesikristali', component: pikapignesivekristali },
  { path: '/sifreunuttum', component: sifremiunuttum },
  { path: '/objekoleksiyon', component: objekoleksiyonu },
  { path: '/pikapignesi', component: pikapignesi2 },
  { path: '/misafirolarakdevamet', component: misafirolarakdevamet },


]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
