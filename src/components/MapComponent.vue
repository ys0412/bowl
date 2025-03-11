<!-- src/components/MapComponent.vue -->
<template>
    <div class="map-container">
      <div id="map"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MapComponent",
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const script = document.createElement("script");
        script.src = `https://webapi.amap.com/maps?v=2.0&key=d7526291af90c39969f38cd2fd6e7ac3`;
        script.onload = this.loadMap;
        document.head.appendChild(script);
      },
      loadMap() {
        const map = new AMap.Map("map", {
          center: [121.4737, 31.2304], // 上海坐标（可改成公司地址）
          zoom: 15
        });
  
        // 添加标记点
        new AMap.Marker({
          position: [121.4737, 31.2304],
          map,
          title: "碗来了餐具服务公司"
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 300px;
  }
  
  #map {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  </style>
  