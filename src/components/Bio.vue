<script>
export default {
    props: {
        user: Object,
    },
};
</script>
<template>
    <div class="bio">
        <div class="bio__about">
            <h2 class="bio__name">{{ user.name }}</h2>
            <p class="bio__username">
                <span class="bio__subtitle">Username: </span>{{ user.username }}
            </p>
        </div>
        <div class="bio__feedback">
            <p class="bio__phone">
                <span class="bio__subtitle">Phone: </span>{{ user.phone }}
            </p>
            <p class="bio__email">
                <span class="bio__subtitle">Mail: </span>{{ user.email }}
            </p>
            <p class="bio__website">
                <span class="bio__subtitle">Website: </span>{{ user.website }}
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.bio {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    font-size: 23px;
    &__about {
        padding: 25px;
        border: 1px solid #aaa;
        border-radius: 40px;

        & > *:not(:last-child) {
            margin-bottom: 15px;
        }
    }
    &__feedback {
        padding: 20px;
        border: 1px solid #aaa;
        border-radius: 40px;

        & > *:not(:last-child) {
            margin-bottom: 15px;
        }
    }
    &__subtitle {
        font-weight: 700;
    }
    &__name {
        font-size: 30px;
        font-weight: 700;

    }
    &__username {
    }
    &__phone {
    }
    &__email {
    }
    &__website {
    }
}
</style>
