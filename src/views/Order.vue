<template>
    <div>
        <h3>Заказы</h3>

        <div class="order-wrap">
            <Order 
                v-for="order in orders" 
                :key="order.id" 
                :order="order" 
            />
        </div>

    </div>
</template>

<script>
    import Order from '../components/Order/order.vue';
    import axios from "axios";

    export default {
        components: {
            Order
        },
        data() {
            return {
                orders: [],
            }
        },
        created() {
            this.fetchOrders();
        },
        methods: {
            async fetchOrders() {
                try {
                    const res   = await axios.get('http://localhost:3000/api/order');
                    this.orders = res.data;
                } catch (err) {
                    console.log(err);
                    this.orders = [
                        {
                            id: 0,
                        }
                    ]
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .order-wrap{
        display: grid;
        grid-gap: 20px;
    }
</style>