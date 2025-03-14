<script>
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";

  export let transitionType = "forward";

  const transitions = {
    forward: { x: 300, duration: 300, opacity: 0 },
    backward: { x: -300, duration: 300, opacity: 0 },
  };
</script>

<div class="transition-container">
  {#key $$slots.default}
    <div
      in:fly={{
        ...transitions[transitionType],
        delay: 0,
        easing: quintOut,
      }}
      out:fly={{
        ...transitions[transitionType === "forward" ? "backward" : "forward"],
        duration: 200,
        easing: quintOut,
      }}
    >
      <slot></slot>
    </div>
  {/key}
</div>

<style>
  .transition-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  div {
    width: 100%;
    height: 100%;
  }
</style>
