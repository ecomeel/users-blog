<script>
export default {
    methods: {
        goBackToAllUsers() {
            this.$router.go(-1)
        }
    }
};
</script>
<template>
    <div class="user-page">
        <div class="container">
            <button class="user-page__go-back-btn" @click="goBackToAllUsers">Go to All users</button>
            <h3 class="user-page__title">User page {{ $route.params.username }}</h3>
        </div>
    </div>
</template>
<style></style>
