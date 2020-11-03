<!--
 * @Author: yzf
 * @Date: 2020-11-03 13:52:33
 * @LastEditTime: 2020-11-04 15:26:13
 * @LastEditors: yzf
 * @Description: os
 * @FilePath: /alex/Volumes/project/hex/jarvis/src/views/os.vue
 * @symbol_custom_string_obkoro1: 大威天龙,世尊地藏,般若诸佛,般若巴麻空,没有bug
-->
<template>
  <div id="os">
    <div class="control">
      <div class="nlp">
        nlp
      </div>
      <div class="assist">
        as
      </div>
    </div>
    <div class="preview">
      <div class="btns" @click="test">
        btn
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "os" ,
  data () {
    return {
      list: []
    }
  },
  methods: {
    test () {

    }
  },
  mounted () {
    this.$log(this)
  }
}
</script>

<style>
#os {
  position: fixed;
}
</style>
