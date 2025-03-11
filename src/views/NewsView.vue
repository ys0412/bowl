<template>
    <div class="news-container">
      <h1>新闻中心</h1>
      <p class="subtitle">关注餐饮消毒行业动态，了解最新政策和趋势。</p>
  
      <!-- 新闻列表 -->
      <ul class="news-list">
        <li v-for="news in newsList" :key="news.id" @click="goToDetail(news.id)">
        <img :src="news.image" alt="news image" class="news-image" />
          <div class="news-content">
            <h2>{{ news.title }}</h2>
            <p>{{ news.summary }}</p>
            <span class="news-date">{{ news.date }}</span>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "NewsView",
    data() {
      return {
        newsList: [
          {
            id: 1,
            title: "国家发布最新《餐具消毒标准》",
            summary: "国家市场监管总局近日发布新《餐具消毒标准》，严格规定餐具消毒流程，提高食品安全标准。",
            image: require('@/assets/picture1.jpg'),  // ✅ 使用 require 解析
            date: "2025-03-11",
            content: "国家市场监管总局近日发布新《餐具消毒标准》，规定餐具消毒温度需达到120°C以上，消毒液浓度需符合国家食品安全标准。餐饮企业需严格执行，保障消费者用餐安全。",
          },
          {
            id: 2,
            title: "智能餐具消毒设备进入市场",
            summary: "新型智能餐具消毒机具备自动清洗、紫外线消毒、烘干等功能，受到餐饮行业青睐。",
            image: require('@/assets/picture2.jpg'), 
            date: "2025-03-10",
            content: "随着科技的发展，智能化设备逐渐进入餐消行业。最新智能餐具消毒机采用高温蒸汽+紫外线双重消毒方式，消毒率高达99.99%。餐饮企业纷纷采购，提升餐具安全标准。",
          },
          {
            id: 3,
            title: "环保餐具消毒方式获推广",
            summary: "使用无化学添加的高温蒸汽和臭氧进行餐具消毒，减少化学残留，保护环境。",
            image: require('@/assets/picture1.jpg'), 
            date: "2025-03-08",
            content: "传统消毒方式可能会带来化学残留，而环保餐具消毒方式采用高温蒸汽+臭氧，无需化学消毒剂，深受环保人士支持。专家建议推广至全国餐饮行业。",
          },
          {
            id: 4,
            title: "全国餐饮协会发布餐具消毒行业报告",
            summary: "报告显示，2024年餐消行业市场规模增长15%，预计未来5年仍将高速发展。",
            image: require('@/assets/picture2.jpg'), 
            date: "2025-03-05",
            content: "全国餐饮协会近日发布《2024年度餐具消毒行业报告》，数据显示，2024年行业规模达500亿元，同比增长15%。专家预计，随着食品安全意识提升，该行业未来将保持快速增长。",
          },
          {
            id: 5,
            title: "人工智能助力餐具消毒管理",
            summary: "AI系统可自动监测消毒设备状态，分析消毒数据，提升效率。",
            image: require('@/assets/picture2.jpg'),  
            date: "2025-03-01",
            content: "国内多家科技公司推出AI餐具消毒管理系统，可实时监测消毒设备运行状态，自动检测消毒效果，减少人工操作，提高管理效率。预计未来将在连锁餐饮企业广泛应用。",
          },
        ],
      };
    },
    methods: {
      goToDetail(id) {
        this.$router.push({ name: "NewsDetail", params: { id } });
      },
    },
  };
  </script>
  
  <style scoped>
  .news-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  
  .subtitle {
    color: gray;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  .news-list {
    list-style: none;
    padding: 0;
  }
  
  .news-list li {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .news-list li:hover {
    background: #f8f9fa;
  }
  
  .news-image {
    width: 120px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .news-content {
    flex: 1;
    text-align: left;
  }
  
  .news-content h2 {
    font-size: 1.2rem;
    margin: 0;
  }
  
  .news-content p {
    font-size: 0.9rem;
    color: #666;
    margin: 0.5rem 0;
  }
  
  .news-date {
    font-size: 0.8rem;
    color: #999;
  }
  </style>
  