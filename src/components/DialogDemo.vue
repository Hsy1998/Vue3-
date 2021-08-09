<template>
  <div>
    <h1>Dialog 示例</h1>
    <br />
    <hr />
    <h2>示例1</h2>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible" :ok="confirm">
      <template v-slot:title>
        <strong>标题</strong>
      </template>
      <template v-slot:content><div>你好</div> </template>
    </Dialog>
    <div>
      <h2>示例2</h2>
      <Button @click="showDialog">openDialog</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref, h } from 'vue'
import { openDialog } from '../lib/openDialog'
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
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        },
        closeOnClickOverlay: false,
      })
    }
    return {
      visible,
      toggle,
      confirm,
      showDialog,
    }
  },
}
</script>

<style></style>
