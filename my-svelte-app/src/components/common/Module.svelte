<script>
  import { createEventDispatcher } from "svelte";

  export let title = "";
  export let visible = true;
  export let borderColor = "var(--primary-color)";

  const dispatch = createEventDispatcher();

  function toggleVisibility() {
    dispatch("toggleVisibility");
  }
</script>

<section
  class="module"
  class:hidden={!visible}
  style="border-top-color: {borderColor}"
>
  <div class="module-header">
    <h2>{title}</h2>
    <button class="toggle-btn" on:click={toggleVisibility}>
      {visible ? "隐藏" : "显示"}
    </button>
  </div>
  <div class="module-content">
    <slot></slot>
  </div>
</section>

<style>
  .module {
    background-color: var(--background-white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    overflow: hidden;
    margin-bottom: 15px;
    border-top: 4px solid;
  }

  .module:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  .module-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: linear-gradient(to right, var(--primary-light), #f5fff5);
    border-bottom: 1px solid #e0e0e0;
  }

  .module-header h2 {
    margin: 0;
    color: var(--primary-dark);
    font-size: 1.2rem;
  }

  .module-content {
    padding: 15px 20px;
    overflow: hidden;
  }

  .hidden .module-content {
    display: none;
  }

  .toggle-btn {
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 0.8rem;
  }

  .toggle-btn:hover {
    background-color: var(--primary-dark);
  }
</style>
