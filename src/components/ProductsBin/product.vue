<template>
    <li>
        <h3>{{ product.firstname }} {{ product.lastname }}</h3>
        <!-- <p>{{ product.quantity }}</p> -->
    </li>
</template>

<script>
    export default {
        name: "Product",
        props: ["product"]
    }
</script>