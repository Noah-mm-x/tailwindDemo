
<script setup>
const props = defineProps({
  subtitleTxt: {
    type: String
  }
})
const emit = defineEmits(['logVal'])
const logTxt = () => {
  emit('logVal', '子组件的信息')
}
</script>

<template>
  <div class="mt-[10px] pl-[15px] text-active-normal dark:text-gray-200" @click="logTxt()">
    {{ subtitleTxt }}
  </div>
</template>
