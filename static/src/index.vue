/*
 * @Author: yxcoder 
 * @Date: 2018-12-26 09:29:40 
 * @Last Modified by: yxcoder
 * @Last Modified time: 2019-06-25 16:11:37
 */
  <template>
    <div id="content">
      <header-wrapper :isLogin="false"></header-wrapper>
      <div>
        {{msg}}thi saklsjfd slkafj 
        <span>
          {{msg2}}
        </span>
      </div>
      <a href="addon.html" >jump! jump!</a>
      <form action="/signin" method="post">
        <input v-model="account" name="account" />
        <input v-model="password" name="password" type="password" />
        <input type="submit" v-on:click="formSubmit" value="提交" />
      </form>
    </div>
  </template>
  <script>
    import header from './components/header/main.vue';
    import './style/noscope-global.styl';
    import eleUI from 'element-ui'
    import $ from 'axios'
    export default {
      data(){
        return{
          msg: 'Helsdlsso, World!',
          msg2: '123',
          account: '',
          password: ''
        }
      },
      methods:{
        formSubmit: function(event){
        }
      },
      components:{
        'header-wrapper': header
      }
    }
  </script>
  <style lang="stylus">
  #content
    div
      color green
  </style>
  