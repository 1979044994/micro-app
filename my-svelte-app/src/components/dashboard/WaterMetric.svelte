<script>
  import { createEventDispatcher } from "svelte";

  export let waterIntake = 0;
  export let waterGoal = 8;

  const dispatch = createEventDispatcher();

  // 进度计算
  $: waterPercentage = Math.min((waterIntake / waterGoal) * 100, 100);
  $: remainingCups = waterGoal - waterIntake;

  // 创建水杯数组用于渲染
  $: waterBottles = Array(waterGoal)
    .fill()
    .map((_, i) => ({
      filled: i < waterIntake,
      index: i,
    }));

  // 动画控制
  let isAnimating = false;
  let lastFilledIndex = -1;

  function addWater() {
    if (waterIntake < waterGoal && !isAnimating) {
      isAnimating = true;
      lastFilledIndex = waterIntake;

      dispatch("addWater");

      // 动画结束后重置状态
      setTimeout(() => {
        isAnimating = false;
      }, 1000);
    }
  }
</script>

<div class="metric-card water-metric">
  <h4>今日饮水量</h4>

  <div class="water-bottles-grid">
    {#each waterBottles as bottle, i}
      <div class="bottle-container" title={bottle.filled ? "已喝" : "未喝"}>
        <div class="bottle-wrapper">
          <div
            class="bottle {bottle.filled ? 'filled' : ''} {isAnimating &&
            i === lastFilledIndex
              ? 'animating'
              : ''}"
          >
            <div class="bottle-cap"></div>
            <div class="bottle-neck"></div>
            <div class="bottle-body">
              <div class="water-fill"></div>
              <div class="bottle-highlight"></div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="water-progress">
    <div class="progress-text">
      <span class="current-value">{waterIntake}</span>
      <span class="separator">/</span>
      <span class="goal-value">{waterGoal}</span>
      <span class="unit">杯</span>
    </div>

    <div class="progress-bar">
      <div class="progress-fill" style="width: {waterPercentage}%"></div>
    </div>
  </div>

  <div class="water-info">
    <div class="info-text">
      {#if remainingCups > 0}
        <p>再喝 {remainingCups} 杯可达成今日目标</p>
      {:else}
        <p>恭喜！已达成今日饮水目标</p>
      {/if}

      <p class="health-tip">每天喝足8杯水有助于保持水分平衡</p>
    </div>

    <button
      class="add-water-btn"
      on:click={addWater}
      disabled={waterIntake >= waterGoal || isAnimating}
    >
      <span class="material-icons">opacity</span>
      喝一杯水
    </button>
  </div>
</div>

<style>
  .metric-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .metric-card h4 {
    margin-top: 0;
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin-bottom: 15px;
  }

  /* 水杯网格布局 */
  .water-bottles-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 15px;
  }

  /* 水杯容器 */
  .bottle-container {
    display: flex;
    justify-content: center;
    padding: 5px;
    transition: transform 0.2s ease;
    cursor: pointer;
  }

  .bottle-container:hover {
    transform: translateY(-2px);
  }

  .bottle-wrapper {
    width: 40px;
    height: 70px;
    position: relative;
  }

  /* 梯形水杯设计 */
  .bottle {
    width: 100%;
    height: 100%;
    position: relative;
  }

  /* 瓶盖 */
  .bottle-cap {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 5px;
    background-color: #bdbdbd;
    border-radius: 2px 2px 0 0;
    z-index: 2;
  }

  /* 瓶颈 */
  .bottle-neck {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 10px;
    background-color: rgba(225, 245, 254, 0.7);
    border: 1px solid #81d4fa;
    z-index: 1;
  }

  /* 梯形瓶身 */
  .bottle-body {
    position: absolute;
    top: 15px;
    left: 0;
    width: 100%;
    height: calc(100% - 15px);
    background-color: rgba(225, 245, 254, 0.3);
    border: 1px solid #81d4fa;
    border-radius: 2px;
    overflow: hidden;
    clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
  }

  /* 瓶身高光 */
  .bottle-highlight {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      110deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.2) 25%,
      rgba(255, 255, 255, 0) 50%
    );
    pointer-events: none;
  }

  /* 水填充效果 */
  .water-fill {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: linear-gradient(to bottom, #4fc3f7, #0288d1);
    transition: height 0.5s ease-out;
  }

  /* 已填充的瓶子 */
  .bottle.filled .water-fill {
    height: 100%;
  }

  /* 填充动画 */
  .bottle.animating .water-fill {
    animation: fillBottle 1s forwards;
  }

  @keyframes fillBottle {
    0% {
      height: 0%;
    }
    70% {
      height: 110%;
    }
    90% {
      height: 95%;
    }
    100% {
      height: 100%;
    }
  }

  /* 进度条 */
  .water-progress {
    margin: 15px 0;
  }

  .progress-text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }

  .current-value {
    font-size: 1.4rem;
    font-weight: bold;
    color: #03a9f4;
  }

  .separator {
    margin: 0 3px;
    color: #bdbdbd;
  }

  .goal-value {
    font-size: 1.2rem;
    color: #9e9e9e;
  }

  .unit {
    font-size: 0.9rem;
    color: #9e9e9e;
    margin-left: 2px;
  }

  .progress-bar {
    height: 6px;
    background-color: #e0e0e0;
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(to right, #03a9f4, #4fc3f7);
    border-radius: 3px;
    transition: width 0.5s ease;
  }

  /* 信息区域和按钮 */
  .water-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }

  .info-text p {
    margin: 0 0 5px;
    font-size: 0.9rem;
    color: var(--text-primary);
  }

  .health-tip {
    color: var(--text-secondary) !important;
    font-size: 0.8rem !important;
    font-style: italic;
  }

  .add-water-btn {
    background: linear-gradient(to right, #03a9f4, #29b6f6);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 15px;
    font-size: 0.85rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    box-shadow: 0 3px 5px rgba(3, 169, 244, 0.3);
  }

  .add-water-btn:hover {
    background: linear-gradient(to right, #0288d1, #03a9f4);
    box-shadow: 0 5px 10px rgba(3, 169, 244, 0.4);
    transform: translateY(-2px);
  }

  .add-water-btn:active {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(3, 169, 244, 0.3);
  }

  .add-water-btn:disabled {
    background: linear-gradient(to right, #b3e5fc, #81d4fa);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.7;
  }

  .add-water-btn .material-icons {
    font-size: 1.1rem;
    margin-right: 5px;
  }

  /* 响应式调整 */
  @media (max-width: 500px) {
    .water-bottles-grid {
      grid-template-columns: repeat(4, 1fr);
    }

    .water-info {
      flex-direction: column;
    }

    .info-text {
      text-align: center;
      margin-bottom: 10px;
    }

    .add-water-btn {
      width: 100%;
    }

    .bottle-wrapper {
      width: 35px;
      height: 60px;
    }
  }
</style>
