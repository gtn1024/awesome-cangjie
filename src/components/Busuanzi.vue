<script setup lang="ts">
import busuanzi from 'busuanzi.pure.js'
import { onMounted } from 'vue'

onMounted(() => {
  busuanzi.fetch()
})
</script>

<template>
  <p class="busuanzi flex gap-2 justify-center text-muted-foreground">
    <span id="busuanzi_container_site_pv" style="display: none">
      本站总访问量
      <span id="busuanzi_value_site_pv" />
      次
    </span>
    <span id="busuanzi_container_site_uv" style="display: none">
      本站访客数
      <span id="busuanzi_value_site_uv" />
      人
    </span>
  </p>
</template>
