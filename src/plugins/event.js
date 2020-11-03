/*
 * @Author: yzf
 * @Date: 2020-11-03 14:01:00
 * @LastEditTime: 2020-11-04 15:07:40
 * @LastEditors: yzf
 * @Description: eventBus
 * @FilePath: /alex/Volumes/project/hex/jarvis/src/plugins/event.js
 * @symbol_custom_string_obkoro1: 大威天龙,世尊地藏,般若诸佛,般若巴麻空,没有bug
 */

const plugin = {
  install (Vue) {
    if (!Vue.prototype.$event) {
      Object.defineProperty(Vue.prototype, "$event", {
        value: new Vue()
      })
    }
  }
}

export default plugin
