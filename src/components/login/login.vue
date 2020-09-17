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
import request from '../../message/untils/request'
import { getErrorMsg } from '../../message/untils/tool'
export default {
  data () {
    return {
      romData: {
        userName: '',
        paddWord: ''
      },
      vuexs: ''
    }
  },
  created () {
    this.vuexs = this.$store
    this.vuexs.dispatch('changeStateName', 'thhs')
  },
  updted () {},
  computed: {},
  watch: {},
  methods: {
    goLogin () {
      const _this = this
      if (!_this.romData.userName) {
        _this.$message(_this.$i18n.t('allOver.pleaseInput') + _this.$i18n.t('loginMes.account'))
        return
      }
      if (!_this.romData.paddWord) {
        _this.$message(_this.$i18n.t('allOver.pleaseInput') + _this.$i18n.t('loginMes.passWord'))
      }

      request.loginInfo(_this.romData)
        .then(res => {
          if (res.code === 200) {
            console.log(res.data)
          } else {
            _this.$message(getErrorMsg(res.msg, localStorage.getItem('lan')))
          }
        }).catch(err => {
          _this.$message(getErrorMsg(err, localStorage.getItem('lan')))
        })
    }
  }
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
