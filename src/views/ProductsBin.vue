<template>
    <div class="wrapper">
        <!-- <h3>Корзина</h3> -->
        <img id="banner" src="../assets/img/products/banner.jpg" alt="banner" />
        <ul>
            <BinProduct
                v-for="product in userProducts"
                :key="product.id"
                :product="product"
            />
        </ul>
        <!-- <button @click="submitOrder">ПАДТВЕРДЕТЬ ЗОКАЗ</button> -->
        <form action="" method="POST" @submit.prevent="submitOrder">
            <input type="submit" value="ПАДТВЕДРИТЬ ЗАКАЗ" />
        </form>
    </div>
</template>users

<script>
    import BinProduct from "../components/ProductsBin/binPorduct.vue";
    import axios from "axios";

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
            async submitOrder() {
                // console.log(JSON.stringify(this.userProducts));
                // const dataToSend = JSON.stringify(this.userProducts);
                const dataToSend = {
                    чо: "отправлять"
                };

                try {
                    const res = axios.post(`http://localhost:3000/api/order/`, dataToSend);
                    console.log(res.data);
                    return true;
                } catch (err) {
                    console.error(err);
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