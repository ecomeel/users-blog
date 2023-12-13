<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default {
    props: {
        title: String,
        sliderPhotos: Array,
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
    methods: {},
};
</script>
<template>
    <div class="album">
        <h2>{{ title }}</h2>
        <div class="slider">
            <swiper
                :slides-per-view="3"
                :space-between="20"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }"
                :modules="modules"
            >
                <swiper-slide v-for="photo in sliderPhotos">
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
h2 {
    font-weight: 700;
}
.slider {
    width: 300px;
}
img {
    width: 80px;
    height: 80px;
    background: url("../assets/img/error-loading.png") no-repeat;
    background-size: cover;
    position: 50% 50%;
}
</style>
