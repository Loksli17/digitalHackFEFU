<template>
    <div>
        <div class="background"></div>
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
</style>