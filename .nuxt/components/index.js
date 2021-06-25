import { wrapFunctional } from './utils'

export { default as Chart } from '../../components/chart.vue'
export { default as Navigator } from '../../components/navigator.vue'
export { default as ReservoirInfo } from '../../components/reservoirInfo.vue'

export const LazyChart = import('../../components/chart.vue' /* webpackChunkName: "components/chart" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigator = import('../../components/navigator.vue' /* webpackChunkName: "components/navigator" */).then(c => wrapFunctional(c.default || c))
export const LazyReservoirInfo = import('../../components/reservoirInfo.vue' /* webpackChunkName: "components/reservoir-info" */).then(c => wrapFunctional(c.default || c))
