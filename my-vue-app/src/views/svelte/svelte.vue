<template>
  <div>
    <micro-app
      name='app-svelte'
      url='http://10.225.21.41:3001/'
      :data='microAppData'
      iframe
      @created='handleCreate'
      @beforemount='handleBeforeMount'
      @mounted='handleMount'
      @unmount='handleUnmount'
      @error='handleError'
      @datachange='handleDataChange'
    ></micro-app>
  </div>
</template>

<script lang="ts">
import { EventCenterForMicroApp } from '@micro-zoe/micro-app'


// @ts-ignore 因为vite子应用关闭了沙箱，我们需要为子应用appname-vite创建EventCenterForMicroApp对象来实现数据通信
window.eventCenterForAppNameVite = new EventCenterForMicroApp('appname-vite')

export default {
  name: 'app-svelte',
  data () {
    return {

      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate (): void {
      console.log('child-svelte 创建了')
    },

    handleBeforeMount (): void {
      console.log('child-svelte 即将被渲染')
    },

    handleMount (): void {
      console.log('child-svelte 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount (): void {
      console.log('child-svelte 卸载了')
    },

    handleError (): void {
      console.log('child-svelte 加载出错了')
    },

    handleDataChange (e: CustomEvent): void {
      console.log('来自子应用 child-svelte 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
