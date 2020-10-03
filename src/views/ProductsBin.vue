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
        <div class="sum">
            <span>Сумма заказа: </span>
            <span>{{ sum }}₽</span>
        </div>
        <!-- <button @click="submitOrder">ПАДТВЕРДЕТЬ ЗОКАЗ</button> -->
        <form action="" method="POST" @submit.prevent="submitOrder">
            <input type="submit" value="ПОДТВЕДРИТЬ ЗАКАЗ" />
        </form>
    </div>
</template>

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
            },
            sum() {
                let arr = this.$store.getters.getUserProductsBin;
                return arr.reduce((acc, current) => acc + current.price * current.amount, 0);
            }
        },
        methods: {
            async submitOrder() {
                let arr = [];

                this.userProducts.forEach(product => {
                    arr.push({
                        productId: product.id,
                        userId: 3,
                        count: product.amount
                    })
                });

                const dataToSend = JSON.stringify(arr);

                try {
                    const res = await axios.post("http://localhost:3000/api/order/neworder", dataToSend);
                    console.log(res.data);
                    return true;
                } catch (err) {
                    console.error(err);
                    return false;
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
        display: flex;
        flex-flow: column nowrap;
        margin-top: 20px;

        li {
            display: flex;
            flex-flow: row nowrap;


        }
    }

    #banner {
        width: 100%;
    }

    .sum {
        margin-top: 20px;
    }
</style>
