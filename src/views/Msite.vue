<template>
  <div class="msite">
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/profile' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(minArr,index) in categorysArr" :key="index">
            <a to="/shop" class="link_to_food" v-for="(category,index) in minArr" :key="index">
              <div class="food_container">
                <img :src="baseImgUrl + category.image_url" alt="">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- 使用svg显示加载中提示界面 -->
      <img src="../assets/images/msite_back.svg" alt="back" v-else>
    </nav>
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
  data () {
    return {
      baseImgUrl: 'http://fuss10.elemecdn.com'
    }
  },
  computed: {
    ...mapState(['address', 'categorys', 'shops', 'userInfo']),
    // 根据从state中得到的categorys生成一个二维数组（装载轮播图）
    categorysArr () {
      const { categorys } = this
      const arr = [] // 准备空的二维数组
      let minArr = [] // 二维数组中的成员小数组，即轮播图的页数
      categorys.forEach(c => {
        if (minArr.length === 8) { // 如果当前minArr已经满了，创建一个新的空数组
          minArr = []
        }
        if (minArr.length === 0) { // 如果minArr是空的，将小数组保存到二维数组中
          arr.push(minArr)
        }
        minArr.push(c) // 将state中的categorys数据遍历保存在minArr中
      })
      return arr
    }
  },
  // Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性
  // 键是需要观察的表达式，值是对应回调函数
  // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
  watch: {
    categorys () {
      // categorys修改后立即执行$nextTick，即界面更新完成立即调用
      this.$nextTick(() => {
        // 将回调延迟到下次 DOM 更新循环之后执行，即在界面更新后立即创建Swiper对象
        new Swiper('.swiper-container', {
          loop: true, // 可以循环轮播
          pagination: { // 分页器
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  components: {
    HeaderTop,
    ShopList
  }
}
</script>
<style lang="less" rel="stylesheet/less">
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
  .msite_nav {
    position: relative;
    margin-top: 45px;
    height: 200px;
    background: #fff;
    &::before {
      content: '';
      position: absolute;
      z-index: 200;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #e4e4e4;
      transform: scaleY(0.5);
    }
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-wrapper {
        width: 100%;
        height: 100%;
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          .link_to_food {
            width: 25%;
            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;
              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }
            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }
      .swiper-pagination >span.swiper-pagination-bullet-active {
        background: #02a774;
      }
    }
  }
}
</style>
