<script>
  import { createEventDispatcher } from "svelte";
  import Module from "../common/Module.svelte";
  import ExerciseItem from "./ExerciseItem.svelte";
  import ExerciseTabs from "./ExerciseTabs.svelte";

  export let visible = true;

  const dispatch = createEventDispatcher();

  // 当前选择的运动类型
  let activeType = "无氧运动";

  // 运动数据
  const exercises = {
    无氧运动: [
      { name: "卧推", sets: 3, reps: 12, weight: 60 },
      { name: "深蹲", sets: 4, reps: 10, weight: 80 },
    ],
    有氧运动: [
      { name: "跑步", duration: 30, calories: 320 },
      { name: "骑行", duration: 45, calories: 400 },
    ],
  };

  // 新增运动表单数据
  let showAddForm = false;
  let newExercise = {};

  // 重置新运动表单数据
  function resetNewExercise() {
    if (activeType === "无氧运动") {
      newExercise = { name: "", sets: 3, reps: 10, weight: "" };
    } else {
      newExercise = { name: "", duration: 30, calories: 0 };
    }
  }

  // 初始化表单数据
  resetNewExercise();

  function selectType(event) {
    activeType = event.detail;
    resetNewExercise();
    showAddForm = false;
  }

  function editExercise(event) {
    console.log("编辑运动:", event.detail);
    // 后续可实现编辑逻辑
  }

  function deleteExercise(event) {
    const exerciseToRemove = event.detail;
    exercises[activeType] = exercises[activeType].filter(
      (ex) => ex !== exerciseToRemove,
    );
  }

  function addExercise() {
    if (!showAddForm) {
      showAddForm = true;
      return;
    }

    // 验证输入
    if (!newExercise.name) {
      alert("请输入运动名称");
      return;
    }

    if (activeType === "无氧运动") {
      if (!newExercise.sets || !newExercise.reps) {
        alert("请输入组数和次数");
        return;
      }

      // 修复: 处理空字符串的weight，转换为数字
      if (newExercise.weight === "") {
        newExercise.weight = 0;
      } else {
        // 确保weight是数字类型
        newExercise.weight = Number(newExercise.weight);
      }
    } else {
      if (!newExercise.duration || !newExercise.calories) {
        alert("请输入时长和卡路里");
        return;
      }

      // 确保是数字类型
      newExercise.duration = Number(newExercise.duration);
      newExercise.calories = Number(newExercise.calories);
    }

    // 添加新运动
    exercises[activeType] = [...exercises[activeType], { ...newExercise }];

    // 重置表单并隐藏
    resetNewExercise();
    showAddForm = false;
  }

  function cancelAdd() {
    resetNewExercise();
    showAddForm = false;
  }
</script>

<Module
  title="今日运动记录"
  {visible}
  borderColor="var(--accent-color)"
  on:toggleVisibility={() => dispatch("toggleVisibility")}
>
  <ExerciseTabs {activeType} on:select={selectType} />

  <div class="exercise-content">
    <div class="exercise-summary">
      <div class="exercise-header">
        <h3>{activeType}</h3>
        {#if activeType === "有氧运动"}
          <span class="total-calories">
            {exercises[activeType].reduce((sum, ex) => sum + ex.calories, 0)} 卡路里
          </span>
        {/if}
      </div>

      <ul class="exercise-list">
        {#each exercises[activeType] as exercise}
          <ExerciseItem
            {exercise}
            type={activeType}
            on:edit={editExercise}
            on:delete={deleteExercise}
          />
        {/each}

        {#if exercises[activeType].length === 0}
          <li class="empty-state">还没有添加{activeType}</li>
        {/if}
      </ul>

      {#if showAddForm}
        <div class="add-exercise-form">
          <div class="form-group">
            <input
              type="text"
              placeholder="运动名称"
              bind:value={newExercise.name}
            />
          </div>

          {#if activeType === "无氧运动"}
            <div class="form-row">
              <div class="form-group half">
                <label for="exercise-sets">组数</label>
                <input
                  id="exercise-sets"
                  type="number"
                  placeholder="组数"
                  bind:value={newExercise.sets}
                />
              </div>
              <div class="form-group half">
                <label for="exercise-reps">次数</label>
                <input
                  id="exercise-reps"
                  type="number"
                  placeholder="每组次数"
                  bind:value={newExercise.reps}
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exercise-weight">重量 (kg)</label>
              <input
                id="exercise-weight"
                type="number"
                placeholder="重量 (可选)"
                bind:value={newExercise.weight}
              />
            </div>
          {:else}
            <div class="form-row">
              <div class="form-group half">
                <label for="exercise-duration">时长 (分钟)</label>
                <input
                  id="exercise-duration"
                  type="number"
                  placeholder="分钟"
                  bind:value={newExercise.duration}
                />
              </div>
              <div class="form-group half">
                <label for="exercise-calories">消耗卡路里</label>
                <input
                  id="exercise-calories"
                  type="number"
                  placeholder="卡路里"
                  bind:value={newExercise.calories}
                />
              </div>
            </div>
          {/if}

          <div class="form-actions">
            <button class="cancel-btn" on:click={cancelAdd}>取消</button>
            <button class="save-btn" on:click={addExercise}>保存</button>
          </div>
        </div>
      {:else}
        <button class="add-exercise-btn" on:click={addExercise}>
          <i class="material-icons">add</i>
          添加{activeType}
        </button>
      {/if}
    </div>
  </div>
</Module>

<style>
  .exercise-content {
    padding: 5px 0;
  }

  .exercise-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .exercise-header h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--text-primary);
  }

  .total-calories {
    background-color: var(--primary-light);
    color: var(--primary-dark);
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .exercise-list {
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

  .add-exercise-btn {
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

  .add-exercise-btn:hover {
    background-color: var(--primary-dark);
  }

  .add-exercise-btn:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .add-exercise-btn i {
    font-size: 1rem;
    margin-right: 4px;
  }

  /* 添加运动表单样式 */
  .add-exercise-form {
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .form-group {
    margin-bottom: 10px;
  }

  .form-row {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  .form-group.half {
    flex: 1;
  }

  .form-group label {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 4px;
    color: var(--text-secondary);
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
