<template>
  <div class="layout">
    <div class="layout-header">
       
    </div>
    <div class="layout-main">
        <div class="layout-left">
             <Menu></Menu>
        </div>
        <div class="layout-right">
            <router-view />
        </div>
    </div>
    
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive,onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import Menu from './Menu.vue'
</script>

<style scoped lang='less'>
.layout {
    height: 100%;
    width: 100%;
    .layout-header {
        height: 55px;
        width: 100%;
        background: #ccc;
    }
    .layout-main {
        height: calc(100% - 55px);
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .layout-left {
        height: 100%;
        width: 266px;
        padding: 0 32px;
        box-sizing: border-box;
          padding-top: 20px;
        box-sizing: border-box;
    }
    .layout-right {
        flex: 1;
        padding: 20px 20px 0 20px;
        box-sizing: border-box;
    }
}
</style>