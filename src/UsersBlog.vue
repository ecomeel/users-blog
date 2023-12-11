<script>
import User from './components/User.vue';
export default {
    components: {
        'User': User
    },
    data() {
        return {};
    },
    methods: {},
    mounted() {
        this.$store.dispatch("getUsersFromApi");
    },
};
</script>

<template>
    <div class="users">
        <h1 class="users__title">Список пользователей:</h1>
        <p class="users__loading" v-if="this.$store.getters.isLoadingUsers">
            Loading users list...
        </p>
        <p
            class="users__error-loading"
            v-else-if="this.$store.getters.isErrorLoadingUsers"
        >
            Error Loading
        </p>
        <ul class="users__list" v-else>
            <User
                v-for="user in this.$store.getters.users"
                :key="user.id"
                :name="user.name"
                :phone="user.phone"
            ></User>
        </ul>
    </div>
</template>

<style lang="scss" scoped module></style>
