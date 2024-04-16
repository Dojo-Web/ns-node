import NsDivSlot from './src/index.vue'
NsDivSlot.install = (app:any) => {
    // 注册组件
    app.component(NsDivSlot.name, NsDivSlot)
    return app;
}
export { NsDivSlot };
export default NsDivSlot;