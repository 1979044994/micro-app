<script>
  // 用户资料
  const user = {
    name: "张小健",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    level: "健康达人 Lv.4",
    streak: 28,
    achievements: 12,
    followers: 65,
    following: 43,
  };

  // 统计数据
  const stats = [
    { label: "连续打卡", value: user.streak, icon: "fa-solid fa-fire" },
    { label: "获得成就", value: user.achievements, icon: "fa-solid fa-medal" },
    { label: "关注者", value: user.followers, icon: "fa-solid fa-user-group" },
    { label: "正在关注", value: user.following, icon: "fa-solid fa-heart" },
  ];

  // 健康记录
  const healthRecords = [
    {
      date: "2023-08-15",
      weight: 65.2,
      steps: 8420,
      sleep: 7.5,
      calories: 2150,
    },
    {
      date: "2023-08-14",
      weight: 65.4,
      steps: 7650,
      sleep: 6.8,
      calories: 2080,
    },
    {
      date: "2023-08-13",
      weight: 65.5,
      steps: 6890,
      sleep: 7.2,
      calories: 2210,
    },
    {
      date: "2023-08-12",
      weight: 65.7,
      steps: 9340,
      sleep: 8.0,
      calories: 2300,
    },
  ];

  // 功能菜单
  const menuItems = [
    { icon: "fa-solid fa-gear", label: "设置" },
    { icon: "fa-solid fa-chart-line", label: "健康报告" },
    { icon: "fa-solid fa-trophy", label: "我的成就" },
    { icon: "fa-solid fa-bookmark", label: "收藏食谱" },
    { icon: "fa-solid fa-shield", label: "隐私设置" },
    { icon: "fa-solid fa-circle-question", label: "帮助中心" },
  ];

  // 根据指标类型获取图标
  function getMetricIcon(key) {
    const icons = {
      weight: "fa-solid fa-weight-scale",
      steps: "fa-solid fa-shoe-prints",
      sleep: "fa-solid fa-moon",
      calories: "fa-solid fa-fire",
    };
    return icons[key] || "fa-solid fa-chart-simple";
  }

  // 根据指标类型获取颜色
  function getMetricColor(key) {
    const colors = {
      weight: "rgba(255, 125, 125, 0.1)",
      steps: "rgba(108, 93, 211, 0.1)",
      sleep: "rgba(89, 184, 157, 0.1)",
      calories: "rgba(255, 184, 108, 0.1)",
    };
    return colors[key] || "rgba(0, 0, 0, 0.1)";
  }

  // 根据指标类型获取标签
  function getMetricLabel(key) {
    const labels = {
      weight: "体重",
      steps: "步数",
      sleep: "睡眠",
      calories: "卡路里",
    };
    return labels[key] || key;
  }

  // 格式化指标值
  function formatMetricValue(key, value) {
    const formats = {
      weight: (value) => `${value} kg`,
      steps: (value) => value.toLocaleString(),
      sleep: (value) => `${value} 小时`,
      calories: (value) => value.toLocaleString(),
    };
    return (formats[key] || ((v) => v))(value);
  }

  // 获取菜单图标颜色
  function getMenuIconColor(label) {
    const colors = {
      设置: "#8a9099",
      健康报告: "#59B89D",
      我的成就: "#FFB86C",
      收藏食谱: "#FF7D7D",
      隐私设置: "#6C5DD3",
      帮助中心: "#8a9099",
    };
    return colors[label] || "#8a9099";
  }

  // 更新功能菜单，增加图标和分组
  const menuSections = [
    {
      title: "账户设置",
      items: [
        {
          icon: "fa-solid fa-user-gear",
          label: "个人信息",
          color: "#59B89D",
          action: "编辑",
        },
        {
          icon: "fa-solid fa-bell",
          label: "通知管理",
          color: "#4A90E2",
          action: "设置",
        },
        {
          icon: "fa-solid fa-shield-halved",
          label: "隐私与安全",
          color: "#6C5DD3",
          action: "设置",
        },
      ],
    },
    {
      title: "健康管理",
      items: [
        {
          icon: "fa-solid fa-chart-line",
          label: "健康报告",
          color: "#FFB86C",
          badge: "新",
          action: "查看",
        },
        {
          icon: "fa-solid fa-trophy",
          label: "我的成就",
          color: "#FF7D7D",
          badge: "12",
          action: "查看",
        },
        {
          icon: "fa-solid fa-heart",
          label: "健康目标",
          color: "#FF5A5F",
          action: "设置",
        },
      ],
    },
    {
      title: "内容与服务",
      items: [
        {
          icon: "fa-solid fa-bookmark",
          label: "收藏食谱",
          color: "#FFB400",
          badge: "3",
          action: "查看",
        },
        {
          icon: "fa-solid fa-download",
          label: "离线内容",
          color: "#4A90E2",
          action: "管理",
        },
        {
          icon: "fa-solid fa-circle-question",
          label: "帮助中心",
          color: "#8A9099",
          action: "查看",
        },
      ],
    },
  ];
</script>

<div class="profile-container">
  <div
    class="cover-photo"
    style="background-image: url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
  >
    <div class="profile-header">
      <div class="avatar-container">
        <img src={user.avatar} alt={user.name} class="avatar" />
        <div class="edit-avatar">
          <i class="fa-solid fa-camera"></i>
        </div>
      </div>
      <h1>{user.name}</h1>
      <div class="level-badge">{user.level}</div>
    </div>
  </div>

  <div class="stats-row">
    {#each stats as stat}
      <div class="stat-item">
        <div class="stat-icon">
          <i class={stat.icon}></i>
        </div>
        <div class="stat-value">{stat.value}</div>
        <div class="stat-label">{stat.label}</div>
      </div>
    {/each}
  </div>

  <div class="section">
    <div class="section-header">
      <h2>健康数据</h2>
      <span class="view-all"
        >查看更多 <i class="fa-solid fa-chevron-right"></i></span
      >
    </div>

    <div class="card health-card">
      <div class="chart-container">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="健康图表"
          class="chart-placeholder"
        />
      </div>

      <div class="health-metrics">
        {#each Object.entries(healthRecords[0]).filter(([key]) => key !== "date") as [key, value]}
          <div class="metric">
            <div
              class="metric-icon"
              style="background-color: {getMetricColor(key)}"
            >
              <i class={getMetricIcon(key)}></i>
            </div>
            <div class="metric-details">
              <div class="metric-value">{formatMetricValue(key, value)}</div>
              <div class="metric-label">{getMetricLabel(key)}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="section">
    <div class="profile-actions">
      <button class="action-btn">
        <i class="fa-solid fa-pencil"></i>
        编辑资料
      </button>
      <button class="action-btn secondary">
        <i class="fa-solid fa-share-nodes"></i>
        分享主页
      </button>
    </div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2><i class="fa-solid fa-chart-simple"></i> 健康数据</h2>
      <span class="view-all"
        >查看详情 <i class="fa-solid fa-chevron-right"></i></span
      >
    </div>

    <div class="card health-card">
      <div class="chart-container">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="健康图表"
          class="chart-placeholder"
        />
      </div>

      <div class="health-metrics">
        {#each Object.entries(healthRecords[0]).filter(([key]) => key !== "date") as [key, value]}
          <div class="metric">
            <div
              class="metric-icon"
              style="background-color: {getMetricColor(key)}"
            >
              <i class={getMetricIcon(key)}></i>
            </div>
            <div class="metric-details">
              <div class="metric-value">{formatMetricValue(key, value)}</div>
              <div class="metric-label">{getMetricLabel(key)}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  {#each menuSections as section}
    <div class="section menu-section">
      <div class="section-header">
        <h2>{section.title}</h2>
      </div>

      <div class="menu-items">
        {#each section.items as item}
          <div class="menu-item">
            <div class="menu-item-left">
              <div
                class="menu-icon"
                style="color: {item.color}; background-color: {item.color}20;"
              >
                <i class={item.icon}></i>
              </div>
              <div class="menu-info">
                <span class="menu-label">{item.label}</span>
                {#if item.badge}
                  <span
                    class="menu-badge"
                    style="background-color: {item.color}">{item.badge}</span
                  >
                {/if}
              </div>
            </div>
            <div class="menu-action">
              <span>{item.action}</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}

  <div class="section">
    <button class="logout-btn">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
      退出登录
    </button>
  </div>

  <div class="recent-activity">
    <div class="section-header">
      <h2>最近活动</h2>
    </div>

    <div class="card activity-item">
      <div class="activity-icon">
        <i class="fa-solid fa-dumbbell"></i>
      </div>
      <div class="activity-content">
        <h3>完成锻炼</h3>
        <p>30分钟核心力量训练</p>
        <div class="activity-time">今天 09:30</div>
      </div>
      <div class="activity-points">+15</div>
    </div>

    <div class="card activity-item">
      <div
        class="activity-icon"
        style="background-color: rgba(255, 184, 108, 0.1); color: #FFB86C;"
      >
        <i class="fa-solid fa-utensils"></i>
      </div>
      <div class="activity-content">
        <h3>记录膳食</h3>
        <p>早餐: 藜麦沙拉碗</p>
        <div class="activity-time">今天 08:15</div>
      </div>
      <div class="activity-points">+5</div>
    </div>
  </div>
</div>

<style>
  .profile-container {
    padding-bottom: 24px;
  }

  .cover-photo {
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: flex-end;
  }

  .profile-header {
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
    color: white;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  }

  .avatar-container {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto 10px;
  }

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  .edit-avatar {
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #59b89d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border: 2px solid white;
  }

  h1 {
    font-size: 24px;
    margin: 0 0 5px;
  }

  .level-badge {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
  }

  .stats-row {
    display: flex;
    justify-content: space-around;
    background-color: white;
    margin: 0 16px;
    margin-top: -20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    padding: 16px 0;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stat-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #f0f9f6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #59b89d;
    margin-bottom: 8px;
  }

  .stat-value {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 2px;
  }

  .stat-label {
    color: #8a9099;
    font-size: 12px;
  }

  .section {
    margin: 24px 16px 0;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }

  .view-all {
    color: #8a9099;
    font-size: 14px;
  }

  .health-card {
    padding: 0;
    overflow: hidden;
  }

  .chart-container {
    height: 140px;
    overflow: hidden;
  }

  .chart-placeholder {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .health-metrics {
    display: flex;
    justify-content: space-between;
    padding: 16px;
  }

  .metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22%;
  }

  .metric-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }

  .metric-value {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 2px;
    text-align: center;
  }

  .metric-label {
    color: #8a9099;
    font-size: 12px;
    text-align: center;
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    text-align: center;
  }

  .menu-icon {
    font-size: 24px;
    margin-bottom: 12px;
  }

  .menu-label {
    font-size: 14px;
    font-weight: 500;
  }

  .recent-activity {
    margin: 24px 16px 0;
  }

  .activity-item {
    display: flex;
    align-items: center;
    padding: 16px;
    margin-bottom: 12px;
  }

  .activity-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(89, 184, 157, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #59b89d;
    margin-right: 16px;
  }

  .activity-content {
    flex: 1;
  }

  .activity-content h3 {
    margin: 0 0 4px;
    font-size: 16px;
    font-weight: 600;
  }

  .activity-content p {
    margin: 0 0 4px;
    font-size: 14px;
  }

  .activity-time {
    color: #8a9099;
    font-size: 12px;
  }

  .activity-points {
    background-color: #f0f9f6;
    color: #59b89d;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 16px;
    font-size: 14px;
  }

  .profile-actions {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
  }

  .action-btn {
    flex: 1;
    height: 46px;
    border-radius: 23px;
    border: none;
    background-color: #59b89d;
    color: white;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .action-btn.secondary {
    background-color: #f0f9f6;
    color: #59b89d;
  }

  .section {
    margin: 24px 16px 0;
  }

  .menu-section {
    margin-top: 32px;
  }

  .menu-items {
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
  }

  .menu-item:last-child {
    border-bottom: none;
  }

  .menu-item-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .menu-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  .menu-info {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .menu-label {
    font-size: 16px;
    font-weight: 500;
    color: #2c3e50;
  }

  .menu-badge {
    padding: 2px 8px;
    border-radius: 10px;
    color: white;
    font-size: 12px;
    font-weight: 600;
  }

  .menu-action {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #8a9099;
    font-size: 14px;
  }

  .logout-btn {
    width: 100%;
    height: 50px;
    border-radius: 12px;
    border: 1px solid #ff5a5f;
    background-color: white;
    color: #ff5a5f;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
  }
</style>
