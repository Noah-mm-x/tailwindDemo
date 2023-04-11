
<script setup>
import Subtitle from "./components/Subtitle.vue"
import { $ref } from "vue/macros"
let pageTitle = $ref('')
pageTitle = '测试页面'
let subtitle = $ref('')
subtitle = '副标题'
const getVal = (val) => {
  console.log('我是子组件的值', val)
}
</script>

<template>
  <div>
    <div class="pl-[10px] pt-[10px] text-[24px] text-center text-gray-800 dark:text-red-800">
      {{ pageTitle }}
    </div>
    <Subtitle :subtitle-txt="subtitle" @log-val="getVal"></Subtitle>
  </div>
</template>
