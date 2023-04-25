<script setup>
import { useAttrs } from 'vue'
const attrs = useAttrs()
console.log('attrs', attrs)

const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})
const emit = defineEmits(['update:modelValue'])

function emitValue (e) {
  let value = e.target.value
  console.log('props.modelModifiers', props.modelModifiers)
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <p class="text-gray-100">{{$attrs}}</p>
  <input type="text"
         :value="modelValue"
         @input="emitValue" />
</template>
