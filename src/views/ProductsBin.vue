<template>
    <div>
        <BinProduct
            v-for="product in userProducts"
            :key="product.id"
            :product="product"
        />
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
        }
    }
</script>