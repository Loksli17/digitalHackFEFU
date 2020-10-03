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
            const productData = {
                desc: product.desc,
                id: product.id,
                img: product.img,
                name: product.name,
                price: product.price,
                value: product.value,
                amount: 1
            }
            if (!state.userProductBin.find(prod => prod.id === productData.id)) {
                state.userProductBin.push(productData);
                localStorage.setItem("bin", JSON.stringify(state.userProductBin));
            }
        },
        removeFromCart(state, payload) {
            state.userProductBin = state.userProductBin.filter(prod => prod !== payload.product);
            localStorage.setItem("bin", JSON.stringify(state.userProductBin));
        }
    }
})

