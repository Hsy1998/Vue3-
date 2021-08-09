<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-zeus"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <span
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
      @click="toggleMenu"
    >
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible') // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return { toggleMenu }
  },
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    > svg {
      width: 22px;
      height: 22px;
    }
  }
  @media (max-width: 500px) {
    .menu {
      display: none;
    }
    .logo {
      margin: 0 auto;
    }
    .toggleAside {
      display: block;
    }
  }
}
</style>
