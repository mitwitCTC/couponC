<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld />
  <div class="content">
    <RouterView />
  </div>
  <div class="noPC fs-3 text-center">
    不支援電腦使用，請改用手機裝置
  </div>
</template>

<style>
#app{
  padding: 0;
}
.content {
  display: block;
}

.noPC {
  display: none;
}

@media (min-width: 768px) {
  .noPC {
    display: block;
  }

  .content {
    display: none;
  }
}
</style>
