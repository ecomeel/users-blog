<script>
export default {
    props: {
        user: Object
    }
};
</script>
<template>
    <div class="bio">
        <h2 class="bio__name">{{ user.name }}</h2>
        <!-- <h2 class="bio__name">{{ this.$store.getters.selectedUser['name'] }}</h2> -->
        <!-- <p class="bio__username">{{ this.$store.getters.selectedUser['username'] }}</p>
        <p class="bio__phone">{{ this.$store.getters.selectedUser['phone'] }}</p> -->
    </div>
</template>
<style></style>
