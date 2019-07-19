<template>
  <div class="msite">
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <ShopList></ShopList>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../components/HeaderTop/HeaderTop'
import ShopList from '../components/ShopList/ShopList'
export default {
  mounted () {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
  computed: {
    ...mapState(['address', 'categorys', 'shops'])
  },
  components: {
    HeaderTop,
    ShopList
  }
}
</script>
<style lang="less">
.msite {
  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
    .icon-sousuo {
      font-size: 25px;
      color: #fff;
    }
  }
  .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    .header_login_text {
      color: #fff;
    }
  }
}
</style>
