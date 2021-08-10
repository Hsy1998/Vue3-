<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <div class="wrapper" v-if="menuVisible" @click.self="toggleMenu">
        <aside>
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安裝</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始使用</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </aside>
      </div>

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
import { inject, Ref } from 'vue'
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible') // get
    const width = document.documentElement.clientWidth
    const toggleMenu = () => {
      if (width < 500) {
        menuVisible.value = false
      }
    }
    return { menuVisible, toggleMenu }
  },
}
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: fade_out(black, 0.5);
  z-index: 10;
  @media (min-width: 500px) {
    background: fade-out($color: #000000, $amount: 1);
  }
}
aside {
  background: white;
  width: 150px;
  position: fixed;
  z-index: 7;
  top: 0;
  left: 0;
  padding-top: 20px;
  height: 100%;
  @media (min-width: 500px) {
    box-shadow: 1px 0 10px rgba($color: #000000, $alpha: 0.1);
  }
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      a {
        display: block;
        padding: 8px 16px;
        text-decoration: none; // 删除a标签点击时的下划线
      }
      .router-link-active {
        background: rgb(245, 245, 245);
      }
    }
    // > li:active {
    //   background: #e4e2e2;
    // }
  }
}
main {
  overflow: auto;
}
</style>
