<template>
    <li>
        <div
            class="image"
            :style="{
                'background-image':
                    'url(' +
                    require('../../assets/img/products/' + product.img) +
                    ')',
            }"
        ></div>
        <h3>{{ product.name }}</h3>
        <div class="product-info">
            <span>{{ product.value }}</span>
            <div class="market">
                <div class="market-logo"></div>
                <span>{{ product.sname }}</span>
            </div>
            <span id="price">{{ product.price }} ₽</span>
            <div class="third-bin">
                <button @click="AddToCart">В корзину</button>
            </div>
        </div>
        
        <div class="third-bin">
            <!-- <button @click="AddToCart">Добавить в корзину</button> -->
            <button @click="showInfo">hahhahaha</button>
        </div>
    </li>
</template>

<script>
    export default {
        name: "Product",
        props: ["product"],
        methods: {
            AddToCart() {
                // this.$emit("add-to-cart", this.product);
                this.$store.commit("addToCart", { product: this.product });
            },
            showInfo() {
                this.$emit("showPopUp", this.product.id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@100;400&display=swap");

    .market-logo {
        width: 50%;
        background-image: url("../../assets/img/products/logo1.png");
        background-repeat: no-repeat;
    }

    li {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: space-between;
        text-align: center;

        background: #f0f0f0;
        padding: 20px;
        margin: 5px;
        box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.2);
        font-family: 'Exo 2', sans-serif;

        .image {
            background: no-repeat center;
            width: 90%;
            height: 270px;
        }

        .product-info {
            width: 100%;
            height: 60px;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50% 50%;
            font-family: "Exo 2", sans-serif;

            .market {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;

                .market-logo {
                    width: 30px;
                }
            }

            .third-bin {
                background-color: #4476CC;

                button {
                    background: none;
                    border: 0px;
                    color: white;
                    font-size: 14px;
                    text-align: center;
                    line-height: 30px;
                }

                &:hover {
                    background: red;
                }
            }

            #price {
                line-height: 35px;
                font-weight: bold;
            }
        }
    }

    .order-button {
        background-color: #4476cc;
        color: #ffffff;
        width: 90%;
        text-align: center;
        padding: 5px 5px;
    }
</style>
