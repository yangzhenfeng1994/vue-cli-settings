<!--
 * @Author: yzf
 * @Date: 2020-11-03 13:38:14
 * @LastEditTime: 2020-11-04 15:18:58
 * @LastEditors: yzf
 * @Description: 说明,请仔细阅读
 * @FilePath: /alex/Volumes/project/hex/jarvis/README.md
 * @symbol_custom_string_obkoro1: 大威天龙,世尊地藏,般若诸佛,般若巴麻空,没有bug
-->
# jarvis

通过yarn锁定版本,包管理工具统一使用yarn
禁止私自添加全局依赖,需要添加全局依赖找leader添加
禁止使用console,需要打印使用全局方法$log
已经全局开启eslit git验证,禁止文件层面disabled,特殊情况单行disabled,具体配置见package.json
样式库全局引用iview,禁止引入其它全局库
图表库全局引入echarts
ajax引入axios
单文件原则上不能超过500行代码,超出请拆解文件与方法,方便后期维护

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
