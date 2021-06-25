import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Chart: () => import('../../components/chart.vue' /* webpackChunkName: "components/chart" */).then(c => wrapFunctional(c.default || c)),
  Navigator: () => import('../../components/navigator.vue' /* webpackChunkName: "components/navigator" */).then(c => wrapFunctional(c.default || c)),
  ReservoirInfo: () => import('../../components/reservoirInfo.vue' /* webpackChunkName: "components/reservoir-info" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
