<template lang="pug">
    div.loginHtml
        div.loginBox
            div.inputBox
                //- span.tit {{$t('loginMes.account')}}:
                el-input(:placeholder="$t('loginMes.userName')" v-model="romData.userName" size="mini") 
            div.inputBox
                //- span.tit {{$t('loginMes.passWord')}}:
                el-input(:placeholder="$t('loginMes.passWord')" v-model="romData.paddWord" size="mini" show-password) 
            div.loginBtnBox
                el-button(size="small" @click="goLogin" type="success") {{$t('loginMes.login')}}

</template>
<script>
export default {
    data(){
        return{
            romData:{
                userName:"",
                paddWord:"",
            }
        }
    },
    created(){
        console.log(this.$store.state.vuexMoudle)
    },
    updted(){},
    computed:{},
    watch:{},
    methods:{
        goLogin(){
            console.log(this.romData)
            if(!this.romData.userName){

            }
        },
    },
}
</script>
<style  lang="scss">

    .loginHtml{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-image: url('../../assets/heijie.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .loginBox{
            width: 1000px;
            margin:13% auto;
            text-align: center;
            .inputBox{
                margin: 30px 0;
                .tit{
                    color: white;
                    width: 100px;
                    display: inline-block;
                }
                .el-input{
                    display: inline-block;
                    width:300px;
                }
            }
            .loginBtnBox{
                text-align: center;
            }
        }
    }
</style>
