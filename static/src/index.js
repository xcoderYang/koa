import Vue from 'vue';
import Content from './index.vue';
import eleUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(eleUI);

var vm = new Vue({
  el: '#content',
  components: {Content},
  template: '<Content/>'
})