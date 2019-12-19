import axios from 'axios';

const state = {
    userItems: []
};

const mutations = {
    UPDATE_USER_ITEMS(state, payload) {
        state.userItems = payload;
    }
};

const actions = {
    getProductItems(context) {
        axios.get('/api/users').then(res => {
            context.commit('UPDATE_USERS_ITEMS', res.data);
        });
    }
};

const getters = {
    // productItems(state) {
    //   return state.prodcutItems;
    // }
    productItems: state => state.userItems,
    productItemsCount: state => state.userItems.length
};

const usersModule = {
    state,
    mutations,
    actions,
    getters
};

export default usersModule;
