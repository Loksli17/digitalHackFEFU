import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userProductBin: [],
        products: []
    },
    getters: {
        getUserProductsBin(state) {
            state.userProductBin = JSON.parse(localStorage.getItem("bin"));
            return state.userProductBin;
        },
        async getProducts(state) {
            if (state.products.length !== 0) {
                try {
                    const res = await axios.get("http://localhost:3000/api/product");
                    state.products = await res.data;
                    console.log(state.products);
                } catch (err) {
                    console.error(err);
                    this.products = [
                        {
                            id: 0,
                            name: "error"
                        }
                    ]
                }
            }

            return state.products;
        }
    },
    mutations: {
        // async fetchProducts(state) {
        //     try {
        //         const res = await axios.get("http://localhost:3000/api/product");
        //         state.products = res.data;
        //     } catch (err) {
        //         console.error(err);
        //         this.products = [
        //             {
        //                 id: 0,
        //                 name: "error"
        //             }
        //         ]
        //     }
        // },
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
        },
        updateItemInCart(state, payload) {
            const product = payload.product;
            if (state.userProductBin.find(prod => prod.id === product.id)) {
                // state.userProductBin.push(product);
                state.userProductBin[state.userProductBin.indexOf(product)] = product;
                localStorage.setItem("bin", JSON.stringify(state.userProductBin));
            }
        }
    }
})

