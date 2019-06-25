import Vue from 'vue';
import axios from 'axios';
import Temp from './main.vue';
console.log('123');
var vm = new Vue({
  el: '#content',
  components: {Temp},
  template: '<Temp/>'
})