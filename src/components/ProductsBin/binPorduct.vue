<template>
    <li>
        <div class="image"
            :style="{
                'background-image':
                    'url(' +
                    require('../../assets/img/products/' + product.img) +
                    ')',
            }">
        </div>
        <div>
            <h3>{{ product.name }}</h3>
        </div>
        <div class="second-row">
            <!-- <h4>{{ product.desc }}</h4> -->
            <h4>{{ product.price }}₽</h4>
        </div>
        <div class="third-row">
            <h4>Количество:</h4>
            <input
                type="number"
                v-model="product.amount"
                @change="updateItemInCart"
            />
        </div>
        <div id="price">{{ product.price * product.amount }} ₽</div>
        <div class="fourth-bin">
            <button @click="removeFromCart">Убрать из корзины</button>
        </div>
    </li>
</template>

<script>
    export default {
        name: "BinProduct",
        props: ["product"],
        data() {
            return {
                productData: {}
            }
        },
        mounted() {
            // this.productData = this.product;
            // this.productData = {
            //     desc: this.product.desc,
            //     id: this.product.id,
            //     img: this.product.img,
            //     name: this.product.name,
            //     price: this.product.price,
            //     value: this.product.value,
            //     amount: 1
            // }
        },
        methods: {
            removeFromCart() {
                // this.$emit("add-to-cart", this.product);
                this.$store.commit("removeFromCart", { product: this.product });
            },
            updateItemInCart() {
                this.$store.commit("updateItemInCart", { product: this.product })
            }
        }
    }
</script>

<style lang="scss" scoped>
    li {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        border: 1px black solid;
        margin-top: 5px;


        div {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            border-right: 1px black solid;
            font-size: 12px;
            padding: 5px 15px;

            &:nth-child(2) {
                width: 200px;
            }

            &:nth-child(3) {
                width: 30px;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: center;
            }

            &:nth-child(4) {
                width: 400px;
            }

            &:nth-child(5) {
                width: 40px;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: center;
            }

            input {
                height: 20px;
            }
        }
    }

    .image {
        min-width: 100px;
        background-position: no-repeat center 100% 100%;
    }
</style>
