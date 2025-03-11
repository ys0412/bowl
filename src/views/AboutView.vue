<!-- src/views/AboutView.vue -->
<template>
    <div class="about">
      <header class="about-header">
        <h1>关于我们</h1>
        <p>碗来了餐具服务公司——专业提供高品质餐具清洁消毒解决方案</p>
      </header>
  
      <section class="company-info">
        <h2>公司简介</h2>
        <p>
          碗来了餐具服务公司成立于2010年，专注于为酒店、餐厅、食堂等提供高效、安全的餐具清洁与消毒服务。
          我们采用先进的清洗设备和环保消毒技术，确保餐具卫生达标，守护每一位顾客的用餐健康。
        </p>
      </section>
  
      <section class="team">
        <h2>团队介绍</h2>
        <div class="team-members">
          <div class="member" v-for="(member, index) in teamMembers" :key="index">
            <img :src="member.photo" :alt="member.name" />
            <h3>{{ member.name }}</h3>
            <p>{{ member.position }}</p>
          </div>
        </div>
      </section>
  
      <section class="location">
        <h2>公司地址</h2>
        <p>📍 总部地址：上海市浦东新区示范路88号创新大厦10楼</p>
        <p>📞 联系电话：400-800-1234</p>
        <p>📧 邮箱：contact@wanlai.com</p>
  
        <!-- 地图占位，可替换为实际地图组件 -->
        <div class="map-placeholder">
            <MapComponent />
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import MapComponent from "@/components/MapComponent.vue";
  export default {
    components: {
             MapComponent, // 注册组件
    },
    data() {
      return {
        teamMembers: [
          { name: "戴礼新", position: "创始人 & CEO", photo: require('@/assets/ceo.jpg') },
          { name: "戴礼新", position: "运营总监", photo: require('@/assets/ceo.jpg') },
          { name: "戴礼新", position: "市场经理", photo: require('@/assets/ceo.jpg') },
          { name: "戴礼新", position: "技术总监", photo: require('@/assets/ceo.jpg') }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .about {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  
  .about-header {
    background: #007bff;
    color: white;
    padding: 2rem;
    border-radius: 10px;
  }
  
  h1 {
    margin: 0;
    font-size: 2rem;
  }
  
  h2 {
    margin-top: 2rem;
    color: #333;
  }
  
  /* 团队成员 */
  .team-members {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .member {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    width: 180px;
  }
  
  .member img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  /* 地址部分 */
  .location {
    margin-top: 2rem;
  }
  
  .map-placeholder {
    background: #ddd;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: 1rem;
  }
  </style>
  