<script>
  import { createEventDispatcher } from "svelte";
  import Module from "../common/Module.svelte";
  import FoodItem from "./FoodItem.svelte";
  import MealTabs from "./MealTabs.svelte";

  export let visible = true;

  const dispatch = createEventDispatcher();

  // 当前选中的餐次
  let activeMeal = "早餐";

  // 餐次食物数据
  const meals = {
    早餐: {
      calories: 420,
      foods: [
        { name: "全麦吐司", amount: "2 片", calories: 180 },
        { name: "煎蛋", amount: "1 个", calories: 90 },
        { name: "牛奶", amount: "250ml", calories: 150 },
      ],
    },
    午餐: {
      calories: 580,
      foods: [],
    },
    晚餐: {
      calories: 450,
      foods: [],
    },
    零食: {
      calories: 0,
      foods: [],
    },
  };

  // 添加食物表单数据
  let showAddForm = false;
  let newFood = { name: "", amount: "", calories: 0 };

  function selectMeal(event) {
    activeMeal = event.detail;
  }

  function editFood(event) {
    console.log("编辑食物:", event.detail);
    // 后续可实现编辑逻辑
  }

  function deleteFood(event) {
    console.log("删除食物:", event.detail);
    // 后续可实现删除逻辑
  }

  function addFoodToMeal() {
    if (!showAddForm) {
      showAddForm = true;
      return;
    }

    // 验证输入
    if (!newFood.name || !newFood.amount || !newFood.calories) {
      alert("请填写完整的食物信息");
      return;
    }

    // 将新食物添加到当前餐次
    meals[activeMeal].foods = [...meals[activeMeal].foods, { ...newFood }];

    // 更新总卡路里
    meals[activeMeal].calories += Number(newFood.calories);

    // 重置表单并隐藏
    newFood = { name: "", amount: "", calories: 0 };
    showAddForm = false;
  }

  function cancelAdd() {
    newFood = { name: "", amount: "", calories: 0 };
    showAddForm = false;
  }
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
</svelte:head>

<Module
  title="今日饮食记录"
  {visible}
  borderColor="var(--accent-color)"
  on:toggleVisibility={() => dispatch("toggleVisibility")}
>
  <MealTabs {activeMeal} on:select={selectMeal} />

  <div class="meal-content">
    <div class="meal-summary">
      <div class="meal-header">
        <h3>{activeMeal}</h3>
        <span class="meal-calories">{meals[activeMeal].calories} 卡路里</span>
      </div>

      <ul class="food-list">
        {#each meals[activeMeal].foods as food}
          <FoodItem {food} on:edit={editFood} on:delete={deleteFood} />
        {/each}

        {#if meals[activeMeal].foods.length === 0}
          <li class="empty-state">还没有添加食物</li>
        {/if}
      </ul>

      {#if showAddForm}
        <div class="add-food-form">
          <div class="form-group">
            <input
              type="text"
              placeholder="食物名称"
              bind:value={newFood.name}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="份量 (如: 100g)"
              bind:value={newFood.amount}
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              placeholder="卡路里"
              bind:value={newFood.calories}
            />
          </div>
          <div class="form-actions">
            <button class="cancel-btn" on:click={cancelAdd}>取消</button>
            <button class="save-btn" on:click={addFoodToMeal}>保存</button>
          </div>
        </div>
      {:else}
        <button class="add-food-btn" on:click={addFoodToMeal}>
          <i class="material-icons">add</i>
          添加食物到{activeMeal}
        </button>
      {/if}
    </div>
  </div>
</Module>

<style>
  .meal-content {
    padding: 5px 0;
  }

  .meal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .meal-header h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--text-primary);
  }

  .meal-calories {
    background-color: var(--primary-light);
    color: var(--primary-dark);
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .food-list {
    list-style: none;
    padding: 0;
    margin: 0 0 15px 0;
    max-height: 300px;
    overflow-y: auto;
    scrollbar-width: thin;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    padding: 5px;
  }

  .empty-state {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.9rem;
    padding: 20px 0;
    font-style: italic;
  }

  .add-food-btn {
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 6px 12px;
    font-size: 0.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .add-food-btn:hover {
    background-color: var(--primary-dark);
  }

  .add-food-btn:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .add-food-btn .material-icons,
  .add-food-btn i {
    font-size: 1rem;
    margin-right: 4px;
  }

  /* 添加食物表单样式 */
  .add-food-form {
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .form-group {
    margin-bottom: 10px;
  }

  .form-group input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
    box-sizing: border-box;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 12px;
  }

  .cancel-btn {
    background-color: #f0f0f0;
    color: #666;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
  }

  .save-btn {
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
  }
</style>
