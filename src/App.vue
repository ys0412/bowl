<template>
  <div class="container">
    <header>
      <div class="nav-container">
        <!-- 公司 Logo -->
        <div class="logo">
          <img src="@/assets/logo.png" alt="公司 Logo" />
          <span>碗来了餐具服务</span>
        </div>

        <!-- 导航栏 -->
        <nav>
          <router-link to="/">首页</router-link>
          <router-link to="/services">服务项目</router-link>
          <router-link to="/news">新闻中心</router-link>
          <router-link to="/about">关于我们</router-link>
        </nav>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>© 2025 碗来了餐具服务公司 联系电话：400-800-1234</p>
    </footer>
  </div>
</template>

<style scoped>
/* 让整个页面最小高度填满视口 */
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 视口高度 */
}

/* 让 main 自动撑开页面，footer 贴底 */
main {
  flex: 1;
}

/* 头部样式 */
header {
  background: #f8f9fa;
  padding: 1rem 2rem;
}

/* 头部容器 */
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo 样式 */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: bold;
}

.logo img {
  height: 50px;
}

/* 导航栏样式 */
nav {
  display: flex;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

nav a:hover {
  color: #007bff;
}

/* 让 body 没有额外间距 */
body {
  margin: 0;
}

/* 底部样式 */
footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}
</style>
