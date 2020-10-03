<template>
    <div class="pop-up">
        <div class="background" v-on:click="$emit('close-pop-up')">
            <div class="product-brief">
                <div
                    class="image"
                    :style="{
                        'background-image':
                            'url(' +
                            require('../../assets/img/products/' + productInfo.img) +
                            ')',
                    }"
                ></div>
                <h3>{{ productInfo.name }}</h3>
                <p>{{ productInfo.desc }}</p>
                <p>{{ productInfo.price }} ₽</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        props: ["id"],
        data() {
            return {
                productInfo: {}
            }
        },
        mounted() {
            this.fetchProductInfo();
        },
        methods: {
            closePopUp() {
                this.$emit("close-pop-up");
                console.log("hahahahah");
            },
            async fetchProductInfo() {
                try {
                    const res = await axios.get(`http://localhost:3000/api/product/view?id=${this.id}`);
                    this.productInfo = res.data;
                    console.log(res);
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pop-up {
        position: fixed;
        background: rgba(50, 50, 50, 0.8);
        color: white;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-flow: column nowrap;
        text-align: center;
        justify-content: center;

        .background {
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: column nowrap;
            text-align: center;
            justify-content: center;
            align-items: center;

            .product-brief {
                width: 40%;
                height: 50%;
                background: #4476cc;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-around;
                align-items: center;

                div {
                    width: 80%;
                    height: 200px;
                    background: no-repeat center;
                }
            }
        }
    }
</style>
