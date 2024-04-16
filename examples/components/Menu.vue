<template>
  <div class="menu">
    <div v-for="(item,i) in menuList" :key="i">
        <div class="menu-title">{{item.name}}</div>
        <div>
            <a  v-for="(ele,index) in (item.child || [])" :key="index"><p @click="selectTab(index)" :class="`menu-li ${selectIndex == index ? 'menu-li-select' : ''}`">{{ele.name}}</p></a>
        </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive,onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const selectIndex = ref(0)
const selectTab = (index: number) => {
    selectIndex.value = index
}
const menuList = [
    {
        name: 'Basic 基础组件',
        link: '',
        child:[
            {
                name: 'Button按钮',
                link: '/button',
            },
            {
                name: 'Button按钮1',
                link: '/button',
            }
        ]
    }
]
</script>

<style scoped lang='less'>
.menu {
    width: 100%;
    .menu-title {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px;
        line-height: 24px;
        text-align: left;
    }
    p {
        margin: 0;
    }
    .menu-li {
        color: #606266;
        line-height: 20px;
        font-size: 13px;
        font-weight: 500;
        text-align: left;
        padding:10px 16px ;
        box-sizing: border-box;
    }
    .menu-li:hover {
        color:#409eff;
        cursor: pointer;
    }
    .menu-li.menu-li-select {
        color:#409eff;
        cursor: pointer;
        background-color:rgba( 64, 158, 255 , .1);
        border-radius: 8px
    }
}
</style>