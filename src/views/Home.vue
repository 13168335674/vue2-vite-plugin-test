<!--
 * @Author       : ADI
 * @Date         : 2021-04-03 12:49:20
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 15:17:21
-->
<template>
  <div class="home">
    <h2 class="test-sass">Test sass variables</h2>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.test-sass {
  font-size: $--font-size-large;
  color: $--color-primary;
}
</style>
