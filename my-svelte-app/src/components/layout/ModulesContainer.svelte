<script>
  // 容器组件接收子组件作为插槽内容
</script>

<div class="modules-container">
  <slot></slot>
</div>

<style>
  .modules-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  /* 响应式布局 */
  @media (min-width: 992px) {
    .modules-container {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
</style>
