import Vue from 'vue';
import Content from './index.vue';
console.log('123');
var vm = new Vue({
  el: '#content',
  components: {Content},
  template: '<Content/>'
})