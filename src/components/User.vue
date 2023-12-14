<script>
export default {
    props: {
        user: Object,
    },
    methods: {
        goToUserPage() {
            this.$router.push(`/user/${this.user.id}/userinfo`);
        },
    },
};
</script>
<template>
    <li class="user" @click="goToUserPage">
        <h3 class="user__username">
            <span class="user__subtitle">Username:</span> {{ user.username }}
        </h3>
        <p class="user__name">
            <span class="user__subtitle">Name:</span> {{ user.name }}
        </p>
        <p class="user__phone">
            <span class="user__subtitle">Phone:</span> {{ user.phone }}
        </p>
    </li>
</template>
<style lang="scss" scoped>
.user {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    outline: 1px solid rgba(128, 128, 128, 0.506);
    border-radius: 10px;
    transition: all ease 0.6s;

    & > *:not(:last-child) {
        margin-bottom: 10px;
    }

    &__subtitle {
        font-weight: 700;
    }

    &:hover {
        background-color: rgba($color: #afbcb7, $alpha: 0.3);
        outline: none;
        box-shadow: 10px 13px 30px rgba(0, 0, 0, 0.1);
    }
}
</style>
