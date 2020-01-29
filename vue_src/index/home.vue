<template>
  <div>
    我是index组件
    <p>下面是引入的npm组件:</p>
    <Com></Com>
  </div>
</template>

<script>
import {Com} from 'com_lx'
export default {
  name: "testCom",
  components: {
    Com
  }
}
</script>
