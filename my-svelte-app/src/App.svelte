<script>
  import Header from "./components/common/Header.svelte";
  import Dashboard from "./components/dashboard/Dashboard.svelte";
  import ExerciseLog from "./components/exerciseLog/ExerciseLog.svelte";
  import FoodLog from "./components/foodLog/FoodLog.svelte";
  import FoodSearch from "./components/foodSearch/FoodSearch.svelte";
  import ModulesContainer from "./components/layout/ModulesContainer.svelte";

  // 用户数据(后期可考虑移到stores中)
  let user = {
    name: "张明",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    dailyGoal: 2000, // 卡路里
    currentIntake: 1450,
    waterIntake: 6, // 杯
    waterGoal: 8,
    streak: 7, // 连续记录天数
  };

  // 各个模块的可见性控制
  let moduleVisibility = {
    dashboard: true,
    foodLog: true,
    foodSearch: true,
    exerciseLog: true,
  };

  // 切换模块可见性的函数
  function toggleModule(moduleName) {
    moduleVisibility[moduleName] = !moduleVisibility[moduleName];
  }
</script>

<main class="diet-app">
  <Header />
  <ModulesContainer>
    <Dashboard
      {user}
      visible={moduleVisibility.dashboard}
      on:toggleVisibility={() => toggleModule("dashboard")}
    />
    <FoodLog
      visible={moduleVisibility.foodLog}
      on:toggleVisibility={() => toggleModule("foodLog")}
    />
    <FoodSearch
      visible={moduleVisibility.foodSearch}
      on:toggleVisibility={() => toggleModule("foodSearch")}
    />
    <ExerciseLog
      visible={moduleVisibility.exerciseLog}
      on:toggleVisibility={() => toggleModule("exerciseLog")}
    />
  </ModulesContainer>
</main>

<style>
  /* 保留基本样式，其他移到global.css */
  .diet-app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
  }

  :global(:root) {
    --primary-color: #4caf50;
    --primary-dark: #388e3c;
    --primary-light: #c8e6c9;
    --accent-color: #ff9800;
    --text-primary: #212121;
    --text-secondary: #757575;
    --background-light: #f5f5f5;
  }

  :global(body) {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--background-light);
  }
</style>
