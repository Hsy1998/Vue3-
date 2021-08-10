<template>
  <div>
    <h1>Tabs 示例</h1>
    <Demo :component="Tab1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from './Demo/index.vue'
import Tab1Demo from './Demo/Tab1.demo.vue'
export default {
  components: {
    Demo,
  },
  setup(props) {
    return {
      Tab1Demo,
    }
  },
}
</script>

<style></style>
