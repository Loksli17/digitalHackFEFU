<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h3>{{ stuff }}</h3>
    </div>
</template>

<script>
    // @ is an alias to /src
    import axios from "axios";

    export default {
        name: 'Home',
        data() {
            return {
                stuff: ""
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            async fetchData() {
                try {
                    const res = await axios.get("http://localhost:3000/api/index");
                    this.stuff = await res.data;
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>

<style lang="scss">
</style>
