/*
 * @Author: yxcoder 
 * @Date: 2018-12-26 09:29:40 
 * @Last Modified by: yxcoder
 * @Last Modified time: 2019-01-22 14:54:51
 */
  <template>
    <div id="content">
      <header-wrapper :isLogin="false"></header-wrapper>
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
        'header-wrapper': header
      }
    }
  </script>
  <style lang="stylus">
  #content
    div
      color green
  </style>
  