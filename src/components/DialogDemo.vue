<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Demo from './Demo/index.vue'
import Dialog1Demo from './Demo/Dialog1.demo.vue'
import Dialog2Demo from './Demo/Dialog2.demo.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    }
  },
}
</script>
