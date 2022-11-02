// 该文件用于创建 Vuex 中最为核心的 store

// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'

// 使用 Vuex
Vue.use(Vuex)

// actions -- 用于响应组件中的动作
const actions = {
    add(context, value) {
        context.commit('ADD', value)
    },
    subtract(context, value) {
        context.commit('SUBTRACT', value)
    },
    addOdd(context, value) {
        if (context.state.sum % 2 !== 0) {
            context.commit('ADDODD', value)
        }
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADDWAIT', value)
        }, 500);
    }
}
// mutations -- 用于操作数据（state）
const mutations = {
    ADD(state, value) { state.sum += value },
    SUBTRACT(state, value) { state.sum -= value },
    ADDODD(state, value) { state.sum += value },
    ADDWAIT(state, value) { state.sum += value }
}
// state -- 用于存储数据
const state = {
    sum: 0,
}



// 创建并导出 stroe
export default new Vuex.Store({
    actions,
    mutations,
    state
})
