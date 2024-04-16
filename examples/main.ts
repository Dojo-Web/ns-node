import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import 'normalize.css'
import './utils/css/global.css'
// import NsNode from '../dist/ns-node'
// import '../dist/index.css'
// console.log('NsNode',NsNode).use(NsNode).
createApp(App).use(store).use(router).mount('#app')
