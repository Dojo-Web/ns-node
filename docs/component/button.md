# Button 按钮
常用的操作按钮。
<!-- | Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 | | -->
::: raw
Wraps in a <div class="vp-raw"><span style="color:red">12</span></div>
:::

# 基础用法
使用  <Badge type="info" text="primary" /> <Badge type="info" text="warning" /><Badge type="info" text="isdisable" /><Badge type="info" text="danger" />  来定义按钮的样式。
<script setup>
import NsButton from "../../packages/button/src/index.vue"
</script>
<div style="padding:30px;border:1px solid #ccc">
    <ns-button>primary</ns-button>
    <ns-button type="primary">default</ns-button>
    <ns-button type="danger">danger</ns-button>
    <ns-button type="warning">warning</ns-button>
    <ns-button isdisable>disable</ns-button>
</div>

::: details 查看源代码
```js
<template>
    <div>
        <ns-button type="primary">primary</ns-button>
        <ns-button type="danger">danger</ns-button>
        <ns-button type="warning">warning</ns-button>
        <ns-button disable>disable</ns-button>
    </div>
</template>
<script lang="ts" setup>
 import NsButton from "../../packages/button/src/index.vue";
</script>
<style scoped></style>
```
:::
  



