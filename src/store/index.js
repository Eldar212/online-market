import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions/actions'
import getters from './getters/getters'
import mutations from './mutations/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters
})
