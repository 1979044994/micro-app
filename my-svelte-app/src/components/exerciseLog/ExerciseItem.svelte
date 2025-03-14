<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";

  export let exercise;
  export let type;

  const dispatch = createEventDispatcher();

  function edit() {
    dispatch("edit", exercise);
  }

  function remove() {
    dispatch("delete", exercise);
  }

  let showActions = false;
</script>

<div class="exercise-item" on:click={() => (showActions = !showActions)}>
  <div class="exercise-details">
    <h4 class="exercise-name">{exercise.name}</h4>

    {#if type === "无氧运动"}
      <div class="exercise-meta">
        <span>{exercise.sets} 组 × {exercise.reps} 次</span>
        {#if exercise.weight}
          <span class="weight">{exercise.weight} kg</span>
        {/if}
      </div>
    {:else}
      <div class="exercise-meta">
        <span>{exercise.duration} 分钟</span>
        <span class="calories">{exercise.calories} 卡路里</span>
      </div>
    {/if}
  </div>

  {#if showActions}
    <div class="exercise-actions" transition:slide>
      <button class="icon-btn" on:click={edit}>
        <i class="material-icons">edit</i>
      </button>
      <button class="icon-btn" on:click={remove}>
        <i class="material-icons">delete</i>
      </button>
    </div>
  {/if}
</div>

<style>
  .exercise-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
  }

  .exercise-item:last-child {
    border-bottom: none;
  }

  .exercise-details {
    flex-grow: 1;
  }

  .exercise-name {
    margin: 0 0 4px 0;
    font-size: 0.95rem;
    color: var(--text-primary);
  }

  .exercise-meta {
    display: flex;
    gap: 15px;
    font-size: 0.8rem;
    color: var(--text-secondary);
  }

  .weight,
  .calories {
    font-weight: 500;
    color: var(--primary-color);
  }

  .exercise-actions {
    display: flex;
    gap: 8px;
  }

  .icon-btn {
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
    color: var(--text-secondary);
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-btn:hover {
    background-color: #f0f0f0;
    color: var(--primary-color);
  }

  .icon-btn .material-icons {
    font-size: 1rem;
  }
</style>
