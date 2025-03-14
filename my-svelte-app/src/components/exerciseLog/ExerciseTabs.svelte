<script>
  import { createEventDispatcher } from "svelte";

  export let activeType;

  const dispatch = createEventDispatcher();

  function selectTab(type) {
    dispatch("select", type);
  }
</script>

<div class="exercise-tabs">
  <button
    class="exercise-tab {activeType === '无氧运动' ? 'active' : ''}"
    on:click={() => selectTab("无氧运动")}
  >
    <i class="fas fa-dumbbell"></i>
    <span>无氧运动</span>
  </button>
  <button
    class="exercise-tab {activeType === '有氧运动' ? 'active' : ''}"
    on:click={() => selectTab("有氧运动")}
  >
    <i class="fas fa-running"></i>
    <span>有氧运动</span>
  </button>
</div>

<style>
  .exercise-tabs {
    display: flex;
    background-color: #f5f5f5;
    border-radius: 12px;
    padding: 4px;
    margin-bottom: 20px;
  }

  .exercise-tab {
    flex: 1;
    padding: 12px;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .exercise-tab.active {
    background-color: white;
    color: var(--primary-color);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .exercise-tab i {
    font-size: 1rem;
  }
</style>
