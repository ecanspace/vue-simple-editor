import Vue from 'vue'
// 事件总线
Vue.use((Vue) => Vue.prototype.EVENT_BUS = new Vue())
