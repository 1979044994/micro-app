<script>
  import FaDumbbell from "svelte-icons/fa/FaDumbbell.svelte";
  import FaHome from "svelte-icons/fa/FaHome.svelte";
  import FaUser from "svelte-icons/fa/FaUser.svelte";
</script>

<div class="icon-test">
  <div class="icon"><svelte:component this={FaHome} /></div>
  <div class="icon"><svelte:component this={FaDumbbell} /></div>
  <div class="icon"><svelte:component this={FaUser} /></div>
</div>

<style>
  .icon-test {
    display: flex;
    gap: 20px;
    padding: 20px;
    background: white;
  }

  .icon {
    width: 30px;
    height: 30px;
    color: #59b89d;
  }

  .icon :global(svg) {
    width: 100%;
    height: 100%;
  }
</style>
