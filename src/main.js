/*
 * @Author: yzf
 * @Date: 2020-11-03 13:37:44
 * @LastEditTime: 2020-11-04 15:13:07
 * @LastEditors: yzf
 * @Description: main
 * @FilePath: /alex/Volumes/project/hex/jarvis/src/main.js
 * @symbol_custom_string_obkoro1: 大威天龙,世尊地藏,般若诸佛,般若巴麻空,没有bug
 */
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import event from "./plugins/event"
import log from "./plugins/log"
import storage from "./plugins/storage"
import axios from "axios"
import VueAxios from "vue-axios"
import ViewUI from "view-design"
import "view-design/dist/styles/iview.css"

Vue.config.productionTip = false

Vue.use(event)
Vue.use(log)
Vue.use(storage)
Vue.use(VueAxios, axios)
Vue.use(ViewUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
