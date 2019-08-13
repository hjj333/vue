<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" v-for="(good, index) in goods" :key="index"
              :class="{current: index === currentIndex}" @click="clickMenuItem(index)">
            <span class="text">
              <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item" v-for="(food, index) in good.foods" :key="index" @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart></ShopCart>
    </div>
    <Food :food="food" ref="food"></Food>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
import CartControl from '../../components/CartControl/CartControl'
import Food from '../../components/Food/Food'
import ShopCart from '../../components/ShopCart/ShopCart'
export default {
  data () {
    return {
      scrollY: 0, // 右侧滑动的Y轴坐标
      tops: [], // 所有右侧分类li的top组成的数组
      food: {}
    }
  },
  mounted () {
    // 派发actions
    this.$store.dispatch('getShopGoods', () => {
      this.$nextTick(() => {
        // 列表界面显示后创建
        new BScroll('.menu-wrapper', {
          click: true
        })
        this.foodsScroll = new BScroll('.foods-wrapper', {
          probeType: 2, // 因为惯性滑动不会触发
          click: true // 允许点击事件
        })
        // 给右侧列表绑定scroll监听
        this.foodsScroll.on('scroll', ({ x, y }) => {
          this.scrollY = Math.abs(y)
        })
        // 给右侧列表绑定scroll结束监听，获得Y轴滑动距离
        this.foodsScroll.on('scrollEnd', ({ x, y }) => {
          this.scrollY = Math.abs(y)
        })
        // 收集tops的值
        let top = 0
        this.tops.push(top)
        const lis = this.$refs.foodsUl.children
        Array.prototype.slice.call(lis).forEach(li => {
          top += li.clientHeight
          this.tops.push(top)
        })
      })
    })
  },
  computed: {
    ...mapState(['goods']),
    currentIndex () {
      const { scrollY, tops } = this
      const index = tops.findIndex((top, index) => {
        return scrollY >= top && scrollY < tops[index + 1]
      })
      return index
    }
  },
  methods: {
    clickMenuItem (index) {
      const y = this.tops[index]
      this.scrollY = y
      this.foodsScroll.scrollTo(0, -y, 300)
    },
    showFood (food) {
      // 点击设置food
      this.food = food
      // 显示food组件
      this.$refs.food.toggleShow()
    }
  },
  components: {
    CartControl,
    Food,
    ShopCart
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  .goods {
    display: flex;
    position: absolute;
    top: 250px;
    bottom: 46px;
    width: 100%;
    background: #fff;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      ul {
        padding: 0;
        .menu-item {
          display: table;
          height: 54px;
          width: 56px;
          line-height: 14px;
          &.current {
            position: relative;
            z-index: 10;
            margin-top: -1px;
            background: #fff;
            color: #02a774;
            font-weight: 700;
          }
          .icon {
              display: inline-block;
              vertical-align: top;
              width: 12px;
              height: 12px;
              margin-right: 2px;
              background-size: 12px 12px;
              background-repeat: no-repeat;
          }
          .text {
              display: table-cell;
              width: 56px;
              vertical-align: middle;
              font-size: 12px;
          }
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      ul {
        padding: 0;
        margin: 0;
        .title {
          padding-left: 14px;
          height: 26px;
          line-height: 26px;
          border-left: 2px solid #d9dde1;
          font-size: 12px;
          color: rgb(147, 153, 159);
          background: #f3f5f7;
        }
        .food-item {
          display: flex;
          margin: 18px;
          padding-bottom: 18px;
          &:last-child {
            margin-bottom: 0;
          }
          .icon {
            flex: 0 0 57px;
            margin-right: 10px;
           }
          .content {
            flex: 1;
            .name {
              margin: 2px 0 8px 0;
              height: 14px;
              line-height: 14px;
              font-size: 14px;
              color: rgb(7, 17, 27);
            }
            .desc, .extra {
              line-height: 10px;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
            .desc {
              line-height: 12px;
              margin-bottom: 8px;
            }
            .extra {
              .count {
                margin-right: 12px;
              }
            }
            .price {
              font-weight: 700;
              line-height: 24px;
              .now {
                margin-right: 8px;
                font-size: 14px;
                color: rgb(240, 20, 20);
              }
              .old {
                text-decoration: line-through;
                font-size: 10px;
                color: rgb(147, 153, 159);
              }
            }
            .cartcontrol-wrapper {
              position: absolute;
              right: 0;
              top: 120px;
            }
          }
        }
      }
    }
  }
</style>
