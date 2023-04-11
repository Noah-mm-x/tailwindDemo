<script setup>
import PublicHeader from './components/PublicHeader.vue'
</script>
<template>
  <PublicHeader></PublicHeader>
  <div class="min-h-screen pt-[40px] bg-white dark:bg-gray-800">
    <router-view></router-view>
  </div>
</template>

