# 快速上手

本节将介绍如何在项目中使用 ns-node

## 用法
### 完整引入

```js
// main.ts
import { createApp } from 'vue'
import NsNode from 'ns-node'
import 'ns-node/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(NsNode)
app.mount('#app')

```

## 按需导入
接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.ts 中写入以下内容：

```js
// main.ts
import { createApp } from 'vue'
import {NsButton} from 'ns-node'
import App from './App.vue'

const app = createApp(App)

app.use(NsButton)
app.mount('#app')

```
或
```js{20}

<template>
  <div>
    <ns-button >按钮</ns-button>
  </div>
<template>

<script lang="ts" setup>
 import NsButton from 'ns-node'
</script>
<style>
  @import('ns-node/button/index.css')
</style>
```
完整组件列表和引入方式（完整组件列表以 [components.json](http://www.na.com) 为准）
````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

<!-- ## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown) -->
