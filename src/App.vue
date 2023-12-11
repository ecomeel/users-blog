<script>
export default {
    name: "app",
    data() {
        return {};
    },
    methods: {
        increment() {
            this.$store.commit({
                type: "increment",
                value: 10,
            });
        },
    },
    mounted() {
        this.$store.dispatch("getUsersFromApi");
    },
};
</script>

<template>
    <div class="app">


        <h1 class="users__title">Список пользователей:</h1>

        <p v-if="this.$store.getters.isLoadingUsers">Loading users list...</p>

        <p v-else-if="this.$store.getters.isErrorLoadingUsers">Error Loading</p>

        <ul v-else class="users__list">
            <li v-for="user in this.$store.getters.users" :key="user.id">
                <h1>{{ user.name }}</h1>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped module></style>
