<template>
  <div>
    <ShopHeard></ShopHeard>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods">点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info">信息</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import ShopHeard from "../../components/ShopHeard";
export default {
  components: {
    ShopHeard
  }
};
</script>
<style lang="less">
.tab {
    height: 40px;
    line-height: 40px;
    background: #fff;
    .tab-item {
        float: left;
        width: 33.3333%;
        text-align: center;
        font-size: 14px;
        color: rgb(77, 85, 93);
        a {
            color: #000;
            display: block;
            position: relative;
            &.router-link-active {
                color: #02a774;
                &::after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: 1px;
                    width: 35px;
                    height: 2px;
                    transform: translateX(-50%);
                    background: #02a774;
                }
            }
        }
    }
}
</style>
