import axios from 'axios';

const state = {
  cartItems: []
};

const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  }
};

const actions = {
  getCartItems(context) {
    axios.get('/api/cart').then(res => {
      context.commit('UPDATE_CART_ITEMS', res.data);
    });
  },
  addCartItem({ commit }, cartItem) {
    axios.post('/api/cart', cartItem).then(res => {
      commit('UPDATE_CART_ITEMS', res.data);
    });
  },
  removeCartItem({ commit }, cartItem) {
    axios.post('/api/cart/delete', cartItem).then(res => {
      commit('UPDATE_CART_ITEMS', res.data);
    });
  },
  removeAllCartItems({ commit }) {
    axios.post('/api/cart/delete/all').then(res => {
      commit('UPDATE_CART_ITEMS', res.data);
    });
  }
};

const getters = {
  cartItems: state => state.cartItems,
  cartItemsCount: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  },
  cartTotalPrice: state => {
    return state.cartItems
      .reduce((acc, cartItem) => {
        return cartItem.quantity * cartItem.price + acc;
      }, 0)
      .toFixed(2);
  }
};

const cartModule = {
  state,
  mutations,
  actions,
  getters
};

export default cartModule;
