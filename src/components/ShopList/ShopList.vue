<template>
  <div class="msite_shop_list">
    <div class="shop_header">
      <i class="iconfont icon-xuanxiang"></i>
      <span class="shop_header_title">附近商家</span>
    </div>
    <div class="shop_container">
      <ul class="shop_list" v-if="shops.length">
        <li class="shop_li" v-for="(shop, index) in shops" :key="index" @click="$router.push('/shop')">
          <a>
            <div class="shop_left">
              <img class="shop_img" src="./images/shop/1.jpg" />
            </div>
            <div class="shop_right">
              <section class="shop_detail_header">
                <h4 class="shop_title ellipsis">{{shop.name}}</h4>
                <ul class="shop_detail_ul">
                  <li class="supports" v-for="(support, index) in shop.supports" :key="index">{{support.icon_name}}</li>
                </ul>
              </section>
              <section class="shop_rating_order">
                <section class="shop_rating_order_left">
                  <div class="star star-24">
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item half"></span>
                    <span class="star-item off"></span>
                  </div>
                  <div class="rating_section">{{shop.rating}}</div>
                  <div class="order_section">月售{{shop.recent_order_num}}单</div>
                </section>
                <section class="shop_rating_order_right">
                  <span class="delivery_style delivery_right">{{shop.delivery_mode.text}}</span>
                </section>
              </section>
              <section class="shop_distance">
                <p class="shop_delivery_msg">
                  <span>¥{{shop.float_minimum_order_amount}}起送</span>
                  <span class="segmentation">/</span>
                  <span>配送费约¥{{shop.float_delivery_fee}}</span>
                </p>
              </section>
            </div>
          </a>
        </li>
      </ul>
      <!-- 使用svg显示加载中提示界面 -->
      <ul v-else>
        <li v-for="item in 20" :key="item">
          <img src="./images/shop/shop_back.svg" alt="back">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['shops'])
  }
}
</script>
<style lang="less">
.msite_shop_list {
  position: relative;
  margin-top: 10px;
  background: #fff;
  &::before {
    content: "";
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
  }
  .shop_header {
    padding: 10px 10px 0;
    .shop_icon {
      margin-left: 5px;
      color: #999;
    }
    .shop_header_title {
      color: #999;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .shop_container {
    margin-bottom: 50px;
    .shop_list {
      padding: 0;
      .shop_li {
        position: relative;
        width: 100%;
        &::before {
          content: "";
          position: absolute;
          z-index: 200;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background-color: #f1f1f1;
          transform: scaleY(0.5);
        }
        > a {
          *zoom: 1;
          display: block;
          box-sizing: border-box;
          padding: 15px 8px;
          width: 100%;
          &::after {
            content: "";
            display: block;
            clear: both;
          }
          .shop_left {
            float: left;
            box-sizing: border-box;
            width: 23%;
            height: 75px;
            padding-right: 10px;
            .shop_img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .shop_right {
            float: right;
            width: 77%;
            .shop_detail_header {
              *zoom: 1;
              width: 100%;
              &::after {
                content: "";
                display: block;
                clear: both;
              }
              .shop_title {
                float: left;
                width: 140px;
                color: #333;
                font-size: 16px;
                line-height: 16px;
                font-weight: 700;
                &::before {
                  content: "品牌";
                  display: inline-block;
                  font-size: 11px;
                  line-height: 11px;
                  color: #333;
                  background-color: #ffd930;
                  padding: 2px 2px;
                  border-radius: 2px;
                  margin-right: 5px;
                }
              }
              .shop_detail_ul {
                float: right;
                margin-top: 3px;
                .supports {
                  float: left;
                  font-size: 10px;
                  color: #999;
                  border: 1px solid #f1f1f1;
                  padding: 0 2px;
                  border-radius: 2px;
                }
              }
            }
            .shop_rating_order {
              *zoom: 1;
              width: 100%;
              margin-top: 18px;
              margin-bottom: 8px;
              &::after {
                content: "";
                display: block;
                clear: both;
              }
              .shop_rating_order_left {
                float: left;
                color: #ff9a0d;
                .star {
                  float: left;
                  font-size: 0;
                  .star-item {
                    display: inline-block;
                    background-repeat: no-repeat;
                  }
                  &.star-48 {
                    .star-item {
                      width: 20px;
                      height: 20px;
                      margin-right: 22px;
                      background-size: 20px 20px;
                      &:last-child {
                        margin-right: 0;
                      }
                      &.on {
                        background-image: url("./images/stars/star48_on@2x.png");
                        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                          background-image: url("./images/stars/star48_on@3x.png");
                        }
                      }
                      &.half {
                        background-image: url("./images/stars/star48_half@2x.png");
                        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                          background-image: url("./images/stars/star48_half@3x.png");
                        }
                      }
                      &.off {
                        background-image: url("./images/stars/star48_off@2x.png");
                        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                          background-image: url("./images/stars/star48_off@3x.png");
                        }
                      }
                    }
                  }
                  &.star-36 {
                    .star-item {
                      width: 15px;
                      height: 15px;
                      margin-right: 6px;
                      background-size: 15px 15px;
                      &:last-child {
                        margin-right: 0;
                      }
                      &.on {
                        background-image: url("./images/stars/star36_on@2x.png");
                        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                          background-image: url("./images/stars/star36_on@3x.png");
                        }
                      }
                      &.half {
                        background-image: url("./images/stars/star36_half@2x.png");
                        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                          background-image: url("./images/stars/star36_half@3x.png");
                        }
                      }
                      &.off {
                        background-image: url("./images/stars/star36_off@2x.png");
                        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                          background-image: url("./images/stars/star36_off@3x.png");
                        }
                      }
                    }
                  }
                  &.star-24 {
                    .star-item {
                      width: 10px;
                      height: 10px;
                      margin-right: 3px;
                      background-size: 10px 10px;
                      &:last-child {
                        margin-right: 0;
                      }
                      &.on {
                        background-image: url("./images/stars/star24_on@2x.png");
                        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                          background-image: url("./images/stars/star24_on@3x.png");
                        }
                      }
                      &.half {
                        background-image: url("./images/stars/star24_half@2x.png");
                        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                          background-image: url("./images/stars/star24_half@3x.png");
                        }
                      }
                      &.off {
                        background-image: url("./images/stars/star24_off@2x.png");
                        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                          background-image: url("./images/stars/star24_off@3x.png");
                        }
                      }
                    }
                  }
                }
                .rating_section {
                  float: left;
                  font-size: 10px;
                  color: #ff6000;
                  margin-left: 4px;
                }
                .order_section {
                  float: left;
                  font-size: 10px;
                  color: #666;
                  transform: scale(0.8);
                }
              }
              .shop_rating_order_right {
                float: right;
                font-size: 0;
                .delivery_style {
                  transform-origin: 35px 0;
                  transform: scale(0.7);
                  display: inline-block;
                  font-size: 12px;
                  padding: 1px;
                  border-radius: 2px;
                }
                .delivery_left {
                  color: #fff;
                  margin-right: -10px;
                  background-color: #02a774;
                  border: 1px solid #02a774;
                }
                .delivery_right {
                  color: #02a774;
                  border: 1px solid #02a774;
                }
              }
            }
            .shop_distance {
              *zoom: 1;
              width: 100%;
              font-size: 12px;
              &::after {
                content: "";
                display: block;
                clear: both;
              }
              .shop_delivery_msg {
                float: left;
                transform-origin: 0;
                transform: scale(0.9);
                color: #666;
              }
              .segmentation {
                color: #ccc;
              }
            }
          }
        }
      }
    }
  }
}
</style>
