<script>
  export let user;
</script>

<div class="user-info">
  <img src={user.avatar} alt="用户头像" class="user-avatar" />
  <div class="user-details">
    <h3>你好，{user.name}！</h3>
    <div class="streak-badge">
      <span class="material-icons">local_fire_department</span>
      <span>连续记录：{user.streak}天</span>
    </div>
  </div>
  <button class="settings-btn">
    <span class="material-icons">settings</span>
  </button>
</div>

<style>
  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

  .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--primary-color);
    flex-shrink: 0;
  }

  .user-details {
    margin-left: 12px;
    flex-grow: 1;
  }

  .user-details h3 {
    margin: 0 0 4px 0;
    font-size: 1.1rem;
  }

  .settings-btn {
    margin-left: 10px;
    background-color: #f5f5f5;
    border-radius: 50%;
    height: 36px;
    width: 36px;
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .settings-btn:hover {
    background-color: #f0f0f0;
    color: var(--primary-dark);
  }

  .streak-badge {
    display: flex;
    align-items: center;
    background-color: #fff3e0;
    padding: 2px 6px;
    border-radius: 12px;
    color: #ff6d00;
    font-size: 0.8rem;
    display: inline-flex;
  }

  .streak-badge .material-icons {
    font-size: 0.9rem;
    margin-right: 3px;
  }

  /* 媒体查询 */
  @media (min-width: 768px) {
    .user-info {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 15px;
    }
  }
</style>
