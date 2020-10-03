<template>
    <li>
        <div class="order-user">
            <h4>Студент</h4>
            <div>
                {{ delivery.lastname }}
                {{ delivery.firstname }}
                {{ delivery.patronymic }}
            </div>
            <div>
                {{ delivery.studentGroup }}
            </div>
            <div>
                {{ delivery.course }}
            </div>
        </div>

        <div class="product-wrap">
            <h4>Товары</h4>
            <div
                class="product"
                v-for="product in delivery.products"
                v-bind:key="product.id"
            >
                <div class="name">{{ product.name }}</div>

                <div class="">{{ product.count }}</div>

                <div
                    :style="{
                        'background-image':
                            'url(' +
                            require('../../assets/img/products/' +
                                product.img) +
                            ')',
                    }"
                ></div>

                <div class="">{{ product.count }}</div>

                <div
                    :style="{
                        'background-image':
                            'url(' +
                            require('../../assets/img/products/' +
                                product.img) +
                            ')',
                    }"
                ></div>
            </div>
        </div>

        <div class="date">
            {{ delivery.date }}
        </div>

        <button @click="remove">УДАЛИТЬ</button>
    </li>
</template>

<script>
    export default {
        props: ["delivery"],
        methods: {
            remove() {
                this.$store.commit("removeDelivery", { delivery: this.delivery });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .order {
        display: grid;
        grid-gap: 10px;
        padding: 20px;
        border: 10px;
        background: #ccc;

        a {
            display: block;
            padding: 8px 13px;
            text-decoration: none;
            background: #fff;
            width: max-content;
        }
    }
</style>