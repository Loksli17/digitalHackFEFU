<template>
    <div>
        <h3>Корзина</h3>
        <ul>
            <BinProduct
                v-for="product in userProducts"
                :key="product.id"
                :product="product"
            />
        </ul>
        <button @click="submitOrder">ПАДТВЕРДЕТЬ ЗОКАЗ</button>
    </div>
</template>

<script>
    import BinProduct from "../components/ProductsBin/binPorduct.vue";

    export default {
        components: {
            BinProduct
        },
        computed: {
            userProducts() {
                return this.$store.getters.getUserProductsBin;
            }
        },
        methods: {
            submitOrder() {
                console.log(JSON.stringify(this.userProducts));
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