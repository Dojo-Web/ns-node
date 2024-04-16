import { App } from 'vue'
// const requireModules = require.context('../packages/', true, /index\.vue/);
// console.log('requireModules',requireModules, requireModules.keys())
import NsButton from '../packages/button/index.ts'
import NsCheckbox from '../packages/checkbox/index.ts'
import NsDivSlot from '../packages/div-slot/index.ts'
const components = [NsButton,NsCheckbox,NsDivSlot]
// // 定义 install 方法， App 作为参数
const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
}
export {
    NsButton,
    NsCheckbox,
    NsDivSlot
}
export default {
    install,
    NsButton,
    NsCheckbox,
    NsDivSlot
};