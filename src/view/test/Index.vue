
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
    <Subtitle :subtitle-txt="subtitle"
              @log-val="getVal">
    </Subtitle>
    <div class="flex justify-start mt-[30px] pl-[20px]">
      按钮组：
      <a href="javascript:;"
         class="btn">
        按钮一
      </a>
      <a href="javascript:;"
         class="btn">
        按钮二
      </a>
      <a href="javascript:;"
         class="btn">
        按钮三
      </a>
    </div>
  </div>
</template>
<style>
/* dark: bg-active-dark dark:text-active-normal */
.btn {
  @apply flex justify-center items-center ml-[10px] w-[60px] h-[40px] rounded bg-gray-700 text-gray-200 text-[12px] dark:bg-active-dark;
}
</style>
