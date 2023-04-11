import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    {
      reactivityTransform: true,
    }
  )],
  // 不知道网上其他人为啥要这么写，可能是版本问题吧，我这么写会报错
  // css: {
  //   postcss: {
  //     plugins: [
  //       require("tailwindcss"),
  //       require("autoprefixer"),
  //     ]
  //   }
  // }
  resolve: {
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      // 键必须以斜线开始和结束
      '@': resolve(__dirname, './src')
    },
  }
})
