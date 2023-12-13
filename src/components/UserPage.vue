<script>
import Album from "./Album.vue";
import { mapState } from "vuex";
export default {
    data() {
        return {
            id: this.$route.params.id,
            albums: this.$store.getters.albums,
        };
    },
    components: {
        Album: Album,
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
            <button class="user-page__go-back-btn" @click="goBackToAllUsers">
                Go to All users
            </button>
            <h3 class="user-page__title">User page {{ $route.params.id }}</h3>
            <ul class="user-page__albums">
                <Album
                    v-for="album in this.$store.getters.albums"
                    :key="album.id"
                    :title="album.title"
                    :sliderPhotos="album.fivePhotos"
                ></Album>
            </ul>
            <ul class="user-page__posts"></ul>
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
