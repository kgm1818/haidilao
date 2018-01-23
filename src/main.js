import Vue from 'vue'
// import ElementUI from 'element-ui'
import App from './App.vue'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
import router from './router'
import store from './store'
Vue.config.productionTip = false
new Vue({
    name: 'app',
    el: '#app',
    router,
    store,
    render: h => h(App)
})