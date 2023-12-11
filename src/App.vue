<script>
export default {
    name: "app",
    data() {
        return {
            // albums: [],
            // isErrorLoad: false,
            // isLoading: true,
        };
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
        // this.$store.dispatch("getAlbumsFromApi");
        this.$store.dispatch('getUsersFromApi');
        console.log(this.$store.getters.users)
    },
};
</script>

<template>
    <div class="app">
        <!-- <h2>albums is: {{ $store.state.als }}</h2> -->

        <!-- <div v-if="this.$store.state.isLoading">Loading</div>

        <div v-else-if="this.$store.state.isErrorLoad"> Error load</div> -->

        <!-- <ul v-else class="albums">
            <li class="album" v-for="album in this.$store.getters.albums" :key="album.id">
                <h2 class="album__title">{{ album.title }}</h2>
            </li>
        </ul> -->

        <h1 class="users__title">Список пользователей</h1>
        <ul class="users__list">
            <li v-for="user in this.$store.getters.users" :key="user.id">
                <h1>{{ user.name }}</h1>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped module>
</style>
