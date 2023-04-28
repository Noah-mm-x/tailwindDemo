
<script setup>
// import { Button as VarButton, Paper as VarPaper } from '@varlet/ui'
// import '@varlet/ui/es/button/style/index'
// import '@varlet/ui/es/paper/style/index'
import { ref } from 'vue'
const date = ref('2021-04-08')
const value = ref('')
const change = (val) => {
  console.log(val)
}
</script>

 <template>
  <div>
    <var-button class="mt-[10px] ml-[20px]">说你好</var-button>
    <var-button type="success"
                size="small">
      小型按钮
    </var-button>
    <var-space :size="[10, 10]">
      <var-button color="#66bb6a"
                  text-color="#fff">背景/文字</var-button>
      <var-button color="linear-gradient(to right, #69dbaa, #3a7afe)"
                  text-color="#fff">
        使用渐变
      </var-button>
    </var-space>
    <var-loading type="circle"
                 size="small" />
    <var-paper :elevation="2"
               :width="100"
               :height="100"
               ripple />
    <var-tooltip content="Tooltip">
      <var-button type="primary">基本使用</var-button>
    </var-tooltip>
    <var-date-picker v-model="date"
                     @change="change" />
    <var-input placeholder="请输入文本"
               v-model="value" />
    <var-row>
      <var-col :span="8">span: 8</var-col>
      <var-col :span="8">span: 8</var-col>
      <var-col :span="8">span: 8</var-col>
      <var-col :span="8">span: 8</var-col>
      <var-col :span="8">span: 8</var-col>
      <var-col :span="8">span: 8</var-col>
    </var-row>
    <var-ellipsis style="max-width: 200px">
      其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
    </var-ellipsis>
  </div>
</template>
