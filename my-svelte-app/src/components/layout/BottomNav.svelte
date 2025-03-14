<script>
  export let currentPage;
  export let navigateTo;
</script>

<nav class="bottom-nav">
  <button
    class="nav-item {currentPage === 'home' ? 'active' : ''}"
    on:click={() => navigateTo("home")}
  >
    <div class="nav-icon">
      <i class="fas fa-home"></i>
    </div>
    <span>首页</span>
  </button>

  <button
    class="nav-item {currentPage === 'food' ? 'active' : ''}"
    on:click={() => navigateTo("food")}
  >
    <div class="nav-icon">
      <i class="fas fa-utensils"></i>
    </div>
    <span>饮食</span>
  </button>

  <button class="nav-item add-btn">
    <div class="plus-icon">
      <i class="fas fa-plus"></i>
    </div>
  </button>

  <button
    class="nav-item {currentPage === 'exercise' ? 'active' : ''}"
    on:click={() => navigateTo("exercise")}
  >
    <div class="nav-icon">
      <i class="fas fa-dumbbell"></i>
    </div>
    <span>运动</span>
  </button>

  <button
    class="nav-item {currentPage === 'profile' ? 'active' : ''}"
    on:click={() => navigateTo("profile")}
  >
    <div class="nav-icon">
      <i class="fas fa-user"></i>
    </div>
    <span>我的</span>
  </button>
</nav>

<style>
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    z-index: 1000;
    padding-bottom: env(safe-area-inset-bottom);
  }

  .nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #9e9e9e;
    border: none;
    background: transparent;
    padding: 6px 0;
    height: 100%;
    position: relative;
    font-size: 10px;
    cursor: pointer;
    transition: color 0.2s;
  }

  .nav-item.active {
    color: var(--primary-color);
  }

  .nav-icon {
    font-size: 1.2rem;
    margin-bottom: 3px;
  }

  .add-btn {
    position: relative;
    transform: translateY(-15px);
  }

  .plus-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(
      135deg,
      var(--primary-color),
      var(--accent-color)
    );
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);
  }
</style>
