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
    <h1>Photos</h1>

    <ul>
        <li v-for="album in this.$store.getters.albums">
            <h3>album.title</h3>
            <img v-for="photo in album.photos" :src="photo.thumbnailUrl" alt="">
        </li>
    </ul>
</template>
<style></style>
