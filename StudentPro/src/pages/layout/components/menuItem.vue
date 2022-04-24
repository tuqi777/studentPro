<template>
  <div class="menuItem">
    <template v-for="(menuItem,menuId) in menu">
      <!-- 有子级 -->
      <el-submenu
          v-if="menuItem.children && menuItem.children.length"
          :key="menuId"
          :index="menuId+''">
          <template slot="title">
            <img :src="menuItem.iconUrl" class="menuIconForImg">
            <!-- <img :src="menuItem.iconUrl" class="menuIconForImg"> -->
            <span slot="title">{{menuItem.title}}</span>
          </template>
          <!-- 子级--循环调用 -->
          <menu-item :menu="menuItem.children" />
      </el-submenu>
      <!-- 无子级 -->
      <el-menu-item
          v-if="!menuItem.children || menuItem.children.length === 0"
          :key="menuId"
          @click="goPath(menuItem)">
          <template>
            <img :src="menuItem.iconUrl" class="menuIconForImg">
            <!-- <img :src="menuItem.iconUrl" class="menuIconForImg"> -->
            <span slot="title">{{menuItem.title}}</span>
          </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'menuItem',
    props: {
      menu: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        name: 'menuItem'
      }
    },
    computed: {
      menuVuex() {
        return []
      }
    },
    methods: {
      init() {
        
      },
      goPath(menuItem){
        if(this.$route.fullPath === menuItem.path) return
        this.$router.push({
          path:menuItem.path
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.menuIconForImg{
  display:inline-block;
  width:20px;
  height:20px;
  margin-right:5px;
}
</style>