<template lang="pug">
    div.navAllBox
        el-select(v-model="languageNum" @change="langChange" size="mini")
            el-option(v-for='item in langList' :key="item.value" :label="item.name" :value="item.value")
</template>
<script>
export default {
  data () {
    return {
      languageNum: 0,
      langList: [
        { value: 0, name: '' },
        { value: 1, name: '' }
      ]
    }
  },
  created () {
    if (localStorage.getItem('lan') === 'zh') { this.languageNum = 0 } else { this.languageNum = 1 }
    this.langList[0].name = this.$i18n.t('allOver.langZh')
    this.langList[1].name = this.$i18n.t('allOver.langEn')
  },
  methods: {
    langChange (val) {
      console.log(val)
      if (val === 0) { this.$i18n.locale = 'zh' } else { this.$i18n.locale = 'en' }
      localStorage.setItem('lan', this.$i18n.locale)
      this.langList[0].name = this.$i18n.t('allOver.langZh')
      this.langList[1].name = this.$i18n.t('allOver.langEn')
    }
  }
}
</script>
<style lang="scss" scoped>
    .navAllBox{
        width: 100%;
        height: 40px;
        background-color:#2494F2;
        .el-select{
            width: 108px;
            float: right;
            margin:6px  30px 0 0;
        }
    }
</style>
