<script>
  import { createEventDispatcher } from "svelte";

  export let food = {
    name: "",
    calories: "",
    imageUrl: "",
  };

  const dispatch = createEventDispatcher();

  function selectFood() {
    dispatch("select", food);
  }
</script>

<button type="button" class="food-card" on:click={selectFood}>
  <div class="food-image" style="background-image: url({food.imageUrl})"></div>
  <div class="food-card-info">
    <div class="food-card-name">{food.name}</div>
    <div class="food-card-calories">{food.calories}</div>
  </div>
</button>

<style>
  .food-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    cursor: pointer;
    width: 100%;
    text-align: left;
    border: none;
    padding: 0;
  }

  .food-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .food-image {
    width: 100%;
    height: 80px;
    background-size: cover;
    background-position: center;
  }

  .food-card-info {
    padding: 8px;
    text-align: center;
  }

  .food-card-name {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  .food-card-calories {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-top: 4px;
  }
</style>
