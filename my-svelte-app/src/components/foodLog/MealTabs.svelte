<script>
  import { createEventDispatcher } from "svelte";

  export let meals = ["早餐", "午餐", "晚餐", "零食"];
  export let activeMeal = "早餐";

  const dispatch = createEventDispatcher();

  function selectMeal(meal) {
    dispatch("select", meal);
  }
</script>

<div class="meal-tabs">
  {#each meals as meal}
    <button
      class="meal-tab {meal === activeMeal ? 'active' : ''}"
      on:click={() => selectMeal(meal)}
    >
      {meal}
    </button>
  {/each}
</div>

<style>
  .meal-tabs {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 15px;
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    padding-bottom: 2px;
  }

  .meal-tabs::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  .meal-tab {
    background: none;
    border: none;
    padding: 8px 15px;
    font-size: 0.9rem;
    cursor: pointer;
    color: var(--text-secondary);
    position: relative;
    white-space: nowrap;
  }

  .meal-tab.active {
    color: var(--primary-color);
    font-weight: 500;
  }

  .meal-tab.active::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
  }
</style>
