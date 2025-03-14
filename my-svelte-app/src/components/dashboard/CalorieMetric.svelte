<script>
  export let currentIntake = 0;
  export let dailyGoal = 2000;

  // 进度计算
  $: calorieProgressPercentage = Math.min(
    (currentIntake / dailyGoal) * 100,
    100,
  );
  $: calorieRemaining = dailyGoal - currentIntake;
</script>

<div class="metric-card calorie-metric">
  <h4>今日卡路里</h4>
  <div class="progress-container">
    <div class="progress-stats">
      <span class="current-value">{currentIntake}</span>
      <span class="goal-value">/ {dailyGoal} 卡路里</span>
    </div>
    <div class="progress-bar">
      <div
        class="progress-fill"
        style="width: {calorieProgressPercentage}%"
      ></div>
    </div>
    <div class="remaining">
      <span class="material-icons">restaurant</span>
      <span>还可摄入 {calorieRemaining} 卡路里</span>
    </div>
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
    margin-bottom: 10px;
  }

  .progress-container {
    position: relative;
  }

  .progress-stats {
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
  }

  .current-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-primary);
  }

  .goal-value {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-left: 4px;
  }

  .progress-bar {
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(
      to right,
      var(--primary-light),
      var(--primary-color)
    );
    border-radius: 4px;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .remaining {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .remaining .material-icons {
    font-size: 0.9rem;
    margin-right: 4px;
    color: var(--primary-color);
  }
</style>
