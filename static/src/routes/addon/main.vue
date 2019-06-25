<template>
    <div id="content">
      <header-wrapper></header-wrapper>
      <div class="box">
        {{msg}}asfsdf
        <span @click="jumpTo">
            {{msg1}}
        </span>
        <span>
            {{msg2}}
        </span>
        <div>
            <img src="../../images/photo.png" />
        </div>
    </div>
    </div>
</template>
<script>
import header from '../../components/header/main.vue';
import '../../style/noscope-global.styl';
import axios from 'axios'
import eleUI from 'element-ui'
export default {
    data: function(){
        return {
            msg: 'nihasssssssaso, World!',
            msg1: 'Are you here?',
            msg2: "yes, I'm here"
        }
    },
    methods: {
        jumpTo(){
            console.log(axios);
            console.log('jump', 'jump');
            axios.get('/').then((response)=>{
                console.log(response.data);
            })
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

