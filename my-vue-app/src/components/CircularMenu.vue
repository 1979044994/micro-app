<template>
  <div class="menu-container" @click.prevent.stop="toggleMenu">
    <div class="menu-button">+</div>
    <div class="menu-item" @click="handleRouter(item.route)" v-for="(item, index) in props.child" :key="index"
      :style="getItemStyle(index)">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const items = ref(['A', 'B', 'C', 'D', 'E']);
const isOpen = ref(false);
const props = defineProps(['child'])
const toggleMenu = () => {
  event.preventDefault()
  isOpen.value = !isOpen.value;
};
const router = useRouter()

const route = useRoute()
const handleRouter = (to) => {
  if (isOpen.value) {
    router.push(to)
  }
}

const getItemStyle = (index) => {
  if (!isOpen.value) return { transform: 'rotate(0deg) translate(0px)' };
  const totalItems = items.value.length;
  const angle = (index / totalItems) * 90; // 1/4 圆形
  const radius = 100; // 菜单半径
  const radian = (angle * Math.PI) / 180;
  const x = Math.cos(radian) * radius;
  const y = Math.sin(radian) * radius;
  const size = 40 - totalItems; // 动态调整大小
  return {
    width: `${size}px`,
    height: `${size}px`,
    transform: `translate(${x}px, ${-y}px) rotate(${angle}deg)`,
    transition: `transform 0.3s ${index * 0.1}s`,
    'font-size': `${size / 2}px`,
    'line-height': `${size}px`
  };
}

</script>

<style scoped>
.menu-container {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  z-index: 99999;
}

.menu-button {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s;
}

.menu-item {
  position: absolute;
  background-color: #e74c3c;
  border-radius: 50%;
  display: flex;
  width: 35px;
  cursor: pointer;
  text-decoration: none;
  height: 35px;
  justify-content: center;
  align-items: center;
  color: white;
  transition: transform 0.3s;
}
</style>
