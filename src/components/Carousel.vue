<template>
    <div class="carousel-container">
      <swiper
        :modules="[Autoplay, Pagination, Navigation]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :pagination="{ clickable: true }"
        :navigation="true"
        class="carousel"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="image" class="slide-image" alt="轮播图">
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import { Autoplay, Pagination, Navigation } from "swiper/modules";
  
  export default {
    components: { Swiper, SwiperSlide },
    setup() {
      const images = [
        "/images/banner1.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg",
      ];
      return { images, Autoplay, Pagination, Navigation };
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
  }
  
  .slide-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  </style>
  