<template>
    <tr>
        <td>{{UserRaiting.place}}</td>
        <td>{{UserRaiting.lastname}}</td>
        <td>{{UserRaiting.firstname}}</td>
        <td>{{UserRaiting.raiting}}</td>
    </tr>
</template>

<style lang="scss" scoped>

    td{
        padding: 10px 15px;
    }

    tr > td{
    }

</style>

<script>
    export default {
        name: "UserRaiting",
        props: ["UserRaiting"]
    }
</script>