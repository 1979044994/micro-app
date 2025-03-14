<script>
  import { Link, useLocation } from "svelte-routing";
  import Icon from "./Icon.svelte";

  // 获取当前路由位置
  const location = useLocation();

  // 导航项使用简化的图标名称
  const navItems = [
    {
      icon: "home",
      label: "首页",
      path: "/",
    },
    {
      icon: "fitness",
      label: "训练",
      path: "/discover",
    },
    {
      icon: "message",
      label: "消息",
      path: "/message",
    },
    {
      icon: "profile",
      label: "我的",
      path: "/profile",
    },
  ];

  // 检查当前路径是否激活
  $: isActive = (path) => $location.pathname === path;
</script>

<nav class="bottom-nav">
  {#each navItems as item}
    <div class="nav-item-container" class:active={isActive(item.path)}>
      <Link to={item.path}>
        <div class="icon-wrapper">
          <Icon
            name={item.icon}
            size={isActive(item.path) ? "30px" : "24px"}
            color={isActive(item.path) ? "#59b89d" : "#8a9099"}
          />
        </div>
        <span class="label">{item.label}</span>
      </Link>
    </div>
  {/each}
</nav>

<style>
  .bottom-nav {
    display: flex;
    justify-content: space-around;
    background-color: #ffffff;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    padding: 12px 10px 28px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 500px;
    margin: 0 auto;
    z-index: 100;
  }

  .nav-item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #8a9099;
    padding: 6px 0;
    transition: all 0.3s ease;
    width: 25%;
  }

  .nav-item-container a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: inherit;
    text-decoration: none;
    width: 100%;
  }

  .active {
    color: #59b89d;
  }

  .icon-wrapper {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
  }

  .label {
    font-size: 12px;
    font-weight: 500;
    margin-top: 4px;
    text-align: center;
  }
</style>
