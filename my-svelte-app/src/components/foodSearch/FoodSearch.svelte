<script>
  import { createEventDispatcher } from "svelte";
  import Module from "../common/Module.svelte";
  import FoodCard from "./FoodCard.svelte";

  export let visible = true;

  const dispatch = createEventDispatcher();

  let searchTerm = "";
  let activeFilter = "全部";
  const filters = ["全部", "常用", "收藏", "最近"];

  // 示例食物数据
  const commonFoods = [
    {
      name: "香蕉",
      calories: "105卡/个",
      imageUrl:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "煮鸡蛋",
      calories: "78卡/个",
      imageUrl:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "全麦面包",
      calories: "90卡/片",
      imageUrl:
        "https://images.unsplash.com/photo-1589367920969-ab39f74ca15a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "苹果",
      calories: "95卡/个",
      imageUrl:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
  ];

  function selectFilter(filter) {
    activeFilter = filter;
  }

  function selectFood(event) {
    console.log("选择了食物:", event.detail);
    // 后续可实现选择食物的逻辑
  }

  function scanBarcode() {
    console.log("扫描条形码");
    // 后续可实现扫描功能
  }
</script>

<Module
  title="食物搜索"
  {visible}
  borderColor="var(--info-color)"
  on:toggleVisibility={() => dispatch("toggleVisibility")}
>
  <div class="search-container">
    <div class="search-input-wrapper">
      <span class="material-icons">search</span>
      <input
        type="text"
        class="search-input"
        placeholder="搜索食物..."
        bind:value={searchTerm}
      />
    </div>
    <div class="search-filters">
      {#each filters as filter}
        <button
          class="filter-btn {activeFilter === filter ? 'active' : ''}"
          on:click={() => selectFilter(filter)}
        >
          {filter}
        </button>
      {/each}
    </div>
  </div>

  <div class="search-results">
    <div class="result-category">
      <h4>常见食物</h4>
      <div class="food-grid">
        {#each commonFoods as food}
          <FoodCard {food} on:select={selectFood} />
        {/each}
      </div>
    </div>

    <button class="scan-barcode-btn" on:click={scanBarcode}>
      <span class="material-icons">qr_code_scanner</span>
      扫描条形码
    </button>
  </div>
</Module>

<style>
  .search-container {
    margin-bottom: 15px;
  }

  .search-input-wrapper {
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 20px;
    padding: 6px 12px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  .search-input-wrapper .material-icons {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-right: 8px;
  }

  .search-input {
    border: none;
    background: none;
    outline: none;
    flex: 1;
    font-size: 0.9rem;
    color: var(--text-primary);
  }

  .search-filters {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .filter-btn {
    background: none;
    border: none;
    padding: 4px 8px;
    font-size: 0.8rem;
    cursor: pointer;
    color: var(--text-secondary);
    border-radius: 12px;
    transition: background-color 0.2s;
  }

  .filter-btn.active,
  .filter-btn:hover {
    background-color: var(--primary-light);
    color: var(--primary-dark);
  }

  .search-results {
    margin-top: 15px;
  }

  .result-category {
    margin-bottom: 15px;
  }

  .result-category h4 {
    margin: 0 0 10px 0;
    font-size: 1rem;
    color: var(--text-primary);
  }

  .food-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 12px;
  }

  .scan-barcode-btn {
    background-color: var(--info-color);
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
    margin-top: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .scan-barcode-btn:hover {
    background-color: #1976d2;
  }

  .scan-barcode-btn:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .scan-barcode-btn .material-icons {
    font-size: 1rem;
    margin-right: 4px;
  }
</style>
