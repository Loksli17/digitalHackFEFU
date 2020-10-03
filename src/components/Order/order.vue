<template>
    <div class="order">
        <div class="product-wrap">
            <div class="product" v-for="product in order.products" v-bind:key="product.id">
                <div class="name">{{product.name}}</div>
                <div class="">{{product.}}</div>
            </div>
        </div>
        <div>
            {{order.date}}
        </div>
    </div>
</template>

<script>
    export default {
        name : "order",
        props: ["order"]
    }
</script>