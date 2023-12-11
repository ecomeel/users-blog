<script>
export default {
    props: {
        name: String,
        phone: String
    }
}
</script>
<template>
    <li class="user">
        <h2 class="user__name">Name: {{ name }}</h2>
        <p class="user__phone">Phone: {{ phone }}</p>
    </li>
</template>
<style lang="scss" scoped>
    .user {
        padding: 20px;
        height: 100px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }
</style>