<template>
    <div>
        <h3>Товары</h3>
        <ul>
            <Product
                v-for="product in products"
                :key="product.id"
                :product="product"
                @showPopUp="showPopUp"
            />
        </ul>
        <button @click="fetchMoreProducts">больше</button>
    </div>
</template>


<script>
    import Product from "../components/ProductsBin/product.vue";
    import axios from "axios";

    export default {
        components: {
            Product
        },
        data() {
            return {
                products: []
            }
        },
        created() {
            this.fetchProducts();
        },
        methods: {
            showPopUp(id) {
                this.$emit("showPopUpProd", id);
            },
            async fetchProducts() {
                try {
                    const res = await axios.get("http://localhost:3000/api/product");
                    this.products = res.data;
                } catch (err) {
                    console.error(err);
                    this.products = [
                        {
                            id: 0,
                            name: "error"
                        }
                    ]
                }
            },
            async fetchMoreProducts() {
                try {
                    const res = await axios.get("http://localhost:3000/api/product");
                    this.products = res.data;
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
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        display: grid;
        list-style: none;
        padding: 0;
        grid-template-columns: repeat(3, 1fr);

        li {
            background: #ccc;
            padding: 20px;
            margin: 5px;
        }
    }
</style>
