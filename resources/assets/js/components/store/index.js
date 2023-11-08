import Vuex from 'vuex';
import Vue from 'vue';

import es from 'vee-validate/dist/locale/es'
import VeeValidate, { Validator } from 'vee-validate'
import Vue2Filters from 'vue2-filters'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(Vuex)
Vue.use(require('vue-moment'))
Vue.use(VeeValidate)
Vue.use(Vue2Filters)
Vue.use(VueCurrencyFilter,
{
      symbol : '$',
      thousandsSeparator: '.',
      fractionCount: 0,
      fractionSeparator: ',',
      symbolPosition: 'front',
      symbolSpacing: true
})

Validator.localize('es', es); 

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})
