<template>
  <div class="layout">
    <Top></Top>
    <Menu class="menu"></Menu>
    <div class="main">
        <Bread v-if="$route.path!=='/workBeanch'"></Bread>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Top from './components/top.vue';
  import Menu from './components/menu.vue';
  import Bread from './components/bread.vue';
  export default {
    components: {
      Top,
      Menu,
      Bread,
    },
  }
</script>

<style lang="scss" scoped>
.layout{
  width:100vw;
  height: 100vh;
  .menu{
    position: fixed;
    top:70px;
    left:0;
  }
  .main{
    width: calc(100vw - 240px);
    height: calc(100vh - 100px);
    padding: 20px;
    position: fixed;
    top:70px;
    left:200px;
    overflow: auto;
    background: rgb(250, 250, 249);
  }
}
</style>