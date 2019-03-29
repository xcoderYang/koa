import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Temp from './main.vue';

Vue.use(ElementUI);

var vm = new Vue({
  el: '#content',
  components: {Temp},
  template: '<Temp/>'
})