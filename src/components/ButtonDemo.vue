<template>
  <div>
    <p>Button示例</p>
    <h2>示例1</h2>
    <hr />
    <Button>你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>

    <h2>示例2</h2>
    <hr />
    <div>
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普普通</Button>
      <Button theme="link" size="small">小小小</Button>
    </div>
    <div>
      <Button theme="text" size="big">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button theme="text" size="small">小小小</Button>
    </div>
  </div>

  <h2>示例3</h2>
  <hr />
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>普通禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文字按钮</Button>
  </div>
  <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
    <Button loading level="main">加载中</Button>
    <Button loading level="danger">加载中</Button>
    <Button>普通按钮</Button>
  </div>
</template>

<script>
import Button from '../lib/Button.vue'
export default {
  components: {
    Button,
  },
}
</script>

<style></style>
