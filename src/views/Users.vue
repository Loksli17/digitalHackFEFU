<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h3>{{stuff}}</h3>
    </div>
</template>


<script>
    import axios from "axios";

    export default {
        name: 'Users',

        data() {
            return {
                stuff: ""
            }
        },

        mounted() {
            this.fetchData();
        },

        methods: {
            async fetchData() {
                const config = {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }

                try {
                    const res  = await axios.get("http://localhost:3000/api/index", config);
                    this.stuff = await res.data;
                }catch(error){
                    console.error(error);
                }
            }
        }
    }
</script>