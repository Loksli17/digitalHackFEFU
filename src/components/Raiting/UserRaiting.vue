<template>
    <tr>
        <td>{{UserRaiting.place}}</td>
        <td>{{UserRaiting.lastname}}</td>
        <td>{{UserRaiting.firstname}}</td>
        <td>{{UserRaiting.raiting}}</td>
    </tr>
</template>

<script>
    export default {
        name: "UserRaiting",
        props: ["UserRaiting"]
    }
</script>