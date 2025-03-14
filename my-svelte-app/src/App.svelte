<script>
  import { Router } from "svelte-routing";
  import Routes from "./Routes.svelte";

  export let url = "";
</script>

<main class="app-container">
  <Router {url}>
    <Routes />
  </Router>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family:
      "SF Pro Text",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      sans-serif;
    background-color: #f9f9fa;
    color: #2c3e50;
    overscroll-behavior-y: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(.page-title) {
    font-size: 28px;
    font-weight: 700;
    margin: 20px 0;
    letter-spacing: -0.5px;
  }

  :global(.card) {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    padding: 18px;
    margin-bottom: 16px;
  }

  :global(.icon-container svg) {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  .app-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 500px;
    margin: 0 auto;
    background-color: #f9f9fa;
  }

  .content-container {
    flex: 1;
    overflow-y: auto;
    position: relative;
    padding-bottom: 70px; /* 为底部导航栏留出空间 */
    -webkit-overflow-scrolling: touch;
  }
</style>
