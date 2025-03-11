<template>
  <div class="services">
    <h2>我们的服务</h2>
    <p class="intro">我们提供全面的餐具清洗、消毒、配送及相关增值服务，确保您的餐具安全、卫生、环保。</p>

    <div class="service-list">
      <div v-for="(service, index) in services" :key="index" class="service-item">
        <img :src="service.image" :alt="service.title" class="service-image" />
        <div class="service-info">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: '餐具清洗',
          description: '采用高温高压清洗技术，深度去污，确保餐具洁净无残留。',
          image: 'https://via.placeholder.com/150?text=餐具清洗'
        },
        {
          title: '消毒服务',
          description: '使用食品级消毒剂，全程无害，符合国家卫生标准。',
          image: 'https://via.placeholder.com/150?text=消毒服务'
        },
        {
          title: '配送服务',
          description: '专业物流团队，提供定时定点配送，确保准时送达。',
          image: 'https://via.placeholder.com/150?text=配送服务'
        },
        {
          title: '环保包装',
          description: '采用可降解环保包装材料，减少塑料污染，符合绿色环保标准。',
          image: 'https://via.placeholder.com/150?text=环保包装'
        },
        {
          title: '个性定制',
          description: '提供个性化定制服务，如餐具刻字、品牌定制等，提升品牌形象。',
          image: 'https://via.placeholder.com/150?text=个性定制'
        },
        {
          title: '设备租赁',
          description: '提供专业餐具清洗、消毒设备租赁，满足不同规模企业的需求。',
          image: 'https://via.placeholder.com/150?text=设备租赁'
        }
      ]
    };
  }
};
</script>

<style scoped>
.services {
  text-align: center;
  padding: 2rem;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
}

.service-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.service-item {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.service-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.service-info {
  padding: 1.5rem;
}

h3 {
  margin: 0 0 1rem;
  color: #333;
}

p {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}
</style>
