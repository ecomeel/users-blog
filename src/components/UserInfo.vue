<script>
import Album from "./Album.vue";
import Bio from "./Bio.vue";
import Post from "./Post.vue";
export default {
    data() {
        return {
            id: this.$route.params.id,
        };
    },
    components: {
        Album,
        Bio,
        Post,
    },
    methods: {
        goToAlbums() {
            this.$router.push("albums");
        },
        goToPosts() {
            this.$router.push('posts')
        }
    },
    mounted() {
        this.$store.dispatch("setSelectedUser", this.id);
        this.$store.dispatch("setAlbums", this.id);
        this.$store.dispatch("setPosts", this.id);
    },
};
</script>
<template>
    <div class="user-info">
        <Bio
            class="user-info__bio"
            :user="this.$store.getters.selectedUser"
        ></Bio>
        
        <a class="user-info__title" @click="goToAlbums">Albums</a>
        <p v-if="this.$store.getters.isLoadingAlbums">Loadig Albums...</p>
        <p v-else-if="this.$store.getters.isErrorLoadingAlbums">
            Error loading Albums
        </p>
        <ul id="albums" class="user-info__albums">
            <Album
                v-for="album in this.$store.getters.albums"
                :key="album.id"
                :album="album"
            ></Album>
        </ul>

        <a class="user-info__title" @click="goToPosts">Posts</a>
        <p v-if="this.$store.getters.isLoadingPosts">Loadig Posts...</p>
        <p v-else-if="this.$store.getters.isErrorLoadingPosts">
            Error loading Posts
        </p>
        <ul id="posts" class="user-info__posts">
            <Post
                v-for="post in this.$store.getters.posts"
                :key="post.id"
                :post="post"
            ></Post>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.user-info {
    &__bio {
        margin-top: 40px;
        margin-bottom: 50px;
    }

    &__albums {
        margin-bottom: 70px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 40px;
        & > * {
            flex: 1 1 50%;
        }
    }

    &__posts {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        & > * {
            flex: 1 1 23%;
        }
    }

    &__title {
        padding-top: 20px;
        margin-bottom: 20px;
        display: block;
        text-align: center;
        box-shadow: 0px -25px 30px rgba($color: #000000, $alpha: 0.07);
        border-radius: 30px;
        font-size: 35px;
        font-weight: 700;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            color: rgb(155, 132, 175)
        }
    }
}
</style>
