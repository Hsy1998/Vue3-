// 告诉ts如何理解.vue文件
declare module '*.vue' {
  import { ComponentOptions } from "vue"
  const componentOptions :ComponentOptions
  export default componentOptions
}