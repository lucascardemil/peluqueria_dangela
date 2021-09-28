
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('bootstrap')
import Vue from 'vue';

/*Vue.config.devtools = false
Vue.config.debug = false
Vue.config.silent = true*/

import store from './components/store/index'
import vSelect from 'vue-select'


Vue.component('v-select', vSelect)
Vue.component('select-personal', require('./components/Profession/SelectProfessionComponent.vue').default)
Vue.component('select-company', require('./components/Company/SelectCompanyComponent.vue').default)
Vue.component('select-profession', require('./components/Profession/SelectProfessionComponent.vue').default)
Vue.component('select-service', require('./components/Service/SelectServiceComponent.vue').default)
Vue.component('select-category', require('./components/Category/SelectCategory.vue').default)
Vue.component('select-personal', require('./components/Personal/SelectPersonal.vue').default)
Vue.component('select-user', require('./components/Client/SelectSimple.vue').default)
Vue.component('select-brand', require('./components/Inventory/Brand/Select.vue').default)
Vue.component('select-laboratory', require('./components/Inventory/Laboratory/Select.vue').default)
Vue.component('select-unit', require('./components/Inventory/UnitOfMesaurent/Select.vue').default)
Vue.component('select-product', require('./components/Inventory/Product/Select.vue').default)
Vue.component('select-code', require('./components/Inventory/Code/Select.vue').default)
Vue.component('select-inventory-template', require('./components/Inventory/InventoryTemplate/Select.vue').default)
Vue.component('select-sucursal-inventory', require('./components/POST/Sucursal/Select.vue').default)

Vue.component('exchange-service', require('./components/DetailUser/ExchangeServiceComponent.vue').default)

Vue.component('index-component', require('./components/Index/indexComponent.vue').default)

Vue.component('accumulated-service', require('./components/DetailUser/AccumulatedServiceComponent.vue').default)

Vue.component('category-component', require('./components/Category/CategoriesComponent.vue').default)
Vue.component('personal-component', require('./components/Personal/PersonalsComponent.vue').default)
Vue.component('company-component', require('./components/Company/CompaniesComponent.vue').default)
Vue.component('profession-component', require('./components/Profession/ProfessionsComponent.vue').default)
Vue.component('user-component', require('./components/User/UsersComponent.vue').default)
Vue.component('client-component', require('./components/Client/ClientsComponent.vue').default)
Vue.component('service-component', require('./components/Service/ServicesComponent.vue').default)
Vue.component('promotion-component', require('./components/Promotion/PromotionsComponent.vue').default)

Vue.component('all-service-user-component', require('./components/Service/AllServicesUserComponent.vue').default)

Vue.component('user-score', require('./components/DetailUser/UserScoreComponent.vue').default)

Vue.component('detail-user', require('./components/DetailUser/DetailUserComponent.vue').default)

//seccion de roles y permisos para permisos
Vue.component('user-roles-component', require('./components/Roles/Users.vue').default)
Vue.component('roles-component', require('./components/Roles/Roles.vue').default)


/****************************sistema POS *****************************/
/******************************************************************** */
/******************************************************************** */
/******************************************************************** */
Vue.component('select-client', require('./components/Client/Select.vue').default)
Vue.component('post-component', require('./components/POST/Principal/Index.vue').default)

Vue.component('voucher-component', require('./components/Voucher/Admin.vue').default)
Vue.component('search-voucher-component', require('./components/Voucher/Index.vue').default)
Vue.component('filter-voucher-component', require('./components/Voucher/Filter.vue').default)
Vue.component('voucher-session-component', require('./components/Voucher/Session.vue').default)
Vue.component('filter-session-component', require('./components/Voucher/FilterSession.vue').default)

/****************************Inventario *****************************/
/******************************************************************** */
/******************************************************************** */
/******************************************************************** */
Vue.component('brand-component', require('./components/Inventory/Brand/Index.vue').default)
Vue.component('laboratory-component', require('./components/Inventory/Laboratory/Index.vue').default)
Vue.component('unit-component', require('./components/Inventory/UnitOfMesaurent/Index.vue').default)
Vue.component('product-component', require('./components/Inventory/Product/Index.vue').default)
Vue.component('code-component', require('./components/Inventory/Code/Index.vue').default)
Vue.component('inventory-template-component', require('./components/Inventory/InventoryTemplate/Index.vue').default)
Vue.component('inventory-component', require('./components/Inventory/Inventory/Index.vue').default)
Vue.component('reduction-component', require('./components/Inventory/Reduction/Index.vue').default)

Vue.component('email-masive-component', require('./components/Mail/Index.vue').default)


new Vue({
    el: '#app',
    store: store,
    ready: function()  {
        this.$nextTick(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
    },
});
