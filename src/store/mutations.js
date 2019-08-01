// Vuex 中的 mutation 非常类似于事件：
// 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
// 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from './mutation-types'

export default {
// 使用ES2015风格的计算属性命名功能来使用一个常量作为函数名
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_USERINFO] (state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USERINFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_GOODS] (state,{ goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, { ratings }) {
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state, { info }) {
    state.info = info
  }
}
