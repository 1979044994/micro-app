import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 设置文件./src路径为 @
    alias: {
      '@': resolve('src')
    }
  },
  server:{
    host:'0.0.0.0',
    port:3002,
    open:true
  }
})
