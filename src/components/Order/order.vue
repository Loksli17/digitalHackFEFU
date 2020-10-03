<template>
    <div>
        <div>{{order.date}}</div>
    </div>
</template>

<script>
    export default {
        name : "order",
        props: ["order"]
    }
</script>