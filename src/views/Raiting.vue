<template>
    <div>
        <h3>Рейтинг</h3>
        <ul class="raiting">
            <UserRaiting v-for="user in users" :key="user.id" :user="user" />
        </ul>
    </div>
</template>

<script>
    import UserRaiting from '../components/Raiting/user.vue';
    import axios from "axios";

    export default {
        components: {
            UserRaiting
        },
        data() {
            return {
                users: [],
            }
        },
        created() {
            this.fetchUsers();
        },
        methods: {
            async fetchUsers() {
                try {
                    const res = await axios.get('http://localhost:3000/api/raiting');
                    this.users = res.data;
                } catch (err) {
                    console.log(err);
                    this.users = [
                        {
                            id: 0,
                            lastname: 'Тимош',
                            firstname: 'Павел',
                            patronymic: 'Сергеевич',
                        }
                    ]
                }
            }
        }

    }
</script>