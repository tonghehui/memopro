<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/navbar/navbar.vue"
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style >
    html,body,#app{
        width: 100%;
        height: calc(100% - 15px);
    }
    *{
      margin: 0;
      padding: 0;
    }

</style>
