<script>
  // 从 svelte-icons 导入所需图标
  import FaAppleAlt from "svelte-icons/fa/FaAppleAlt.svelte";
  import FaArrowRight from "svelte-icons/fa/FaArrowRight.svelte";
  import FaBell from "svelte-icons/fa/FaBell.svelte";
  import FaBicycle from "svelte-icons/fa/FaBicycle.svelte";
  import FaBookmark from "svelte-icons/fa/FaBookmark.svelte";
  import FaCalendarAlt from "svelte-icons/fa/FaCalendarAlt.svelte";
  import FaCamera from "svelte-icons/fa/FaCamera.svelte";
  import FaCarrot from "svelte-icons/fa/FaCarrot.svelte";
  import FaChartLine from "svelte-icons/fa/FaChartLine.svelte";
  import FaCheck from "svelte-icons/fa/FaCheck.svelte";
  import FaChevronRight from "svelte-icons/fa/FaChevronRight.svelte";
  import FaClock from "svelte-icons/fa/FaClock.svelte";
  import FaCog from "svelte-icons/fa/FaCog.svelte";
  import FaCommentDots from "svelte-icons/fa/FaCommentDots.svelte";
  import FaDumbbell from "svelte-icons/fa/FaDumbbell.svelte";
  import FaEllipsisH from "svelte-icons/fa/FaEllipsisH.svelte";
  import FaFilter from "svelte-icons/fa/FaFilter.svelte";
  import FaFire from "svelte-icons/fa/FaFire.svelte";
  import FaGlobeAmericas from "svelte-icons/fa/FaGlobeAmericas.svelte";
  import FaHeart from "svelte-icons/fa/FaHeart.svelte";
  import FaHome from "svelte-icons/fa/FaHome.svelte";
  import FaLightbulb from "svelte-icons/fa/FaLightbulb.svelte";
  import FaList from "svelte-icons/fa/FaList.svelte";
  import FaMoon from "svelte-icons/fa/FaMoon.svelte";
  import FaPeace from "svelte-icons/fa/FaPeace.svelte";
  import FaPlay from "svelte-icons/fa/FaPlay.svelte";
  import FaPlus from "svelte-icons/fa/FaPlus.svelte";
  import FaPlusCircle from "svelte-icons/fa/FaPlusCircle.svelte";
  import FaQrcode from "svelte-icons/fa/FaQrcode.svelte";
  import FaRunning from "svelte-icons/fa/FaRunning.svelte";
  import FaSearch from "svelte-icons/fa/FaSearch.svelte";
  import FaSlidersH from "svelte-icons/fa/FaSlidersH.svelte";
  import FaStar from "svelte-icons/fa/FaStar.svelte";
  import FaTint from "svelte-icons/fa/FaTint.svelte";
  import FaTrophy from "svelte-icons/fa/FaTrophy.svelte";
  import FaUser from "svelte-icons/fa/FaUser.svelte";
  import FaUserFriends from "svelte-icons/fa/FaUserFriends.svelte";
  import FaUtensils from "svelte-icons/fa/FaUtensils.svelte";
  import FaVideo from "svelte-icons/fa/FaVideo.svelte";
  import FaWalking from "svelte-icons/fa/FaWalking.svelte";
  import FaWeightHanging from "svelte-icons/fa/FaWeightHanging.svelte";

  // 配置参数
  export let name = "";
  export let size = "24px";
  export let color = "currentColor";

  // 图标映射表
  const icons = {
    // 导航图标
    home: FaHome,
    fitness: FaDumbbell,
    message: FaCommentDots,
    profile: FaUser,

    // 功能图标
    search: FaSearch,
    notification: FaBell,
    settings: FaCog,
    sliders: FaSlidersH,
    add: FaPlus,
    addCircle: FaPlusCircle,
    filter: FaFilter,
    camera: FaCamera,
    qrcode: FaQrcode,

    // 内容图标
    calendar: FaCalendarAlt,
    clock: FaClock,
    food: FaUtensils,
    water: FaTint,
    steps: FaWalking,
    running: FaRunning,
    chart: FaChartLine,
    trophy: FaTrophy,
    heart: FaHeart,
    fire: FaFire,
    play: FaPlay,
    star: FaStar,
    lightbulb: FaLightbulb,

    // 健康相关图标
    weight: FaWeightHanging,
    apple: FaAppleAlt,
    yoga: FaPeace,
    cycling: FaBicycle,
    community: FaUserFriends,
    video: FaVideo,
    carrot: FaCarrot,
    sleep: FaMoon,

    // UI导航图标
    forward: FaChevronRight,
    more: FaEllipsisH,
    check: FaCheck,
    arrow: FaArrowRight,
    list: FaList,
    bookmark: FaBookmark,
    globe: FaGlobeAmericas,
  };

  // 获取对应的图标组件
  $: icon = icons[name];
</script>

{#if icon}
  <div
    class="icon-container"
    style="width: {size}; height: {size}; color: {color};"
  >
    <svelte:component this={icon} />
  </div>
{:else}
  <div
    class="icon-container fallback"
    style="width: {size}; height: {size}; color: {color};"
  >
    <!-- 回退使用 Unicode 图标 -->
    {#if name === "home"}🏠
    {:else if name === "fitness"}💪
    {:else if name === "message"}💬
    {:else if name === "profile"}👤
    {:else if name === "notification"}🔔
    {:else if name === "settings"}⚙️
    {:else if name === "food"}🍽️
    {:else if name === "water"}💧
    {:else if name === "steps"}👣
    {:else if name === "search"}🔍
    {:else if name === "add"}➕
    {:else if name === "camera"}📷
    {:else}●{/if}
  </div>
{/if}

<style>
  .icon-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  .fallback {
    font-size: 1.2em;
    text-align: center;
  }
</style>
