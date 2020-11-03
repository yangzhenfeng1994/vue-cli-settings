/*
 * @Author: yzf
 * @Date: 2020-11-03 14:01:00
 * @LastEditTime: 2020-11-04 15:07:23
 * @LastEditors: yzf
 * @Description: log
 * @FilePath: /alex/Volumes/project/hex/jarvis/src/plugins/log.js
 * @symbol_custom_string_obkoro1: 大威天龙,世尊地藏,般若诸佛,般若巴麻空,没有bug
 */

const plugin = {
  install (Vue) {
    if (!Vue.prototype.$log) {
      Object.defineProperty(Vue.prototype, "$log", {
        value (...args) {
          if (process.env.NODE_ENV !== "production") {
            // eslint-disable-next-line no-console
            console.log(...args)
          }
        }
      })
    }
  }
}

export default plugin
