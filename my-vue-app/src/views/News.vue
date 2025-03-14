<template>
  <div class="news-container">
    <!-- 顶部导航栏 -->
    <div class="top-nav">
      <div class="nav-links">
        <a href="#">首页</a>
        <a href="#" class="active">新闻</a>
        <a href="#">军事</a>
        <a href="#">财经</a>
        <a href="#">娱乐</a>
        <a href="#">汽车</a>
        <a href="#">游戏</a>
        <a href="#">文化</a>
        <a href="#">健康</a>
        <a href="#">公益</a>
        <a href="#">优选</a>
        <a href="#">法制</a>
        <a href="#">守艺中华</a>
        <a href="#">国际军事</a>
        <a href="#">更多</a>
        <a href="#">地方频道</a>
      </div>
      <div class="user-actions">
        <a href="#">注册</a>
        <a href="#" class="login-btn">登录</a>
      </div>
    </div>

    <!-- 网站Logo和新闻标题 -->
    <div class="site-header">
      <div class="logo">
        <div class="logo-placeholder">中华网</div>
        <span class="site-title">新闻</span>
      </div>
    </div>

    <!-- 新闻导航栏 -->
    <div class="news-nav">
      <a href="#">国内</a>
      <a href="#">国际</a>
      <a href="#">社会</a>
      <a href="#">体育</a>
      <a href="#">专题</a>
      <a href="#">军事</a>
      <a href="#">财经</a>
      <a href="#">滚动</a>
      <a href="#">政务</a>
      <a href="#">冬奥</a>
    </div>

    <!-- 实时新闻滚动条 -->
    <div class="realtime-news">
      <span class="label">实时</span>
      <div class="news-ticker">
        <span>外交部回应16:22</span>
        <span>哈尔滨工程大学副校长张志伦被查</span>
        <span>巴塞罗那16:06</span>
        <span>《罗马日报》5名董事被警方拘捕</span>
        <span>香港中联办发声明15:19</span>
        <span>云南瑞丽：5日8时起新人员非必要不入境</span>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 左侧主新闻 -->
      <div class="main-news">
        <div class="news-slider">
          <div class="news-banner-placeholder"></div>
          <h2>被中方反制打屈，加拿大省长呼吁对华对美：讨好美国害中国不明智</h2>
        </div>
        <div class="news-details">
          <h3>贵州长顺公布中小学教师退出机制 优化教师队伍</h3>
          <div class="news-time">2023-03-13 11:37</div>
          <div class="news-source">贵州长顺公布中小学教师退出机制</div>
        </div>
        <div class="news-highlight">
          <h3>新悟空传奇</h3>
          <div class="news-source">来源：游戏天地·众誉</div>
        </div>
        <div class="news-special">
          <h3>江苏无尘车间</h3>
          <div class="news-desc">无尘车间</div>
        </div>
      </div>

      <!-- 右侧新闻列表 -->
      <div class="side-news">
        <div class="hot-news">
          <h3>24小时热点</h3>
          <ul>
            <li>
              <div class="news-img-placeholder"></div>
              <div class="news-text">雷霆队乔丹最后时刻：亚历山大联手华莱士攻破比赛 布鲁克林高场 雷霆双冰保军</div>
            </li>
            <li>
              <div class="news-img-placeholder"></div>
              <div class="news-text">带侄娘塞了整4年司机交新女友，当事人回应：我是人不是神新生活可以</div>
            </li>
            <li>
              <div class="news-img-placeholder"></div>
              <div class="news-text">被中方反制打屈，加拿大省长呼吁对华对美：讨好美国害中国不明智</div>
            </li>
            <li>
              <div class="news-img-placeholder"></div>
              <div class="news-text">新韩银行纪金秀资钢了！业界回应是与金秀贤解除代言：观察趋势再作决定</div>
            </li>
            <li>
              <div class="news-img-placeholder"></div>
              <div class="news-text">不实信息！应急管理部紧急声明对管辖疑训练证据辨</div>
            </li>
            <li>
              <div class="news-img-placeholder"></div>
              <div class="news-text">叶国富，玩家变"土豪"，股分上市谋新局</div>
            </li>
            <li>
              <div class="news-img-placeholder"></div>
              <div class="news-text">杨星辨别兴文沟通打击事件 透露对方很关心工人</div>
            </li>
            <li>
              <div class="news-img-placeholder"></div>
              <div class="news-text">《都爱偷看：香》整体偏悦，喜分享P得很诚检</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 可以在此处添加需要的数据和方法
</script>

<style scoped>
.news-container {
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  color: #333;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.nav-links a {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

.user-actions {
  display: flex;
}

.user-actions a {
  margin-left: 15px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

.login-btn {
  background-color: #e62828;
  color: white !important;
  padding: 2px 10px;
  border-radius: 2px;
}

.site-header {
  padding: 20px 0;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-placeholder {
  width: 120px;
  height: 40px;
  background-color: #e62828;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 4px;
}

.site-title {
  font-size: 30px;
  font-weight: bold;
  margin-left: 10px;
}

.news-nav {
  background-color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.news-nav a {
  margin-right: 30px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.realtime-news {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.label {
  background-color: #e62828;
  color: white;
  padding: 0 5px;
  margin-right: 10px;
  border-radius: 2px;
}

.news-ticker {
  display: flex;
  overflow: hidden;
}

.news-ticker span {
  margin-right: 20px;
  white-space: nowrap;
}

.main-content {
  display: flex;
  margin-top: 20px;
}

.main-news {
  flex: 2;
  margin-right: 20px;
}

.news-slider {
  position: relative;
  margin-bottom: 20px;
  background-color: #f5f5f5;
}

.news-banner-placeholder {
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
}

.news-details,
.news-highlight,
.news-special {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.news-time,
.news-source {
  color: #999;
  font-size: 12px;
  margin-top: 5px;
}

.side-news {
  flex: 1;
}

.hot-news h3 {
  font-size: 18px;
  border-bottom: 2px solid #e62828;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.hot-news ul {
  list-style: none;
  padding: 0;
}

.hot-news li {
  display: flex;
  margin-bottom: 15px;
}

.news-img-placeholder {
  width: 100px;
  height: 70px;
  background-color: #f5f5f5;
  margin-right: 10px;
}

.news-text {
  font-size: 14px;
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }

  .main-news {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
