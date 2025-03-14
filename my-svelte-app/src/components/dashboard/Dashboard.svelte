<script>
  import { createEventDispatcher } from "svelte";
  import Module from "../common/Module.svelte";
  import CalorieMetric from "./CalorieMetric.svelte";
  import NutritionChart from "./NutritionChart.svelte";
  import UserInfo from "./UserInfo.svelte";
  import WaterMetric from "./WaterMetric.svelte";

  export let user;
  export let visible = true;

  const dispatch = createEventDispatcher();

  // 营养素分布数据
  let nutritionDistribution = {
    carbs: 45, // 百分比
    protein: 30,
    fat: 25,
  };

  // 添加水杯的函数
  function addWater() {
    if (user.waterIntake < user.waterGoal) {
      user.waterIntake += 1;
    }
  }
</script>

<Module
  title="用户仪表盘"
  {visible}
  borderColor="var(--primary-color)"
  on:toggleVisibility={() => dispatch("toggleVisibility")}
>
  <UserInfo {user} />

  <div class="dashboard-metrics">
    <CalorieMetric
      currentIntake={user.currentIntake}
      dailyGoal={user.dailyGoal}
    />

    <WaterMetric
      waterIntake={user.waterIntake}
      waterGoal={user.waterGoal}
      on:addWater={addWater}
    />
  </div>

  <NutritionChart {nutritionDistribution} />

  <div class="action-bar">
    <button class="action-button primary">
      <span class="material-icons">add_circle_outline</span>
      添加食物
    </button>
    <button class="action-button">
      <span class="material-icons">insert_chart</span>
      查看报告
    </button>
  </div>
</Module>

<style>
  .dashboard-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 15px;
  }

  .action-bar {
    display: flex;
    gap: 8px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }

  .action-button {
    background-color: #f0f0f0;
    border: none;
    border-radius: 20px;
    padding: 6px 12px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .action-button.primary {
    background-color: var(--primary-color);
    color: white;
  }

  .action-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .action-button:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .action-button .material-icons {
    font-size: 1rem;
    margin-right: 4px;
  }

  .action-button.primary .material-icons {
    color: white;
  }

  /* 媒体查询 */
  @media (min-width: 768px) {
    .action-bar {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
  }

  @media (min-width: 992px) {
    .dashboard-metrics {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
