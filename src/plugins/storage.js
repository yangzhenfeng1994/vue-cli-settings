/*
 * @Author: yzf
 * @Date: 2020-11-03 14:01:00
 * @LastEditTime: 2020-11-04 15:09:13
 * @LastEditors: yzf
 * @Description: localstorage
 * @FilePath: /alex/Volumes/project/hex/jarvis/src/plugins/storage.js
 * @symbol_custom_string_obkoro1: 大威天龙,世尊地藏,般若诸佛,般若巴麻空,没有bug
 */

const plugin = {
  install (Vue) {
    if (!Vue.prototype.$storage) {
      Object.defineProperty(Vue.prototype, "$storage", {
        value: {
          get (key) {
            const value = window.localStorage.getItem(key)
            return null || JSON.parse(value)
          },
          set (key, value) {
            try {
              window.localStorage.setItem(key, JSON.stringify(value))
              return true
            } catch (e) {
              return false
            }
          },
          remove (key) {
            const value = window.localStorage.getItem(key)
            window.localStorage.removeItem(key)
            return value
          },
          clear () {
            window.localStorage.clear()
          }
        }
      })
    }
  }
}

export default plugin
