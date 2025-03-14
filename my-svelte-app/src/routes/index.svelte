<script>
  import VideoPlayer from "../components/VideoPlayer.svelte";

  let currentIndex = 0;
  let videos = [
    {
      id: 1,
      url: "https://assets.mixkit.co/videos/preview/mixkit-spinning-around-the-earth-29351-large.mp4",
      author: "旅行家",
      description: "环游世界的奇妙体验 #旅行 #探险",
    },
    {
      id: 2,
      url: "https://assets.mixkit.co/videos/preview/mixkit-woman-running-under-fall-trees-32960-large.mp4",
      author: "跑步达人",
      description: "秋日晨跑，感受大自然的美好 #健身 #生活方式",
    },
    {
      id: 3,
      url: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-missing-a-basket-shot-13907-large.mp4",
      author: "篮球少女",
      description: "挑战自我，永不放弃 #篮球 #运动",
    },
  ];

  let touchStart = 0;
  let touchEnd = 0;

  function handleTouchStart(e) {
    touchStart = e.changedTouches[0].screenY;
  }

  function handleTouchEnd(e) {
    touchEnd = e.changedTouches[0].screenY;
    if (touchStart - touchEnd > 50) {
      // 向上滑动，下一个视频
      if (currentIndex < videos.length - 1) {
        currentIndex++;
      }
    } else if (touchStart - touchEnd < -50) {
      // 向下滑动，上一个视频
      if (currentIndex > 0) {
        currentIndex--;
      }
    }
  }

  let activeTab = "home";

  function changeTab(tab) {
    activeTab = tab;
  }
</script>

<div
  class="tiktok-app"
  on:touchstart={handleTouchStart}
  on:touchend={handleTouchEnd}
>
  <div class="video-feed">
    <div
      class="video-container"
      style="transform: translateY(-{currentIndex * 100}vh)"
    >
      {#each videos as video, i}
        <div class="video-item">
          <VideoPlayer
            url={video.url}
            playing={i === currentIndex}
            author={video.author}
            description={video.description}
          />
        </div>
      {/each}
    </div>
  </div>

  <!-- 顶部导航栏 -->
  <div class="top-nav">
    <div class="nav-item">
      <i class="fas fa-clock"></i>
    </div>
    <div class="nav-tabs">
      <div
        class="nav-tab"
        class:active={activeTab === "following"}
        on:click={() => changeTab("following")}
      >
        关注
      </div>
      <div
        class="nav-tab"
        class:active={activeTab === "home"}
        on:click={() => changeTab("home")}
      >
        推荐
      </div>
      <div
        class="nav-tab"
        class:active={activeTab === "nearby"}
        on:click={() => changeTab("nearby")}
      >
        附近
      </div>
    </div>
    <div class="nav-item">
      <i class="fas fa-search"></i>
    </div>
  </div>

  <!-- 底部导航栏 -->
  <div class="bottom-nav">
    <div class="nav-btn">
      <i class="fas fa-home"></i>
      <span>首页</span>
    </div>
    <div class="nav-btn">
      <i class="fas fa-compass"></i>
      <span>发现</span>
    </div>
    <div class="nav-btn add-btn">
      <i class="fas fa-plus"></i>
    </div>
    <div class="nav-btn">
      <i class="fas fa-inbox"></i>
      <span>消息</span>
    </div>
    <div class="nav-btn">
      <i class="fas fa-user"></i>
      <span>我</span>
    </div>
  </div>
</div>

<style>
  .tiktok-app {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden;
  }

  .video-feed {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }

  .video-item {
    width: 100%;
    height: 100vh;
  }

  .top-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    color: white;
    z-index: 100;
  }

  .nav-tabs {
    display: flex;
    gap: 20px;
  }

  .nav-tab {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    padding: 5px 10px;
    opacity: 0.7;
  }

  .nav-tab.active {
    opacity: 1;
    font-weight: 600;
    position: relative;
  }

  .nav-tab.active:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background-color: white;
    border-radius: 1px;
  }

  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    z-index: 100;
  }

  .nav-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    padding: 5px 0;
  }

  .nav-btn i {
    font-size: 20px;
  }

  .nav-btn span {
    font-size: 12px;
  }

  .add-btn {
    background-color: #fe2c55;
    width: 45px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    padding: 0;
  }

  .add-btn i {
    font-size: 18px;
  }
</style>
