<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
   <div class="change">
    <RouterLink to="/app-react">Go to React</RouterLink>
    <RouterLink to="/app-svelte">Go to SVELTE</RouterLink>
    <RouterLink to="/app-vue">Go to VUE2</RouterLink>
  </div>
<router-view></router-view>
</template>

<style scoped>
.change{
  display: flex;
  flex-direction: column;
}
</style>
