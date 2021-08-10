<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <component :is="SwitchDemo1" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{ SwitchDemo1.__sourceCode }}</pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled</h2>
      <div class="demo-component">
        <component :is="SwitchDemo2" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre
          class="language-html"
          v-html="
            Prism.highlight(
              SwitchDemo2.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from '../components/SwitchDemo1.vue'
import SwitchDemo2 from '../components/SwitchDemo2.vue'
import { ref } from 'vue'
import Button from '../lib/Button.vue'
import 'prismjs'
// import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism

console.log(Prism)

export default {
  setup() {
    const bool = ref(false)
    const disabled = ref(false)
    return { bool, disabled, SwitchDemo1, SwitchDemo2, Prism }
  },
  components: {
    Button,
    SwitchDemo1,
    SwitchDemo2,
  },
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
<style lang="scss">
@import 'prismjs/themes/prism.css';
</style>
