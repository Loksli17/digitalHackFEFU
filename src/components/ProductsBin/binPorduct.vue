<template>
    <li>
        <div class="image"></div>
        <div
            class="first-row"
            :style="{
                'background-image':
                    'url(' +
                    require('../../assets/img/products/' + product.img) +
                    ')',
            }"
        >
            <h3>{{ product.name }}</h3>
            <!-- <h3>{{product.}}</h3> -->
        </div>
        <div class="second-row">
            <h4>{{ product.desc }}</h4>
            <h4>{{ product.price }}₽</h4>
        </div>
        <div class="third-bin">
            <button @click="removeFromCart">Убрать из корзины</button>
        </div>
    </li>
</template>

<script>
    export default {
        name: "BinProduct",
        props: ["product"],
        methods: {
            removeFromCart() {
                // this.$emit("add-to-cart", this.product);
                this.$store.commit("removeFromCart", { product: this.product });
            }
        }
    }
</script>