<template>
    <div id="app">
        <ProductPopUp :id="id" v-if="popUpState" @close-pop-up="togglePopUp" />
        <Menu />

        <router-view @showPopUpProd="togglePopUp" />
    </div>
</template>

<script>
    import Menu from "../src/components/menu/menu.vue";
    import ProductPopUp from "../src/components/productPopup/productPopUp.vue";
    export default {
        components: {
            Menu,
            ProductPopUp
        },
        data() {
            return {
                popUpState: false,
                id: 0
            }
        },
        watch: {
            popUpState: function () {
                if (this.popUpState) {
                    document.body.style.overflowY = "hidden";
                } else {
                    document.body.style.overflowY = "";
                }
            }
        },
        methods: {
            togglePopUp(id) {
                if (typeof id === "number") {
                    this.id = id;
                }
                this.popUpState = !this.popUpState;
            }
        }
    }
</script>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@100;400&display=swap");

    * {
        margin: 0px;
        padding: 0px;
        font-family: "Exo 2", sans-serif;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // text-align: center;
        color: #2c3e50;
    }
</style>
