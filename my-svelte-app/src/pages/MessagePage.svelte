<script>
  // 消息数据
  const messages = [
    {
      id: 1,
      user: {
        name: "健康顾问团队",
        avatar:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        isOfficial: true,
      },
      preview:
        "您好！根据您的最近数据分析，我们为您准备了一份个性化饮食方案...",
      time: "12:30",
      unread: 2,
    },
    {
      id: 2,
      user: {
        name: "营养师 李明",
        avatar:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        isOfficial: false,
      },
      preview: "您的蛋白质摄入量今天偏低，建议晚餐可以适当增加些...",
      time: "昨天",
      unread: 0,
    },
    {
      id: 3,
      user: {
        name: "运动教练 王强",
        avatar:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        isOfficial: false,
      },
      preview: "已收到您的健身计划反馈，根据您的情况，我们可以适当调整...",
      time: "周一",
      unread: 0,
    },
    {
      id: 4,
      user: {
        name: "系统通知",
        avatar:
          "https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        isOfficial: true,
      },
      preview: "恭喜您完成连续打卡7天！获得积分奖励100点，可在商城兑换...",
      time: "上周",
      unread: 1,
    },
  ];

  // 分组的联系人
  const contacts = [
    {
      group: "我的顾问",
      users: [
        {
          name: "营养师 李明",
          avatar:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
          role: "营养专家",
        },
        {
          name: "运动教练 王强",
          avatar:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
          role: "健身教练",
        },
      ],
    },
  ];

  // 标签切换
  let activeTab = "messages";
</script>

<div class="message-container">
  <div class="header">
    <h1><i class="fa-solid fa-inbox"></i> 消息中心</h1>
    <div class="header-actions">
      <button class="icon-btn"
        ><i class="fa-solid fa-magnifying-glass"></i></button
      >
      <button class="icon-btn"
        ><i class="fa-solid fa-ellipsis-vertical"></i></button
      >
    </div>
  </div>

  <div class="tabs">
    <div
      class="tab"
      class:active={activeTab === "messages"}
      on:click={() => (activeTab = "messages")}
    >
      <i class="fa-solid fa-comment-dots"></i> 消息
    </div>
    <div
      class="tab"
      class:active={activeTab === "contacts"}
      on:click={() => (activeTab = "contacts")}
    >
      <i class="fa-solid fa-address-book"></i> 联系人
    </div>
  </div>

  {#if activeTab === "messages"}
    <div class="messages-list">
      {#each messages as msg}
        <div class="card message-item">
          <div class="avatar">
            <img src={msg.user.avatar} alt={msg.user.name} />
            {#if msg.user.isOfficial}
              <div class="badge">
                <i class="fa-solid fa-check"></i>
              </div>
            {/if}
          </div>
          <div class="message-content">
            <div class="message-header">
              <h3>{msg.user.name}</h3>
              <span class="time">{msg.time}</span>
            </div>
            <p class="preview">{msg.preview}</p>
          </div>
          {#if msg.unread > 0}
            <div class="unread-badge">{msg.unread}</div>
          {/if}
        </div>
      {/each}
    </div>
  {:else}
    <div class="contacts-list">
      {#each contacts as group}
        <div class="contact-group">
          <h3 class="group-title">{group.group}</h3>
          {#each group.users as contact}
            <div class="card contact-item">
              <div class="avatar">
                <img src={contact.avatar} alt={contact.name} />
              </div>
              <div class="contact-info">
                <h3>{contact.name}</h3>
                <p class="role">{contact.role}</p>
              </div>
              <div class="contact-action">
                <i class="fa-solid fa-message"></i>
              </div>
            </div>
          {/each}
        </div>
      {/each}

      <div class="card add-contact">
        <div class="add-icon">
          <i class="fa-solid fa-plus"></i>
        </div>
        <div class="add-text">添加新联系人</div>
      </div>
    </div>
  {/if}

  <div class="floating-action">
    <i class="fa-solid fa-pen-to-square"></i>
  </div>
</div>

<style>
  .message-container {
    padding: 0 16px 24px;
    position: relative;
    height: 100%;
  }

  .header {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.5px;
  }

  .header-actions {
    display: flex;
    gap: 12px;
  }

  .header-actions i {
    font-size: 18px;
    color: #555;
  }

  .icon-btn {
    background: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    color: #2c3e50;
  }

  .tabs {
    display: flex;
    margin-bottom: 16px;
    border-bottom: 1px solid #eee;
  }

  .tab {
    flex: 1;
    text-align: center;
    padding: 12px;
    font-weight: 600;
    color: #8a9099;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .tab.active {
    color: #59b89d;
  }

  .tab.active:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 30%;
    width: 40%;
    height: 3px;
    background-color: #59b89d;
    border-radius: 3px 3px 0 0;
  }

  .messages-list,
  .contacts-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .message-item {
    display: flex;
    align-items: center;
    padding: 16px;
  }

  .avatar {
    position: relative;
    margin-right: 16px;
  }

  .avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .badge {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #59b89d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    border: 2px solid white;
  }

  .message-content {
    flex: 1;
  }

  .message-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }

  .message-header h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  .time {
    color: #8a9099;
    font-size: 12px;
  }

  .preview {
    margin: 0;
    color: #8a9099;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .unread-badge {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ff7d7d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    margin-left: 8px;
  }

  .contact-group {
    margin-bottom: 16px;
  }

  .group-title {
    font-size: 14px;
    color: #8a9099;
    margin: 0 0 12px 8px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    padding: 16px;
    margin-bottom: 8px;
  }

  .contact-info {
    flex: 1;
  }

  .contact-info h3 {
    margin: 0 0 4px;
    font-size: 16px;
    font-weight: 600;
  }

  .role {
    margin: 0;
    color: #8a9099;
    font-size: 14px;
  }

  .contact-action {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f9f6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #59b89d;
  }

  .add-contact {
    display: flex;
    align-items: center;
    padding: 16px;
    margin-top: 16px;
    cursor: pointer;
  }

  .add-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f0f9f6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #59b89d;
    margin-right: 16px;
    font-size: 20px;
  }

  .add-text {
    font-weight: 600;
    color: #59b89d;
  }

  .floating-action {
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #59b89d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(89, 184, 157, 0.3);
  }
</style>
