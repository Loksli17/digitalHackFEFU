<template>
    <div class="menu">
        <div>и тут чота</div>
        <div class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/users">Users</router-link>
            <router-link to="/raiting">Рейтинг</router-link>
            <router-link to="/products-bin">Корзина</router-link> 
        </div>

        <div>тут кнопки выход я так думаю</div>
    </div>
</template>

<style lang="scss" scoped>
    .menu {
        padding: 30px;

        display: grid;
        grid-template-columns: max-content auto max-content;
        gap: 20px;

        .nav {
            display: grid;
            grid-template-columns: repeat(3, max-content);
            gap: 10px;

            a {
                font-weight: bold;
                color: #007af5;

                &.router-link-exact-active {
                    color: #090b83;
                }
            }
        }
    }
</style>