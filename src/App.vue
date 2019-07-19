<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  mounted () {
  // this.$store.dispatch('getAddress') 在组件中分发action
    this.getAddress()
    this.getCategorys()
    this.getshops()
  },
  methods: {
  // 使用mapAction辅助函数将组件的methods映射为store.dispatch调用
    ...mapActions(['getAddress','getCategorys','getshops'])
  },
  components: {
    FooterGuide
  }
}
</script>
<style lang="less">
</style>
