
<script setup>
let mode = $ref('')
mode = localStorage.theme
const setDark = () => {
  mode = 'dark'
  localStorage.theme = 'dark'
  document.documentElement.classList.add('dark')
}
const setNormal = () => {
  mode = ''
  localStorage.theme = ''
  document.documentElement.classList.remove('dark')
}
const switchMode = () => {
  mode === 'dark' ? setNormal() : setDark()
  // if (mode === 'dark') {
  //   setNormal()
  // } else {
  //   setDark()
  // }
}
const switchSystem = () => {
  const darkBySystem = window.matchMedia('(prefers-color-scheme: dark)').matches
  darkBySystem ? setDark() : setNormal()
}
</script>

<template>
  <div class="w-full absolute">
    <div
      class="h-[40px] flex justify-between items-center px-[15px] bg-gray-200 dark:bg-gray-800 border-b-2 border-purple-200 dark:border-purple-800">
      <router-link to="/">
        <p class="text-active-normal dark:text-active-dark">logo</p>
      </router-link>
      <div class="flex justify-start">
        <a href="javascript:;" class="text-active-normal dark:text-gray-200" @click="switchMode">切换主题</a>
        <a href="javascript:;" class="text-active-normal dark:text-gray-200 pl-[10px]" @click="switchSystem">系统</a>
      </div>
    </div>
  </div>
</template>
