import NsCheckbox from './src/index.vue'
NsCheckbox.install = (app:any) => {
    // 注册组件
    app.component(NsCheckbox.name, NsCheckbox)
    return app
}
export { NsCheckbox };
export default NsCheckbox;