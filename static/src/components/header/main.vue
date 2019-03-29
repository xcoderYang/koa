/*
 * @Author: yxcoder 
 * @Date: 2019-01-21 14:08:54 
 * @Last Modified by: yxcoder
 * @Last Modified time: 2019-03-29 16:17:38
 */
<template>
    <header class="header_wrapper">
        <div class="header_inner">
            <ul class="header_rightBar" v-if="isLogin">
            </ul>
            <ul class="header_rightBar" v-else>
                <li><a>{{ login }}</a></li>
                <li><a>{{ signUp }}</a></li>
                <li><a>{{ localAndLanguage }}</a></li>
                <li><a>{{ search }}</a></li>
                <li><a>{{ liveChat }}</a></li>
            </ul>
        </div>
    </header>    
</template>
<script>
export default {
    data(){
        return {
            login: 'login',
            signUp: 'Sign Up',
            localAndLanguage: 'United States - English',
            search: 'Search',
            liveChat: 'Live Chat'
        }
    },
    props:['isLogin', 'local', 'language']
}
</script>
<style lang="stylus" scope>
@import '../../style/global.styl';
    .header_wrapper
        .header_inner
            width 100%
            height 35px
            line-height @height
            background-color g-red
            .header_rightBar
                float right
                overflow hidden
                li
                    margin-right 40px
                    font-size 14px
                    color white
                    float left
</style>


