<template lang="pug">
    div.loginHtml
        div.loginBox(v-if="isLogin")
            div.inputBox
                //- span.tit {{$t('loginMes.account')}}:
                el-input(:placeholder="$t('loginMes.account')" v-model="romData.userName" size="mini")
            div.inputBox
                //- span.tit {{$t('loginMes.passWord')}}:
                el-input(:placeholder="$t('loginMes.passWord')" v-model="romData.paddWord" size="mini" show-password)
            div.loginBtnBox
                el-button(size="small" @click="getLogin" type="primary") {{$t('loginMes.login')}}
                el-button(size="small" @click="goRegister" type="text") {{$t('loginMes.register')}}
        div.loginBox(v-if="!isLogin")
            el-form(:model="registerData" ref="registerData" label-width="200px" :rules="rules")
                el-form-item(:label="$t('loginMes.account')" prop="account")
                    el-input(:placeholder="$t('loginMes.account')"  v-model="registerData.account" size="mini")
                el-form-item(:label="$t('loginMes.userName')" prop="userName")
                    el-input(:placeholder="$t('loginMes.userName')" v-model="registerData.userName" size="mini")
                el-form-item(:label="$t('allOver.phone')" prop="phone")
                    el-input(:placeholder="$t('allOver.phone')" v-model="registerData.phone" size="mini")
                el-form-item(:label="$t('loginMes.verificationCode')" prop="code")
                    el-input(:placeholder="$t('loginMes.verificationCode')" v-model="registerData.code" size="mini")
                el-form-item(:label="$t('loginMes.passWord')" prop="passWord")
                    el-input(:placeholder="$t('loginMes.passWord')" type="password" v-model="registerData.passWord" size="mini")
                el-form-item(:label="$t('loginMes.surePass')" prop="surepass")
                    el-input(:placeholder="$t('loginMes.surePass')" type="password" v-model="registerData.surepass" size="mini")

            div.loginBtnBox
                el-button(size="small" @click="getRegister" type="primary") {{$t('loginMes.register')}}

</template>
<script>
import Vue from 'vue'
import request from '../../message/untils/request'
import { getErrorMsg } from '../../message/untils/tool'
export default {
    data () {
        return {
        romData: {
            account: '', // 账号
            paddWord: '' // 密码
        },
        vuexs: '',
        isLogin: true,
        registerData: {
            account: '', // 账号
            userName: '', // 用户名
            passWord: '', // 密码
            phone: '', // 手机号
            code: '', // 验证码
            surepass: '' // 确定密码
        },
        rules: {

        },
        lan: ''
        }
    },
    created () {
        this.lan = localStorage.getItem('lan')
        this.vuexs = this.$store
        this.vuexs.dispatch('changeStateName', 'thhs')
        this.getRules()
    },
    updated () {
        const lan = localStorage.getItem('lan')
        if (this.lan !== lan) {
        this.lan = lan
        this.getRules()
        }
    },
    computed: {

    },
    watch: {},
    methods: {
        // 登录
        getLogin () {
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
        },
        // 显示注册页面
        goRegister () {
        this.isLogin = false
        },
        // 注册
        getRegister () {
        console.log(this.registerData)
        },
        getRules () {
        this.rules = {
            account: [
            { required: true, message: this.$i18n.t('loginMes.pleaseAccount'), trigger: 'blur' },
            { min: 5, max: 16, message: this.$i18n.t('loginMes.accountLen'), trigger: 'blur' }
            ],
            userName: [
            { required: true, message: this.$i18n.t('loginMes.pleaseUsername'), trigger: 'blur' },
            { min: 3, max: 6, message: this.$i18n.t('loginMes.usernameLen'), trigger: 'blur' }
            ],
            phone: [
            { required: true, message: this.$i18n.t('loginMes.pleasePhone'), trigger: 'blur' },
            { min: 11, max: 11, message: this.$i18n.t('loginMes.phoneLen'), trigger: 'blur' }
            ],
            passWord: [
            { required: true, message: this.$i18n.t('loginMes.pleasePassword'), trigger: 'blur' },
            { min: 3, max: 18, message: this.$i18n.t('loginMes.passwordLen'), trigger: 'blur' }
            ],
            code: [
            { required: true, message: this.$i18n.t('loginMes.pleaseCode'), trigger: 'blur' }
            ],
            surepass: [
            { required: true, message: this.$i18n.t('loginMes.surePassErr'), trigger: 'blur' }
            ]
        }
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
