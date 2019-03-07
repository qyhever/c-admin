import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/* eslint-disable import/first */
import '@/router/permission'

import '@/assets/css/index.css'
import 'font-awesome/css/font-awesome.css'
import '@/assets/scss/layout.scss'
import '@/assets/scss/transition.scss'

import '@/assets/scss/element-variables.scss'
// import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import VeLine from 'v-charts/lib/line.common'
import VePie from 'v-charts/lib/pie.common'
import VeGauge from 'v-charts/lib/gauge.common'
Vue.component(VeLine.name, VeLine)
Vue.component(VePie.name, VePie)
Vue.component(VeGauge.name, VeGauge)

import * as filters from './filters' // global filters
// register global filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import prototypeExtendConfig from './config'
Vue.use(prototypeExtendConfig)
// register global enum.
import enums from './enum'
Vue.use(enums)

import prototypeExtendUtil from './prototype'
Vue.use(prototypeExtendUtil)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
