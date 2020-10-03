<template>
    <div class="wrapper">
        <!-- <h3>Корзина</h3> -->
        <img id="banner" src="../assets/img/products/banner.jpg" alt="banner">
        <ul>
            <Product
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </ul>
    </div>
</template>users


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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        padding: 15px;
    }

    ul {
        display: grid;
        list-style: none;
        padding: 0;
        justify-content: space-between;
        min-width: 100%;
        grid-gap: 7px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    #banner {
        width: 100%;
    }
</style>
