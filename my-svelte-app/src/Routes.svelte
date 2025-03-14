<script>
  import { Route } from "svelte-routing";
  import BottomNavBar from "./components/BottomNavBar.svelte";
  import DiscoverPage from "./pages/DiscoverPage.svelte";
  import HomePage from "./pages/HomePage.svelte";
  import MessagePage from "./pages/MessagePage.svelte";
  import ProfilePage from "./pages/ProfilePage.svelte";
</script>

<div class="content-container">
  <Route path="/" component={HomePage} />
  <Route path="/discover" component={DiscoverPage} />
  <Route path="/profile" component={ProfilePage} />
  <Route path="/message" component={MessagePage} />
</div>
<BottomNavBar />

<style>
  .content-container {
    flex: 1;
    overflow-y: auto;
    position: relative;
    padding-bottom: 70px; /* 为底部导航栏留出空间 */
    -webkit-overflow-scrolling: touch;
  }
</style>
