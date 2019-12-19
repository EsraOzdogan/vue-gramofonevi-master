import axios from 'axios';

const state = {
  prodcutItems1: []
};

const mutations = {
  UPDATE_PRODUCT1_ITEMS(state, payload) {
    state.prodcutItems1 = payload;
  }
};

const actions = {
  getProductItems1(context) {
    axios.get('/api/products1').then(res => {
      context.commit('UPDATE_PRODUCT1_ITEMS', res.data);
    });
  }
};

const getters = {
  // productItems(state) {
  //   return state.prodcutItems;
  // }
  productItems1: state => state.prodcutItems1,
  productItems1Count: state => state.prodcutItems1.length
};

const productModule = {
  state,
  mutations,
  actions,
  getters
};

export default productModule;
