<template>
  <div class="bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
          v-for="(item,index) in routesArr"
          :key="index"
          :to="{ path: item.path }"
          >
          {{item.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        breadList: [{
          title: '首页',
          path: '/workBeanch'
        }]
      }
    },
    computed:{
      routesArr(){
        let temp = []
        this.$route.matched.map(item =>{
          if(item.meta.title) {
            temp.push({
              title: item.meta.title,
              path: item.path
            })

          }
        })
        return temp
      }
    }
  }
</script>

<style lang="scss" scoped>
// .bread{
//   background: #fff;
// }
</style>