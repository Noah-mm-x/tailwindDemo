
<script setup>
import Subtitle from "./components/Subtitle.vue";
import MyInput from "./components/MyInput.vue";
import { $ref } from "vue/macros";
import { computed, reactive, watch, ref, isRef } from "vue";

let pageTitle = $ref("");
pageTitle = "测试页面";
console.log('isRef', isRef(pageTitle))

let numTmp = ref(0)
console.log('isRef', isRef(numTmp))

let subtitle = $ref("");
subtitle = "副标题";
const getVal = (val) => {
  console.log("我是子组件的值", val);
};

let obj = reactive({ count: 0 })
const handleAddObjCount = () => {
  obj.count++
}
// 这样写不生效
// watch(obj.count, (count) => console.log(count))
watch(() => obj.count, (count) => console.log('obj.count', count))

let count = $ref(0)
const handelAddCount = () => {
  count++
}
watch(() => count, (count) => console.log('count', count))

let computedNum = computed(() => {
  return count > 10 ? '十' : '个'
})

let myText = $ref('')
</script>

<template>
  <div>
    <div class="pl-[10px] pt-[10px] text-[24px] text-center text-gray-800 dark:text-red-800">
      {{ pageTitle }}
    </div>
    <Subtitle :subtitle-txt="subtitle"
              @log-val="getVal">
    </Subtitle>
    <div class=" w-[40px] h-[40px] text-[24px] text-center bg-gray-300 text-gray-900">
      {{ obj.count }}
    </div>
    <div class="text-gray-100">计算的值：{{computedNum}}</div>
    <div class=" w-[40px] h-[40px] text-[24px] text-center bg-gray-200 text-gray-900">
      {{ count }}
    </div>
    <div class="flex justify-start mt-[30px] pl-[20px] text-gray-100">
      按钮组：
      <a href="javascript:;"
         class="btn hover:bg-red-700"> 按钮一 </a>
      <a href="javascript:;"
         class="btn"
         @click="handleAddObjCount"> 自增obj </a>
      <a href="javascript:;"
         class="btn"
         @click="handelAddCount"> 自增count </a>
    </div>
    <!-- 输入框 -->
    <!--  hh-aa="aa" 是我测试用的，这样可以传值进去哈哈 -->
    <MyInput class="mt-[20px] ml-[10px]"
             hh-aa="aa"
             v-model.capitalize="myText" />
  </div>
</template>
<style>
/* dark: bg-active-dark dark:text-active-normal */
.btn {
  @apply flex justify-center items-center ml-[10px] w-[60px] h-[40px] rounded bg-gray-700 text-gray-200 text-[12px] dark:bg-active-dark hover:bg-gray-300;
}
</style>
