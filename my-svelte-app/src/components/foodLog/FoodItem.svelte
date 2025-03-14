<script>
  import { createEventDispatcher } from "svelte";

  export let food = {
    name: "",
    amount: "",
    calories: 0,
  };

  const dispatch = createEventDispatcher();

  function editFood() {
    dispatch("edit", food);
  }

  function deleteFood() {
    dispatch("delete", food);
  }
</script>

<li class="food-item">
  <div class="food-info">
    <div class="food-name">{food.name}</div>
    <div class="food-details">{food.amount} - {food.calories}卡</div>
  </div>
  <div class="food-actions">
    <button class="icon-btn" on:click={editFood}>
      <span class="material-icons">edit</span>
    </button>
    <button class="icon-btn" on:click={deleteFood}>
      <span class="material-icons">delete</span>
    </button>
  </div>
</li>

<style>
  .food-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .food-item:last-child {
    border-bottom: none;
  }

  .food-info {
    flex: 1;
  }

  .food-name {
    font-weight: 500;
    font-size: 0.9rem;
  }

  .food-details {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-top: 2px;
  }

  .food-actions {
    display: flex;
    gap: 4px;
  }

  .icon-btn {
    background: none;
    border: none;
    padding: 4px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
  }

  .icon-btn:hover {
    background-color: #f0f0f0;
    color: var(--primary-dark);
  }
</style>
