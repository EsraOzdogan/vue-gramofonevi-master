import axios from 'axios';

const state = {
  prodcutItems: []
};

const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.prodcutItems = payload;
  }
};

const actions = {
  getProductItems(context) {
    axios.get('/api/products').then(res => {
      context.commit('UPDATE_PRODUCT_ITEMS', res.data);
    });
  }
};

const getters = {
  // productItems(state) {
  //   return state.prodcutItems;
  // }
  productItems: state => state.prodcutItems,
  productItemsCount: state => state.prodcutItems.length
};

const productModule = {
  state,
  mutations,
  actions,
  getters
};

export default productModule;
