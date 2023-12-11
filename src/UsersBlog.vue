<script>
import User from "./components/User.vue";
export default {
    components: {
        User: User,
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
        <div class="container">
            <h1 class="users__title">Список пользователей:</h1>
            <p class="users__loading" v-if="this.$store.getters.isLoadingUsers">
                Loading users list...
            </p>
            <p
                class="error-loading"
                v-else-if="this.$store.getters.isErrorLoadingUsers"
            >
                Error Loading
                <button @click="this.$store.dispatch('getUsersFromApi')">
                    Click to try again
                </button>
            </p>
            <ul class="users__list" v-else>
                <User
                    v-for="user in this.$store.getters.users"
                    :key="user.id"
                    :name="user.name"
                    :phone="user.phone"
                    :username="user.username"
                ></User>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.users {
    width: 100%;
    height: 100%;
    &__title {
        margin: 0 auto;
        margin-bottom: 50px;
        padding-top: 30px;
        padding-bottom: 30px;
        max-width: 300px;
        text-align: center;
        border: 1px solid black;
    }
    &__loading {
        text-align: center;
    }
    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;

        & > * {
            flex: 1 1 45%;
            text-align: center;
        }
    }
}
</style>
