import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        goodsList: [
            

            
        ],
    },
    getters: {
        getGoodsList: ({ goodsList }) => goodsList,
    },
    mutations: {
        addNewGoods(state, dataObj) {
            state.goodsList.push({
                ...dataObj
            })
        },
    },
    actions: {
        addGoods({commit}, data) {
            commit('addNewGoods', data)
        },
    }
})

export default store