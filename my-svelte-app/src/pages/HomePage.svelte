<script>
  import Icon from "../components/Icon.svelte";

  // 模拟健康数据
  const dailyStats = {
    calories: 1248,
    caloriesGoal: 2100,
    protein: 65,
    carbs: 142,
    fat: 48,
  };

  // 获取今天日期
  const today = new Date().toLocaleDateString("zh-CN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  // 膳食数据
  const meals = [
    {
      type: "breakfast",
      name: "早餐",
      icon: "food",
      color: "#59b89d",
    },
    {
      type: "lunch",
      name: "午餐",
      icon: "food",
      color: "#ffb86c",
    },
    {
      type: "dinner",
      name: "晚餐",
      icon: "restaurant",
      color: "#ff7d7d",
    },
    {
      type: "snack",
      name: "加餐",
      icon: "apple",
      color: "#6c5dd3",
    },
  ];

  // 健康建议
  const healthTips = [
    { icon: "water", text: "今日饮水量目标: 2000ml" },
    { icon: "steps", text: "步数目标: 10,000步" },
  ];

  // 快捷功能按钮
  const quickActions = [
    { icon: "camera", label: "拍照记录" },
    { icon: "qrcode", label: "扫码" },
    { icon: "search", label: "搜索" },
  ];
</script>

<div class="home-container">
  <div class="header">
    <div class="title-section">
      <h1>今日概览</h1>
      <span class="date">
        <Icon name="calendar" size="18px" color="#8a9099" />
        {today}
      </span>
    </div>
    <div class="header-actions">
      <button class="icon-btn"><Icon name="notification" /></button>
      <button class="icon-btn"><Icon name="settings" /></button>
    </div>
  </div>

  <div class="quick-actions">
    {#each quickActions as action}
      <button class="action-btn">
        <div class="action-icon">
          <Icon name={action.icon} size="24px" color="#59b89d" />
        </div>
        <span>{action.label}</span>
      </button>
    {/each}
  </div>

  <div class="card main-stats">
    <div class="calories-circle">
      <svg viewBox="0 0 36 36" class="circular-chart">
        <path
          class="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          class="circle"
          stroke-dasharray="{(dailyStats.calories / dailyStats.caloriesGoal) *
            100}, 100"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div class="calories-info">
        <span class="calories-value">{dailyStats.calories}</span>
        <span class="calories-label">剩余卡路里</span>
      </div>
    </div>

    <div class="macros">
      <div class="macro">
        <div class="macro-header">
          <Icon name="food" color="#ff7d7d" />
          <span class="macro-value">{dailyStats.protein}g</span>
        </div>
        <div class="macro-bar">
          <div
            class="macro-fill protein"
            style="width: {(dailyStats.protein / 100) * 100}%"
          ></div>
        </div>
        <span class="macro-label">蛋白质</span>
      </div>

      <div class="macro">
        <div class="macro-header">
          <Icon name="food" color="#ffb86c" />
          <span class="macro-value">{dailyStats.carbs}g</span>
        </div>
        <div class="macro-bar">
          <div
            class="macro-fill carbs"
            style="width: {(dailyStats.carbs / 300) * 100}%"
          ></div>
        </div>
        <span class="macro-label">碳水</span>
      </div>

      <div class="macro">
        <div class="macro-header">
          <Icon name="food" color="#6c5dd3" />
          <span class="macro-value">{dailyStats.fat}g</span>
        </div>
        <div class="macro-bar">
          <div
            class="macro-fill fat"
            style="width: {(dailyStats.fat / 70) * 100}%"
          ></div>
        </div>
        <span class="macro-label">脂肪</span>
      </div>
    </div>
  </div>

  <div class="section-header">
    <h2>
      <Icon name="food" size="20px" />
      <span>今日膳食</span>
    </h2>
    <span class="view-all">全部 <Icon name="forward" size="16px" /></span>
  </div>

  <div class="meals">
    {#each meals as meal}
      <div class="card meal">
        <div class="meal-icon" style="color: {meal.color}">
          <Icon name={meal.icon} />
        </div>
        <div class="meal-info">
          <h3>{meal.name}</h3>
          <p>添加食物</p>
        </div>
        <div class="meal-action">
          <Icon name="add" />
        </div>
      </div>
    {/each}
  </div>

  <div class="health-tips">
    {#each healthTips as tip}
      <div class="card health-tip">
        <Icon name={tip.icon} />
        <span>{tip.text}</span>
      </div>
    {/each}
  </div>

  <div class="card quick-add">
    <Icon name="addCircle" />
    <span>快速记录</span>
  </div>
</div>

<style>
  .home-container {
    padding: 0 16px;
  }

  .header {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title-section {
    flex: 1;
  }

  .header-actions {
    display: flex;
    gap: 8px;
  }

  .icon-btn {
    background: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    color: #2c3e50;
    font-size: 16px;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.5px;
  }

  .date {
    color: #8a9099;
    font-size: 14px;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin: 24px 0 16px;
  }

  .main-stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .calories-circle {
    position: relative;
    width: 180px;
    height: 180px;
    margin-bottom: 20px;
  }

  .circular-chart {
    display: block;
    width: 100%;
    height: 100%;
  }

  .circle-bg {
    fill: none;
    stroke: #eee;
    stroke-width: 2.8;
  }

  .circle {
    fill: none;
    stroke: #59b89d;
    stroke-width: 2.8;
    stroke-linecap: round;
  }

  .calories-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .calories-value {
    display: block;
    font-size: 36px;
    font-weight: 700;
    color: #333;
  }

  .calories-label {
    font-size: 14px;
    color: #8a9099;
  }

  .macros {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .macro {
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  .macro-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }

  .macro-value {
    font-weight: 600;
  }

  .macro-bar {
    height: 6px;
    background-color: #f0f0f0;
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .macro-fill {
    height: 100%;
    border-radius: 3px;
  }

  .protein {
    background-color: #ff7d7d;
  }

  .carbs {
    background-color: #ffb86c;
  }

  .fat {
    background-color: #6c5dd3;
  }

  .macro-label {
    font-size: 12px;
    color: #8a9099;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 24px;
  }

  .section-header h2 {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .view-all {
    color: #8a9099;
    font-size: 14px;
  }

  .meals {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .meal {
    display: flex;
    align-items: center;
  }

  .meal-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(89, 184, 157, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    font-size: 18px;
  }

  .meal-info {
    flex: 1;
  }

  .meal-info h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }

  .meal-info p {
    margin: 3px 0 0;
    color: #8a9099;
    font-size: 14px;
  }

  .meal-action {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
  }

  .health-tips {
    display: flex;
    gap: 12px;
    margin-top: 16px;
    overflow-x: auto;
    padding: 4px 0;
  }

  .health-tip {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    flex-shrink: 0;
    min-width: 200px;
    gap: 12px;
    color: #59b89d;
    font-weight: 500;
    font-size: 14px;
  }

  .health-tip i {
    font-size: 18px;
  }

  .quick-add {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    padding: 14px;
    font-weight: 600;
    color: #59b89d;
    cursor: pointer;
  }

  .quick-add i {
    margin-right: 8px;
  }

  .quick-actions {
    display: flex;
    justify-content: space-around;
    margin: 8px 0 16px;
  }

  .action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    color: #59b89d;
    font-size: 12px;
    gap: 6px;
  }

  .action-icon {
    background-color: #f0f9f6;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .action-btn i {
    font-size: 20px;
    background-color: #f0f9f6;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
