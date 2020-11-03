/*
 * @Author: yzf
 * @Date: 2020-11-03 13:37:44
 * @LastEditTime: 2020-11-04 13:54:23
 * @LastEditors: yzf
 * @Description: router
 * @FilePath: /alex/Volumes/project/hex/jarvis/src/router/index.js
 * @symbol_custom_string_obkoro1: 大威天龙,世尊地藏,般若诸佛,般若巴麻空,没有bug
 */
import Vue from "vue"
import VueRouter from "vue-router"
import Os from "../views/os.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Os",
    component: Os
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
