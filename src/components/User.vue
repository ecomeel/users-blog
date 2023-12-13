<script>
export default {
    props: {
        user: Object,
    },
    methods: {
        goToUserPage() {
            this.$router.push(`/user/${this.user.id}`);
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
    outline: 1px solid rgba(128, 128, 128, 0.506);
    border-radius: 10px;
    transition: all ease 0.6s;

    &:hover {
        background-color: rgba($color: #000000, $alpha: 0.1);
        outline: none;
        border-bottom: 1px solid rgba(128, 128, 128, 0.506);
    }
}
</style>
