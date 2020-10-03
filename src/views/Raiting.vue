<template>
    <div>
        <h3>Рейтинг</h3>
        <table class="raiting" border="1">
            <UserRaiting 
                v-for="user in users" 
                :key="user.id" 
                :UserRaiting="user" 
            />
        </table>
    </div>
</template>

<script>
    import UserRaiting from '../components/Raiting/UserRaiting.vue';
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
                    const res  = await axios.get('http://localhost:3000/api/raiting');
                    this.users = res.data;
                    console.log(this.users);
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