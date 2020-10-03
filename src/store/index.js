import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userProductBin: []
    },
    getters: {
        getUserProductsBin(state) {
            state.userProductBin = JSON.parse(localStorage.getItem("bin"));
            return state.userProductBin;
        }
    },
    mutations: {
        addToCart(state, payload) {
            const product = payload.product;
            if (!state.userProductBin.includes(product)) {
                state.userProductBin.push(payload.product);
                localStorage.setItem("bin", JSON.stringify(state.userProductBin));
            }
        },
        removeFromCart(state, payload) {
            state.userProductBin = state.userProductBin.filter(prod => prod !== payload.product);
            localStorage.setItem("bin", JSON.stringify(state.userProductBin));
        }
    }
})

