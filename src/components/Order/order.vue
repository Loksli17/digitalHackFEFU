<template>

    <div class="order">

        <div class="order-user">
            <div>
                {{order.lastname}}
                {{order.firstname}}
                {{order.patronymic}}
            </div>
            <div>
                {{order.studentGroup}}
            </div>
            <div>
                {{order.course}}
            </div>
        </div>
    
        <div class="product-wrap">
            <div class="product" v-for="product in order.products" v-bind:key="product.id">
                <div class="name">{{product.name}}</div>
                
                <div class="">{{product.count}}</div>
                
                <div :style="{
                    'background-image':
                        'url(' +
                        require('../../assets/img/products/' + product.img) +
                        ')',
                    }">
                </div>

            </div>
        </div>

        <div class="date">
            {{order.date}}
        </div>

        <a href="">Отликнуться на заказ</a>
    </div>

</template>

<script>
    export default {
        name : "order",
        props: ["order"]
    }
</script>

<style lang="scss" scoped>
    .order{
        display: grid;
        grid-gap: 10px;
        padding: 20px;
        border: 10px;
        background: #ccc;

        a{
            display: block;
            padding: 5px 10px;
            text-decoration: none;
            background: #fff;
            width: max-content;
        }

        
    }

    
</style>