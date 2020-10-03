<template>
    <li>
        <h3>{{ product.firstname }} {{ product.lastname }}</h3>
    </li>
</template>

<script>
    export default {
        name: "Product",
        props: ["product"]
    }
</script>