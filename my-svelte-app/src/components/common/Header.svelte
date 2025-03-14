<script>
  // 日期管理
  const today = new Date();
  const dateFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const formattedDate = today.toLocaleDateString("zh-CN", dateFormatOptions);
</script>

<header class="app-header">
  <h1>健康饮食记录</h1>
  <p class="date">{formattedDate}</p>
</header>

<style>
  .app-header {
    background: linear-gradient(
      135deg,
      var(--primary-color),
      var(--primary-dark)
    );
    color: white;
    padding: 15px;
    border-radius: var(--border-radius);
    margin-bottom: 15px;
    box-shadow: var(--shadow);
    text-align: center;
  }

  .app-header h1 {
    margin: 0;
    font-size: 1.8rem;
  }

  .date {
    margin: 5px 0 0;
    font-size: 0.9rem;
    opacity: 0.9;
  }
</style>
