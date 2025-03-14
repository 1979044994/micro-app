<script>
  import { fade, fly } from "svelte/transition";
  import Icon from "../components/Icon.svelte";

  let categories = [
    { id: 1, name: "瑜伽", icon: "yoga" },
    { id: 2, name: "跑步", icon: "running" },
    { id: 3, name: "力量", icon: "fitness" },
    { id: 4, name: "骑行", icon: "cycling" },
    { id: 5, name: "更多", icon: "more" },
  ];

  let recommendations = [
    {
      id: 1,
      title: "30分钟高强度间歇训练",
      trainer: "李教练",
      duration: "30分钟",
      level: "中级",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "#FF5A5F",
    },
    {
      id: 2,
      title: "全身拉伸放松",
      trainer: "王教练",
      duration: "20分钟",
      level: "初级",
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "#4A90E2",
    },
    {
      id: 3,
      title: "核心力量训练",
      trainer: "张教练",
      duration: "25分钟",
      level: "高级",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "#FFB400",
    },
  ];

  // 推荐的健康课程数据
  const courses = [
    {
      id: 1,
      title: "30天健康减脂计划",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "减脂",
      duration: "30天",
      rating: 4.8,
    },
    {
      id: 2,
      title: "家庭健身初学者指南",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "健身",
      duration: "14天",
      rating: 4.7,
    },
    {
      id: 3,
      title: "科学饮食全攻略",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "营养",
      duration: "21天",
      rating: 4.9,
    },
  ];

  // 热门话题
  const topics = [
    { name: "健康食谱", icon: "food" },
    { name: "室内健身", icon: "fitness" },
    { name: "减脂瘦身", icon: "weight" },
    { name: "营养知识", icon: "carrot" },
    { name: "运动科学", icon: "heart" },
    { name: "睡眠改善", icon: "sleep" },
  ];

  // 添加更多动作按钮
  const actionButtons = [
    { icon: "video", label: "课程视频" },
    { icon: "calendar", label: "活动预约" },
    { icon: "community", label: "社区" },
  ];
</script>

<div class="discover-page" in:fade={{ duration: 300 }}>
  <div class="header">
    <div class="title-section">
      <h1>发现训练</h1>
      <p class="subtitle">找到适合您的个性化健身课程</p>
    </div>
    <button class="notification-btn">
      <Icon name="notification" />
    </button>
  </div>

  <div class="search-container">
    <div class="search-bar">
      <Icon name="search" color="#8a9099" />
      <input type="text" placeholder="搜索课程或教练" />
    </div>
    <button class="filter-btn">
      <Icon name="sliders" color="white" />
    </button>
  </div>

  <div class="quick-filters">
    <button class="filter-pill active">
      <Icon name="fire" size="16px" /> 热门
    </button>
    <button class="filter-pill">
      <Icon name="clock" size="16px" /> 最新
    </button>
    <button class="filter-pill">
      <Icon name="star" size="16px" /> 评分
    </button>
    <button class="filter-pill">
      <Icon name="filter" size="16px" /> 筛选
    </button>
  </div>

  <div class="action-buttons">
    {#each actionButtons as button}
      <button class="round-action-btn">
        <div class="action-icon">
          <Icon name={button.icon} color="#59b89d" />
        </div>
        <span>{button.label}</span>
      </button>
    {/each}
  </div>

  <div class="content">
    <div class="categories-section">
      <div class="section-header">
        <h2>训练类别</h2>
        <button class="see-all-btn"
          >全部 <i class="fa-solid fa-chevron-right"></i></button
        >
      </div>
      <div class="categories-row">
        {#each categories as category, i}
          <div
            class="category-item"
            in:fly={{ y: 20, delay: i * 50, duration: 300 }}
          >
            <div class="category-icon">
              <Icon name={category.icon} />
            </div>
            <span>{category.name}</span>
          </div>
        {/each}
      </div>
    </div>

    <div class="recommendations-section">
      <div class="section-header">
        <h2>
          <Icon name="fire" /> 推荐训练
        </h2>
        <button class="see-all-btn"
          >全部 <Icon name="forward" size="16px" /></button
        >
      </div>

      <div class="recommendations-list">
        {#each recommendations as rec, i}
          <div
            class="card recommendation-card"
            in:fly={{ y: 20, delay: i * 100, duration: 300 }}
            style="--card-accent: {rec.color}"
          >
            <div class="rec-image" style="background-image: url({rec.image})">
              <div class="rec-badge" style="background-color: {rec.color}">
                {rec.level}
              </div>
              <div class="rec-duration">
                <i class="fa-regular fa-clock"></i>
                {rec.duration}
              </div>
            </div>
            <div class="rec-info">
              <h4>{rec.title}</h4>
              <div class="rec-meta">
                <span class="trainer"
                  ><i class="fa-solid fa-user-tie"></i> {rec.trainer}</span
                >
                <button class="play-btn"
                  ><i class="fa-solid fa-play"></i></button
                >
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="challenges-section">
      <div class="section-header">
        <h2>热门挑战</h2>
        <button class="see-all"
          >查看全部 <i class="fa-solid fa-chevron-right"></i></button
        >
      </div>

      <div class="card challenge-banner" in:fade>
        <div class="challenge-content">
          <span class="challenge-tag"
            ><i class="fa-solid fa-fire"></i> 7天挑战</span
          >
          <h4>夏季塑形特训</h4>
          <p>加入3000+用户的健身计划</p>
          <button class="join-btn"
            >立即参与 <i class="fa-solid fa-arrow-right"></i></button
          >
        </div>
      </div>
    </div>

    <div class="topics-container">
      <h2>热门话题</h2>
      <div class="topics">
        {#each topics as topic}
          <div class="topic">
            <div class="topic-icon">
              <Icon name={topic.icon} />
            </div>
            <div class="topic-name">{topic.name}</div>
          </div>
        {/each}
      </div>
    </div>

    <div class="featured">
      <div class="section-header">
        <h2>精选课程</h2>
        <span class="view-all"
          >查看更多 <i class="fa-solid fa-chevron-right"></i></span
        >
      </div>
      <div class="courses">
        {#each courses as course}
          <div class="card course">
            <div
              class="course-image"
              style="background-image: url({course.image})"
            >
              <div class="course-category">{course.category}</div>
            </div>
            <div class="course-content">
              <h3>{course.title}</h3>
              <div class="course-meta">
                <div>
                  <i class="fa-regular fa-clock"></i>
                  <span>{course.duration}</span>
                </div>
                <div>
                  <i class="fa-solid fa-star"></i>
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="daily-tip card">
      <div class="tip-icon">
        <i class="fa-solid fa-lightbulb"></i>
      </div>
      <div class="tip-content">
        <h3>每日健康小提示</h3>
        <p>每天保持八杯水的摄入量可以帮助提高新陈代谢，增强肌肤弹性。</p>
      </div>
    </div>
  </div>
</div>

<style>
  .discover-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
  }

  .header {
    padding: 20px 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title-section {
    flex: 1;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 4px;
    letter-spacing: -0.5px;
    color: #2c3e50;
  }

  .subtitle {
    font-size: 14px;
    color: #8a9099;
    margin: 0;
  }

  .notification-btn {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: white;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-left: 16px;
  }

  .search-container {
    margin: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .search-bar {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    padding: 0 16px;
    height: 50px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .search-bar i {
    color: #8a9099;
    margin-right: 12px;
  }

  .search-bar input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
  }

  .filter-btn {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background-color: #59b89d;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .quick-filters {
    display: flex;
    padding: 0 16px 16px;
    gap: 10px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .filter-pill {
    background-color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    color: #8a9099;
    white-space: nowrap;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .filter-pill.active {
    background-color: #59b89d;
    color: white;
  }

  .action-buttons {
    display: flex;
    justify-content: space-around;
    padding: 16px;
  }

  .round-action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    gap: 8px;
  }

  .round-action-btn i {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #59b89d;
    font-size: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  .round-action-btn span {
    font-size: 12px;
    color: #2c3e50;
    font-weight: 500;
  }

  .content {
    flex: 1;
    padding: 0 16px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .categories-section,
  .recommendations-section,
  .challenges-section,
  .topics-container,
  .featured {
    margin-bottom: 24px;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #2c3e50;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .see-all-btn {
    background: none;
    border: none;
    color: #8a9099;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .categories-row {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding: 8px 0;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 70px;
    color: #2c3e50;
  }

  .category-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    margin-bottom: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    font-size: 22px;
    color: #59b89d;
  }

  .recommendations-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .recommendation-card {
    overflow: hidden;
    padding: 0;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-left: 4px solid var(--card-accent, #59b89d);
  }

  .rec-image {
    height: 160px;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .rec-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    color: white;
  }

  .rec-duration {
    position: absolute;
    bottom: 12px;
    right: 12px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    color: white;
  }

  .rec-info {
    padding: 16px;
    background-color: white;
  }

  .rec-info h4 {
    margin: 0 0 12px 0;
    font-size: 16px;
    font-weight: 600;
    color: #2c3e50;
  }

  .rec-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #8a9099;
    font-size: 14px;
  }

  .play-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--card-accent, #59b89d);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .challenge-banner {
    padding: 0;
    height: 150px;
    border-radius: 16px;
    background: linear-gradient(135deg, #59b89d, #3d7b68);
    padding: 20px;
    position: relative;
    overflow: hidden;
    color: white;
  }

  .challenge-content {
    position: relative;
    z-index: 1;
  }

  .challenge-tag {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 12px;
  }

  .challenge-content h4 {
    margin: 0 0 8px 0;
    font-size: 22px;
    font-weight: 700;
  }

  .challenge-content p {
    margin: 0 0 16px 0;
    font-size: 14px;
    opacity: 0.9;
  }

  .join-btn {
    background-color: white;
    color: #59b89d;
    border: none;
    border-radius: 24px;
    padding: 8px 20px;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* 其余样式保持与现有代码一致 */
  .topics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .topic {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .topic-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    font-size: 24px;
    color: #59b89d;
  }

  .topic-name {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #2c3e50;
  }

  .courses {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .course {
    padding: 0;
    overflow: hidden;
  }

  .course-image {
    height: 160px;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .course-category {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 4px 10px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 500;
  }

  .course-content {
    padding: 16px;
  }

  .course-content h3 {
    margin: 0 0 10px;
    font-size: 16px;
    font-weight: 600;
    color: #2c3e50;
  }

  .course-meta {
    display: flex;
    justify-content: space-between;
    color: #8a9099;
    font-size: 14px;
  }

  .course-meta i {
    margin-right: 4px;
  }

  .daily-tip {
    display: flex;
    align-items: center;
    margin-top: 24px;
  }

  .tip-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 184, 108, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    color: #ffb86c;
    font-size: 24px;
  }

  .tip-content h3 {
    margin: 0 0 4px;
    font-size: 16px;
    font-weight: 600;
    color: #2c3e50;
  }

  .tip-content p {
    margin: 0;
    color: #8a9099;
    font-size: 14px;
    line-height: 1.5;
  }

  .action-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }
</style>
