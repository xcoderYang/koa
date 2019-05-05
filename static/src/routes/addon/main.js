import Vue from 'vue';
import axios from 'axios';
import Temp from './main.vue';
var vm = new Vue({
  el: '#content',
  components: {Temp},
  template: '<Temp/>'
})