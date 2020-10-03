<template>
    <div class="pop-up">
        <div class="background" @click="closePopUp"></div>
        <div>
            <h3>{{ productInfo.name }}</h3>
            <p>{{ productInfo.desc }}</p>
            <p>{{ productInfo.price }}</p>
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
        top: 30%;
        left: 35%;
        background: rgba(50, 50, 50, 0.8);
        color: white;
        width: 30vw;
        height: 40vh;
        display: flex;
        flex-flow: column nowrap;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
</style>
