<template>
  <div class="zeus-tabs">
    <div class="zeus-tabs-nav" ref="container">
      <div
        class="zeus-tabs-nav-item"
        :class="{ selected: title === selected }"
        @click="select(title)"
        :ref="
          (el) => {
            if (title === selected) selectedItem = el
          }
        "
        v-for="(title, index) in titles"
        :key="index"
      >
        {{ title }}
      </div>
      <div class="zeus-tabs-nav-indicator" ref="indicator"></div>
    </div>

    <div class="zeus-tabs-content">
      <component :key="current.props.title" :is="current"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, ref, watchEffect } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default() // 传入的Tab组件
    const selectedItem = ref<HTMLDivElement>(null) // 选中的title
    const indicator = ref<HTMLDivElement>(null) // 移动的下划线
    const container = ref<HTMLDivElement>(null) // 整个tabs-nav

    onMounted(() => {
      watchEffect(() => {
        // watchEffect会在挂载前执行，所以拿不到DOM，将watchEffect放在onMounted里执行
        const { width } = selectedItem.value.getBoundingClientRect() // getBoundingClientRect能获取element的宽、高、左、右
        const { left: left1 } = container.value.getBoundingClientRect()
        const { left: left2 } = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1 + 'px'
        indicator.value.style.width = width + 'px'
        indicator.value.style.left = left // 点击之后下标的滑动距离
      })
    })
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected)
    })
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须为 Tab')
      }
    })
    const titles = defaults.map((item) => {
      return item.props.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }

    return {
      defaults,
      titles,
      select,
      current,
      selectedItem,
      indicator,
      container,
    }
  },
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.zeus-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
