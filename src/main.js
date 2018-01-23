import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.use(MintUI)
Vue.config.productionTip = false
new Vue({
    name: 'app',
    el: '#app',
    router,
    store,
    render: h => h(App)
})