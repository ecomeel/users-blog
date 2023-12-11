<script>
export default {
    props: {
        name: String,
        username: String,
        phone: String,
    }
}
</script>
<template>
    <li class="user">
        <h3 class="user__username">Username: {{ username }}</h3>
        <p class="user__name">Name: {{ name }}</p>
        <p class="user__phone">Phone: {{ phone }}</p>
    </li>
</template>
<style lang="scss" scoped>
    .user {
        padding: 15px;
        height: 100px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        transition: background-color ease .6s;

        &:hover {
            background-color: rgba($color: #000000, $alpha: .1);
        }
    }
</style>