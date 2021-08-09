<demo>支持 disabled</demo>
<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'

export default {
  setup() {
    const bool = ref(false)
    return { bool }
  },
  components: {
    Switch,
  },
}
</script>
