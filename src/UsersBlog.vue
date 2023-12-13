<script>
import User from "./components/User.vue";

export default {
    components: {
        User,
    },
    mounted() {
        this.$store.dispatch("setUsersFromApiToStore");
    },
};
</script>

<template>
    <div></div>
    <div class="users">
        <div class="container">
            <h1 class="users__title">Select User</h1>
            <p
                class="loading"
                v-if="this.$store.getters.isLoadingUsers"
            >
                Loading...
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
                    :user="user"
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
        margin-bottom: 30px;
        padding-top: 30px;
        padding-bottom: 20px;

        max-width: 700px;
        text-align: center;
        font-weight: 700;
        font-size: 35px;
        border-bottom: 1px solid rgba(128, 128, 128, 0.214);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        box-shadow: 0px 6px 10px rgba($color: #6a6a6a84, $alpha: 0.1);
    }
    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;

        & > * {
            flex: 1 1 31%;
            text-align: center;
        }
    }
}

@media (max-width: 650px) {
    .users {
        &__list {
            & > * {
                flex: 1 1 100%;
            }
        }
    }
}
</style>
