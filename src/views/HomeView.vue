<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <swiper
      class="swiper"
      :modules="[Autoplay, Pagination]"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      loop
    >
      <swiper-slide><img src="../assets/banner1.jpg" alt="餐具清洁"></swiper-slide>
      <swiper-slide><img src="../assets/banner2.jpg" alt="专业服务"></swiper-slide>
      <swiper-slide><img src="../assets/banner3.jpg" alt="专业服务"></swiper-slide>

      <!-- 分页器 -->
      <template #pagination>
        <div class="swiper-pagination"></div>
      </template>
    </swiper>

    <section class="intro">
      <h2>专业餐具清洁服务</h2>
      <p>提供酒店、餐厅餐具清洁消毒一站式解决方案</p>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      Autoplay,
      Pagination
    }
  }
}
</script>

<style scoped>
.swiper {
  height: 400px;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination {
  position: absolute;
  bottom: 10px;
}
.intro {
  padding: 2rem;
  text-align: center;
}
</style>
