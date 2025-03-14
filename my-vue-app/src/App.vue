<script setup>
import CircularMenu from "./components/CircularMenu.vue";
import { reactive } from "vue";
const child = reactive([
  { name: "R", route: "/app-react" },
  { name: "S", route: "/app-svelte" },
  { name: "V", route: "/app-vue" },
  { name: "A", route: "/app-admin" },
]);
</script>

<template>
  <CircularMenu :child="child" />
  <router-view></router-view>
</template>

<style scoped>
.change {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #316c72ff;
}
</style>
