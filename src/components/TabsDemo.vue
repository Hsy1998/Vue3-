<template>
  <div>
    <h1>Tabs 示例</h1>
    <h2>示例1</h2>
    <br />
    <hr />
    <br />
    <Tabs v-model:selected="x">
      <Tab title="导航一">内容一</Tab>
      <Tab title="导航二">内容二</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup(props) {
    const x = ref('导航一')
    return {
      x,
    }
  },
}
</script>

<style></style>
