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
    <h1>Photos</h1>

    <ul>
        <Post v-for="post in this.$store.getters.posts" :post="post"> </Post>
    </ul>
</template>
<style></style>
