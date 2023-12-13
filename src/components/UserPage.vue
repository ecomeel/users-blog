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
        this.$store.commit("setSelectedUserById", {
            id: this.id,
            users: this.$store.getters.users,
        });

        this.$store.dispatch({
            type: "setSelectedUserContent",
            userId: this.id,
        });
    },
};
</script>
<template>
    <div class="user-page">
        <div class="container">
            <button class="user-page__go-back-btn" @click="goBackToAllUsers">
                Go to All users
            </button>

            <Bio></Bio>

            <h2 class="user-page__title">Albums</h2>
            <ul class="user-page__albums">
                <Album
                    v-for="album in this.$store.getters.albums"
                    :key="album.id"
                    :title="album.title"
                    :sliderPhotos="album.fivePhotos"
                    :album="album"
                ></Album>
            </ul>

            <h2 class="user-page__subtitle">Posts</h2>
            <ul class="user-page__posts">
                <Post
                    v-for="post in this.$store.getters.posts"
                    :key="post.id"
                    :post="post"
                ></Post>
            </ul>
        </div>
    </div>
</template>
<style scoped lang="scss">
.user-page {
    &__albums {
        display: flex;
        flex-wrap: wrap;
        & > * {
            flex: 1 1 30%;
        }
    }
}
</style>
