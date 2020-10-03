<template>
    <li>
        <div class="image"
            :style="{
                'background-image':
                    'url(' +
                    require('../../assets/img/products/' + product.img) +
                    ')',
            }"></div>
        <h3>{{ product.name }}</h3>
        <div class="product-info">
            <span>{{ product.value }}</span>
            <div class="market">
                <div class="market-logo"></div>
                <span>{{ product.sname }}</span>
            </div>
            <span id="price">{{ product.price }} ₽</span>
            <div class="order-button">
                В корзину
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "Product",
        props: ["product"]
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100;400&display=swap');

    .market-logo {
        width: 50%;
        background-image: url('../../assets/img/products/logo1.png');
        background-repeat: no-repeat;
    }

    li {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: space-between;
        text-align: center;

        background: #F0F0F0;
        padding: 20px;
        margin: 5px;
        box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.2);

        .image {
            background: no-repeat center;
        }

        .product-info {
            width: 100%;
            height: 60px;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50% 50%;
            font-family: 'Exo 2', sans-serif;

            .market {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;

                .market-logo {
                    width: 30px;
                }
            }

            #price {
                line-height: 35px;
                font-weight: bold;
            }
        }
    }

    .image {
        width: 90%;
        height: 270px;
    }

    .order-button {
        background-color: #4476CC;
        color: #FFFFFF;
        width: 90%;
        text-align: center;
        padding: 5px 5px;
    }
</style>
