<template>
  <div>
    <h1>Dialog 示例</h1>
    <br />
    <hr />
    <h2>示例1</h2>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible" :ok="confirm">
      <template v-slot:title>
        <strong>大傻逼</strong>
      </template>
      <template v-slot:content><div>左右</div> </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
  components: { Dialog, Button },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const confirm = () => {
      return false
    }
    return {
      visible,
      toggle,
      confirm,
    }
  },
}
</script>

<style></style>
