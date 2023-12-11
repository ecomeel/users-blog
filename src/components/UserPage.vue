<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
        };
    },
    methods: {
        goBackToAllUsers() {
            this.$router.go(-1);
        },
    },
    mounted() {
        // this.$store.getters.getUserById(this.id);
        this.$store.dispatch({
            type: "getAlbumsByUserIdFromApi",
            id: this.id,
        });
    },
};
</script>
<template>
    <div class="user-page">
        <div class="container">
            <button class="user-page__go-back-btn" @click="goBackToAllUsers">
                Go to All users
            </button>
            <h3 class="user-page__title">User page {{ $route.params.id }}</h3>
        </div>
    </div>
</template>
<style></style>
