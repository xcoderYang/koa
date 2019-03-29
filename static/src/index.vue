/*
 * @Author: yxcoder 
 * @Date: 2018-12-26 09:29:40 
 * @Last Modified by: yxcoder
 * @Last Modified time: 2019-03-29 17:11:15
 */
  <template>
    <div id="content">
      <cmpnt-header :isLogin="false"></cmpnt-header>
      <cmpnt-login></cmpnt-login>
      <div>
        {{msg}}
        <span>
          {{msg2}}
        </span>
      </div>
      <a href="addon.html" >jump! jump!</a>
      </div>
  </template>
  <script>
    import header from './components/header/main.vue';
    import login from './components/login/main.vue';
    //import './font/Lato/d'
    import './style/noscope-global.styl';
    export default {
      data(){
        return{
          msg: 'Hello, World!',
          msg2: '123'
        }
      },
      components:{
        'cmpnt-header': header,
        'cmpnt-login': login
      }
    }
  </script>
  <style lang="stylus">
  #content
    div
      color green
  </style>
  