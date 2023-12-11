<script>
export default {
    props: {
        user: Object,
    },
    methods: {
        goToUserPage() {
            this.$router.push(`/user/${this.user.username}`);
        },
    },
};
</script>
<template>
    <li class="user" @click="goToUserPage">
        <p>ID :{{ user.id }}</p>
        <h3 class="user__username">Username: {{ user.username }}</h3>
        <p class="user__name">Name: {{ user.name }}</p>
        <p class="user__phone">Phone: {{ user.phone }}</p>
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
    transition: background-color ease 0.6s;

    &:hover {
        background-color: rgba($color: #000000, $alpha: 0.1);
    }
}
</style>
