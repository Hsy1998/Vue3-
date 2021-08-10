<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
  </div>
</template>

<script>
import Demo from './Demo/index.vue'
import Button1Demo from './Demo/Button1.demo.vue'
import Button2Demo from './Demo/Button2.demo.vue'
import Button3Demo from './Demo/Button3.demo.vue'
import Button4Demo from './Demo/Button4.demo.vue'
import Button5Demo from './Demo/Button5.demo.vue'
export default {
  components: {
    Demo,
  },
  setup(props) {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    }
  },
}
</script>

<style></style>
