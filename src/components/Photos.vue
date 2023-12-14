<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
        };
    },
    mounted() {
        this.$store.dispatch("setAlbums", this.id);
    },
};
</script>
<template>
    <div class="photos">
        <h1 class="photos__title title">Photos</h1>
        <p v-if="this.$store.getters.isLoadingAlbums">Loadig Albums...</p>
        <p v-else-if="this.$store.getters.isErrorLoadingAlbums">
            Error loading Albums
        </p>
        <ul class="photos__albums">
            <li
                class="photos__album"
                v-for="album in this.$store.getters.albums"
            >
                <h3 class="photos__subtitle">{{ album.title }}</h3>
                <div class="photos__wrapper">
                    <img
                        class="photos__img"
                        v-for="photo in album.photos"
                        :src="photo.thumbnailUrl"
                        alt=""
                    />
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.photos {
    margin-top: 40px;

    &__title {
        margin-bottom: 30px;
        font-size: 35px;
        font-weight: 700;
    }
    &__albums {
        & > *:not(:last-child) {
            margin-bottom: 40px;
        }
    }
    &__wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    &__album {
    }
    &__subtitle {
        margin-bottom: 15px;
        font-size: 25px;
    }
}
</style>
