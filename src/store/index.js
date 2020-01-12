import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: 'Welcome to Sii Meetup'
  },
  mutations: {
    changeTitle(state, text) {
      state.pageTitle = text
    }
  },
  actions: {},
  modules: {}
})
