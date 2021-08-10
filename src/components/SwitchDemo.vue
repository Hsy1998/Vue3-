<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="SwitchDemo1" />
    <Demo :component="SwitchDemo2" />
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from './Demo/Switch1.demo.vue'
import SwitchDemo2 from './Demo/Switch2.demo.vue'
import Demo from './Demo/index.vue'
import { ref } from 'vue'

export default {
  setup() {
    return { SwitchDemo1, SwitchDemo2 }
  },
  components: {
    SwitchDemo1,
    SwitchDemo2,
    Demo,
  },
}
</script>
