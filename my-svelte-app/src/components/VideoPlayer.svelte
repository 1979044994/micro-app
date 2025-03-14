<script>
  import { onMount } from "svelte";

  export let url;
  export let playing = false;
  export let author = "用户名称";
  export let description = "这是一条有趣的视频描述 #热门话题";

  let video;
  let loaded = false;
  let currentTime = 0;
  let duration = 0;
  let volume = 1;
  let isMuted = false;
  let isFullscreen = false;
  let showControls = true;
  let likeCount = Math.floor(Math.random() * 100000);
  let commentCount = Math.floor(Math.random() * 10000);
  let shareCount = Math.floor(Math.random() * 5000);
  let isLiked = false;
  let controlsTimeout;

  onMount(() => {
    if (video) {
      video.addEventListener("loadeddata", () => {
        loaded = true;
        duration = video.duration;
        if (playing) {
          playVideo();
        }
      });

      video.addEventListener("timeupdate", () => {
        currentTime = video.currentTime;
      });

      // 点击视频区域暂停/播放
      video.addEventListener("click", togglePlay);

      // 自动隐藏控制栏
      document.addEventListener("mousemove", showControlsTemporarily);
    }

    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => {});
        video.removeEventListener("timeupdate", () => {});
        video.removeEventListener("click", togglePlay);
      }
      document.removeEventListener("mousemove", showControlsTemporarily);
      clearTimeout(controlsTimeout);
    };
  });

  $: if (playing && loaded) {
    playVideo();
  } else if (!playing && loaded) {
    pauseVideo();
  }

  function playVideo() {
    if (video && loaded) {
      video.play().catch((err) => console.log("播放失败:", err));
    }
  }

  function pauseVideo() {
    if (video && loaded) {
      video.pause();
    }
  }

  function togglePlay() {
    playing = !playing;
  }

  function toggleLike() {
    isLiked = !isLiked;
    likeCount += isLiked ? 1 : -1;
  }

  function toggleMute() {
    isMuted = !isMuted;
    video.muted = isMuted;
  }

  function setVideoTime(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * duration;
  }

  function setVolume(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    volume = (e.clientY - rect.top) / rect.height;
    volume = 1 - Math.max(0, Math.min(1, volume));
    video.volume = volume;
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        isFullscreen = true;
      });
    } else {
      document.exitFullscreen().then(() => {
        isFullscreen = false;
      });
    }
  }

  function showControlsTemporarily() {
    showControls = true;
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(() => {
      showControls = false;
    }, 3000);
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  // 模拟视频（真实环境请使用实际视频URL）
  const placeholderVideos = [
    "https://assets.mixkit.co/videos/preview/mixkit-spinning-around-the-earth-29351-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-woman-running-under-fall-trees-32960-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-young-woman-missing-a-basket-shot-13907-large.mp4",
  ];

  // 随机选择一个占位视频
  const videoSrc =
    url ||
    placeholderVideos[Math.floor(Math.random() * placeholderVideos.length)];
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
</svelte:head>

<div class="tiktok-player">
  <div class="video-container">
    <video
      bind:this={video}
      src={videoSrc}
      loop
      muted={isMuted}
      playsinline
      webkit-playsinline="true"
    ></video>

    {#if !loaded}
      <div class="loading">
        <div class="spinner"></div>
      </div>
    {/if}

    <!-- 抖音风格覆盖层 -->
    <div
      class="overlay"
      class:controls-visible={showControls}
      on:click={togglePlay}
    >
      <!-- 中间播放按钮 -->
      {#if !playing}
        <div class="play-icon">
          <i class="fas fa-play"></i>
        </div>
      {/if}

      <!-- 右侧操作按钮 -->
      <div class="action-btns">
        <div class="action-btn">
          <div class="avatar">
            <img
              src="https://randomuser.me/api/portraits/women/{Math.floor(
                Math.random() * 50,
              )}.jpg"
              alt="user avatar"
            />
            <div class="follow-btn">
              <i class="fas fa-plus"></i>
            </div>
          </div>
        </div>

        <div class="action-btn" on:click|stopPropagation={toggleLike}>
          <i class="fas fa-heart" class:liked={isLiked}></i>
          <span>{likeCount}</span>
        </div>

        <div class="action-btn">
          <i class="fas fa-comment-dots"></i>
          <span>{commentCount}</span>
        </div>

        <div class="action-btn">
          <i class="fas fa-share"></i>
          <span>{shareCount}</span>
        </div>

        <div class="action-btn">
          <div class="record-disk">
            <img
              src="https://randomuser.me/api/portraits/men/{Math.floor(
                Math.random() * 50,
              )}.jpg"
              alt="music"
            />
          </div>
        </div>
      </div>

      <!-- 底部信息和进度条 -->
      <div class="bottom-info">
        <div class="user-info">
          <h3>@{author}</h3>
          <p>{description}</p>
        </div>

        <!-- 进度条 -->
        <div class="progress-container" on:click|stopPropagation={setVideoTime}>
          <div class="progress-bar">
            <div
              class="progress-fill"
              style="width: {(currentTime / duration) * 100}%"
            ></div>
          </div>
          <div class="time-info">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div class="bottom-controls">
          <button on:click|stopPropagation={toggleMute}>
            <i class="fas {isMuted ? 'fa-volume-mute' : 'fa-volume-up'}"></i>
          </button>
          <button on:click|stopPropagation={toggleFullscreen}>
            <i class="fas {isFullscreen ? 'fa-compress' : 'fa-expand'}"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .tiktok-player {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
  }

  .video-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    animation: spin 1s linear infinite;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .controls-visible {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
  }

  .action-btns {
    position: absolute;
    right: 10px;
    bottom: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    margin-bottom: 15px;
  }

  .avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid white;
    object-fit: cover;
  }

  .follow-btn {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fe2c55;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }

  .action-btn i {
    font-size: 28px;
  }

  .action-btn span {
    font-size: 12px;
  }

  .liked {
    color: #fe2c55;
  }

  .record-disk {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid white;
    animation: rotate 5s linear infinite;
  }

  .record-disk img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bottom-info {
    padding: 20px;
    margin-top: auto;
  }

  .user-info {
    margin-bottom: 15px;
  }

  .user-info h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }

  .user-info p {
    margin: 5px 0 0 0;
    font-size: 14px;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .progress-container {
    margin: 15px 0;
  }

  .progress-bar {
    height: 4px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;
  }

  .progress-fill {
    height: 100%;
    background-color: white;
  }

  .time-info {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 5px;
  }

  .bottom-controls {
    display: flex;
    justify-content: space-between;
  }

  .bottom-controls button {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    padding: 5px 10px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* 移动设备适配 */
  @media (max-width: 768px) {
    .action-btns {
      right: 5px;
      bottom: 130px;
    }

    .action-btn i {
      font-size: 24px;
    }

    .avatar,
    .record-disk {
      width: 40px;
      height: 40px;
    }
  }
</style>
