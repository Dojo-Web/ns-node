<template>
 <div class="ksis"><slot></slot></div>
</template>

<script lang='ts' setup>
import { ref, reactive,onMounted, useAttrs } from 'vue';
import { useRouter, useRoute } from 'vue-router'

defineOptions({
    name: 'NsDivSlot'
})
</script>
<style scoped lang='less'>

</style>