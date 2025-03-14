<script>
  import { createEventDispatcher } from "svelte";
  import { fade, fly, slide } from "svelte/transition";
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
  let containerElement;
  let isScrolling = false;

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

      // 处理空字符串的weight，转换为数字
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

<div class="exercise-page">
  <div class="page-header">
    <button class="back-btn">
      <i class="fas fa-arrow-left"></i>
    </button>
    <h2>运动记录</h2>
    <button class="action-icon">
      <i class="fas fa-ellipsis-v"></i>
    </button>
  </div>

  <!-- 运动类型标签 -->
  <div class="exercise-tabs-container">
    <ExerciseTabs {activeType} on:select={selectType} />
  </div>

  <!-- 运动列表 -->
  <div class="exercise-list-container" bind:this={containerElement}>
    <div class="exercise-summary">
      <h3>
        {#if activeType === "无氧运动"}
          <i class="fas fa-dumbbell"></i>
        {:else}
          <i class="fas fa-running"></i>
        {/if}
        {activeType}
      </h3>
      {#if activeType === "有氧运动"}
        <span class="total-calories" in:fly={{ y: -20, duration: 300 }}>
          <i class="fas fa-fire-flame-curved"></i>
          {exercises[activeType].reduce((sum, ex) => sum + ex.calories, 0)} 卡路里
        </span>
      {/if}
    </div>

    <ul class="exercise-list" class:empty={exercises[activeType].length === 0}>
      {#each exercises[activeType] as exercise, i (exercise.name)}
        <li in:fly={{ y: 20, delay: i * 100, duration: 300 }}>
          <ExerciseItem
            {exercise}
            type={activeType}
            on:edit={editExercise}
            on:delete={deleteExercise}
          />
        </li>
      {:else}
        <li class="empty-state" in:fade={{ duration: 300 }}>
          <i class="fas fa-heart-pulse"></i>
          <p>还没有添加{activeType}</p>
          <span>开始记录你的健身进度吧</span>
        </li>
      {/each}
    </ul>

    <!-- 添加运动区域 -->
    <div class="action-container">
      {#if showAddForm}
        <div class="add-exercise-form" in:slide={{ duration: 300 }}>
          <div class="form-header">
            <h4>添加{activeType}</h4>
            <button class="close-btn" on:click={cancelAdd}>
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="form-group">
            <div class="input-with-icon">
              <i class="fas fa-clipboard"></i>
              <input
                type="text"
                placeholder="运动名称"
                bind:value={newExercise.name}
              />
            </div>
          </div>

          {#if activeType === "无氧运动"}
            <div class="form-row">
              <div class="form-group half">
                <label for="exercise-sets">
                  <i class="fas fa-layer-group"></i> 组数
                </label>
                <input
                  id="exercise-sets"
                  type="number"
                  placeholder="组数"
                  bind:value={newExercise.sets}
                />
              </div>
              <div class="form-group half">
                <label for="exercise-reps">
                  <i class="fas fa-repeat"></i> 次数
                </label>
                <input
                  id="exercise-reps"
                  type="number"
                  placeholder="每组次数"
                  bind:value={newExercise.reps}
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exercise-weight">
                <i class="fas fa-weight-hanging"></i> 重量 (kg)
              </label>
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
                <label for="exercise-duration">
                  <i class="fas fa-clock"></i> 时长 (分钟)
                </label>
                <input
                  id="exercise-duration"
                  type="number"
                  placeholder="分钟"
                  bind:value={newExercise.duration}
                />
              </div>
              <div class="form-group half">
                <label for="exercise-calories">
                  <i class="fas fa-fire"></i> 消耗卡路里
                </label>
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
            <button class="save-btn" on:click={addExercise}>
              <i class="fas fa-check"></i> 保存
            </button>
          </div>
        </div>
      {:else}
        <button class="add-exercise-btn" on:click={addExercise}>
          <i class="fas fa-plus-circle"></i>
          添加{activeType}
        </button>
      {/if}
    </div>
  </div>
</div>

<style>
  .exercise-page {
    padding: 15px;
  }

  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .page-header h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  .back-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.9);
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .action-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .exercise-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
  }

  .exercise-summary h3 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .exercise-summary h3 i {
    color: var(--accent-color);
    font-size: 1.1rem;
  }

  .total-calories {
    background: linear-gradient(
      120deg,
      var(--primary-color),
      var(--accent-color)
    );
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    box-shadow: 0 3px 8px rgba(255, 87, 34, 0.2);
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .total-calories i {
    font-size: 0.8rem;
  }

  .exercise-list {
    list-style: none;
    padding: 0;
    margin: 0 0 15px 0;
    max-height: 350px;
    overflow-y: auto;
    scrollbar-width: thin;
    border-radius: 12px;
    padding: 5px;
    background: rgba(250, 250, 250, 0.8);
    backdrop-filter: blur(10px);
    box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;
  }

  .exercise-list.empty {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .empty-state {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.95rem;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .empty-state i {
    font-size: 2rem;
    color: var(--accent-color);
    opacity: 0.7;
    margin-bottom: 5px;
  }

  .empty-state p {
    margin: 0;
    font-weight: 500;
    color: var(--text-primary);
  }

  .empty-state span {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  .action-container {
    position: relative;
    margin-top: 10px;
  }

  .add-exercise-btn {
    background: linear-gradient(
      135deg,
      var(--primary-color),
      var(--primary-dark)
    );
    color: white;
    border: none;
    border-radius: 25px;
    padding: 12px 20px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(76, 175, 80, 0.25);
    width: 100%;
  }

  .add-exercise-btn:hover {
    box-shadow: 0 6px 15px rgba(76, 175, 80, 0.35);
    transform: translateY(-2px);
  }

  /* 添加运动表单样式 */
  .add-exercise-form {
    background: white;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
  }

  .form-header h4 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--text-primary);
  }

  .close-btn {
    background: none;
    border: none;
    color: var(--text-secondary);
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    min-height: 36px;
    min-width: 36px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .input-with-icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-with-icon i {
    position: absolute;
    left: 12px;
    color: var(--text-secondary);
  }

  .input-with-icon input {
    padding-left: 35px;
  }

  .form-row {
    display: flex;
    gap: 12px;
    margin-bottom: 15px;
  }

  .form-group.half {
    flex: 1;
  }

  .form-group label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    margin-bottom: 6px;
    color: var(--text-primary);
    font-weight: 500;
  }

  .form-group label i {
    color: var(--primary-color);
    font-size: 0.9rem;
  }

  .form-group input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 0.95rem;
    box-sizing: border-box;
    transition: all 0.2s;
    background: #f9f9f9;
  }

  .form-group input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.1);
    outline: none;
    background: white;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 20px;
  }

  .cancel-btn {
    background-color: #f5f5f5;
    color: #555;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s;
    min-height: 40px;
  }

  .save-btn {
    background: linear-gradient(
      135deg,
      var(--primary-color),
      var(--primary-dark)
    );
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 3px 8px rgba(76, 175, 80, 0.2);
    min-height: 40px;
  }

  /* 响应式调整 */
  @media (max-width: 500px) {
    .form-row {
      flex-direction: column;
      gap: 10px;
    }
  }
</style>
