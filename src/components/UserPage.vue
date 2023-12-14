<script>
import Album from "./Album.vue";
import Bio from "./Bio.vue";
import Post from "./Post.vue";

export default {
    data() {
        return {
            id: this.$route.params.id,
            albums: this.$store.getters.albums,
        };
    },
    components: {
        Album,
        Bio,
        Post,
    },
    methods: {
        goBackToAllUsers() {
            this.$router.go(-1);
        },

    },
    mounted() {
        this.$store.dispatch("setSelectedUser", this.id);
        this.$store.dispatch("setAlbums", this.id);
        this.$store.dispatch("setPosts", this.id);
    },
};
</script>
<template>
    <div class="user-page">
        <div class="container">
            <a class="user-page__go-back-btn" @click="goBackToAllUsers">
                &lt Go Back
            </a>
            <RouterView></RouterView>
        </div>
    </div>
</template>
<style scoped lang="scss">
.user-page {
    &__go-back-btn {
        margin-bottom: 40px;
        padding: 10px;

        font-weight: 700;
        font-size: 24px;

        border-bottom: 1px solid #1111114d;
        border-radius: 15px;
        transition: outline ease 0.3s;
        cursor: pointer;

        &:hover {
            outline: 2px solid #b9b9b94d;
        }
    }
}
</style>
