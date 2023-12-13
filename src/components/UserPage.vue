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
            <a class="user-page__go-back-btn" @click="goBackToAllUsers">
                &lt Go to Users List
            </a>

            <Bio
                class="user-page__bio"
                :user="this.$store.getters.selectedUser"
            ></Bio>

            <h2 class="user-page__title">Albums</h2>
            <p v-if="this.$store.getters.isLoadingAlbums">Loadig Albums...</p>
            <p v-else-if="this.$store.getters.isErrorLoadingAlbums">
                Error loading Albums
            </p>
            <ul class="user-page__albums">
                <Album
                    v-for="album in this.$store.getters.albums"
                    :key="album.id"
                    :album="album"
                ></Album>
            </ul>

            <h2 class="user-page__title">Posts</h2>
            <p v-if="this.$store.getters.isLoadingPosts">Loadig Posts...</p>
            <p v-else-if="this.$store.getters.isErrorLoadingPosts">
                Error loading Posts
            </p>
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
    &__go-back-btn {
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
        text-align: center;
        box-shadow: 0px -25px 30px rgba($color: #000000, $alpha: 0.07);
        border-radius: 30px;
        font-size: 35px;
        font-weight: 700;
    }
}

@media (max-width: 800px) {
}
</style>
