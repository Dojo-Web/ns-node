<template>
  <button :disabled="disable" :class="`ns-button  ns-button-${type} ${disable ? 'is-disable' : '' }`">
    <span> <slot></slot></span>
  </button>
</template>

<script lang='ts' setup>
import { ref, reactive,onMounted, useAttrs } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const attrs: any = useAttrs()
const disable = ref(false)
defineProps({
    type: {
        type: String || undefined,
        default: '' 
    },
    disable: {
        type: Boolean,
        default: false
    }
})
const disabledStatus: any = {
    '': true,
    undefined: false,
    null: false,
    true: true,
    false: false
}
onMounted(() => {
    disable.value =  disabledStatus[attrs.disabled] || false
})
defineOptions({
    name: 'NsButton'
})
</script>
<style scoped lang='less'>
.ns-button {
    display: inline-block;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #dcdfe6 ;
    padding: 8px 15px;
    outline: none;
    border-color: #dcdfe6;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
    font-weight: 500;
    cursor: pointer;
}

.ns-button.ns-button-primary {
    color: #ffffff;
    background: #409eff;
}
.ns-button.ns-button-danger {
    color: #ffffff;
    background: #f56c6c;
}
.ns-button.ns-button-warning {
    color: #ffffff;
    background: #e6a23c;
}
.ns-button.is-disable {
    cursor: not-allowed;
}
</style>