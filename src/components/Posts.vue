<script>
import Post from "./Post.vue";
export default {
    components: {
        Post,
    },
    data() {
        return {
            id: this.$route.params.id,
        };
    },
    mounted() {
        this.$store.dispatch("setPosts", this.id);
    },
};
</script>
<template>
    <div class="posts">
        <h1 class="posts__title">Photos</h1>
        <ul class="posts__list">
            <Post
                class="posts__item"
                v-for="post in this.$store.getters.posts"
                :post="post"
            >
            </Post>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.posts {
    margin-top: 40px;
    &__title {
        margin-bottom: 30px;
        font-size: 35px;
        font-weight: 700;
    }
    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
    &__item {
        flex: 1 1 23%;
    }
}
</style>
