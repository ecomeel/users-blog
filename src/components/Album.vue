<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default {
    props: {
        album: Object,
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay],
        };
    },
};
</script>
<template>
    <div class="album">
        <h2 class="album__title">{{ album.title }}</h2>
        <div class="slider">
            <swiper
                :slides-per-view="5"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }"
                :modules="modules"
            >
                <swiper-slide v-for="photo in album.photos">
                    <img
                        class="slider__image"
                        :src="photo.thumbnailUrl"
                        :title="photo.title"
                        :key="photo.title"
                        alt=""
                    />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<style scoped lang="scss">
.album {
    max-width: 600px;
    &__title {
        margin-bottom: 15px;
        font-weight: 700;
    }
}
.slider {
    &__image {
        width: 120px;
        height: 120px;
        background: url("../assets/img/loading.png") no-repeat;
        background-size: cover;
        position: 50% 50%;
    }
}

@media (max-width: 1340px) {
    .album {
        max-width: 100%;
    }
    .slider__image {
        width: 160px;
        height: 160px;
    }
}

@media (max-width: 890px) {
    .slider__image {
        width: 100px;
        height: 100px;
    }
}

@media (max-width: 600px) {
    .slider__image {
        width: 60px;
        height: 60px;
    }
}
</style>
