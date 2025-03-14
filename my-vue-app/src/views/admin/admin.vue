<template>
  <div class="app-permission">
    <micro-app name='app-admin' url='http://10.225.21.41:9527' :data='microAppData' @created='handleCreate'
      @beforemount='handleBeforeMount' @mounted='handleMount' iframe @unmount='handleUnmount' @error='handleError'
      @datachange='handleDataChange'></micro-app>
  </div>
</template>

<script lang="ts">

export default {
  name: 'app-admin',
  data() {
    return {

      microAppData: { msg: '来自基座的数据' }
    }
  },
  methods: {
    handleCreate(): void {
      console.log('child-admin 创建了')
    },

    handleBeforeMount(): void {
      console.log('child-admin 即将被渲染')
    },

    handleMount(): void {
      console.log('child-admin 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = { msg: '来自基座的新数据' }
      }, 2000)
    },

    handleUnmount(): void {
      console.log('child-admin 卸载了')
    },

    handleError(): void {
      console.log('child-admin 加载出错了')
    },

    handleDataChange(e: CustomEvent): void {
      console.log('来自子应用 child-admin 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
.app-permission {
  min-height: 100vh;
}
</style>
