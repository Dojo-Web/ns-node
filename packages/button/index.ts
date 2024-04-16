import NsButton from './src/index.vue'
NsButton.install = (app:any) => {
    // 注册组件
    app.component(NsButton.name, NsButton)
    return app
}
export { NsButton };
export default NsButton;