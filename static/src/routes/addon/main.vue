<template>
    <div id="content">
      <header-wrapper></header-wrapper>
      <div class="box">
        {{msg}}
        <span>
            {{msg1}}
        </span>
        <span>
            {{msg2}}
        </span>
    </div>
    </div>
</template>
<script>
import header from '../../components/header/main.vue';
import '../../style/noscope-global.styl';
import axios from 'axios'
export default {
    data: function(){
        return {
            msg: 'nihasssssssaso, World!',
            msg1: 'Are you here?',
            msg2: "yes, I'm here"
        }
    },
    components:{
      'header-wrapper': header
    }
}
</script>
<style lang="stylus">
.box
    width 200px
    height 200px
    margin-top 10px
    margin-bottom 20px
    margin-left auto
    margin-right auto
</style>

