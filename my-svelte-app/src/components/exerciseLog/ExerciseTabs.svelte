<script>
  import { createEventDispatcher } from "svelte";

  export let activeType = "无氧运动";

  const dispatch = createEventDispatcher();

  const exerciseTypes = ["无氧运动", "有氧运动"];

  function selectType(type) {
    dispatch("select", type);
  }
</script>

<div class="tabs">
  {#each exerciseTypes as type}
    <button
      class="tab-btn"
      class:active={activeType === type}
      on:click={() => selectType(type)}
    >
      {type}
    </button>
  {/each}
</div>

<style>
  .tabs {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 15px;
  }

  .tab-btn {
    background: none;
    border: none;
    padding: 8px 16px;
    font-size: 0.9rem;
    cursor: pointer;
    position: relative;
    color: var(--text-secondary);
  }

  .tab-btn.active {
    color: var(--primary-color);
    font-weight: 500;
  }

  .tab-btn.active::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
  }

  .tab-btn:hover:not(.active) {
    color: var(--text-primary);
    background-color: #f5f5f5;
  }
</style>
