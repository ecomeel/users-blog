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
        <p class="bio__username">{{ user.username }}</p>
        <p class="bio__phone">{{ user.phone }}</p>
        <p class="bio__email">{{ user.email }}</p>
        <p class="bio__website">{{ user.website }}</p>
    </div>
</template>
<style></style>
