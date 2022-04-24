<template>
  <div class="menu">
      <!-- background-color="#293c55" -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      active-text-color="#409EFF"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
      <MenuItem :menu="menuList" />
    </el-menu>
  </div>
</template>

<script>
  import MenuItem from './menuItem.vue';
  import work from '@/assets/img/work.svg'
  import Template from '@/assets/img/Template.svg'
  import nonglinyumu from '@/assets/img/nonglinyumu.svg'
  import wuliu from '@/assets/img/wuliu.svg'
  import shezhi from '@/assets/img/shezhi.svg'
  export default {
    components: {
      MenuItem,
    },
    data() {
      return {
        isCollapse: false,
        menuList: [{
          title: '工作台',
          path: '/workBeanch',
          menuId: '1-1',
          iconUrl: work,
        },{
          title: '案例',
          path: '/ele',
          iconUrl: Template,
          menuId: '2-1',
          children: [{
            title: '农林',
            path: '/ele/index',
            iconUrl: nonglinyumu,
            menuId: '2-1-1',
            // children: [{
            //   title: 'form',
            //   path: '/ele/form',
            //   iconUrl: Template,
            //   menuId: '2-1-1-1',
            // }]
          },{
            title: '物流',
            path: '/ele/index1',
            iconUrl: wuliu,
            menuId: '2-1-2',
          },
          // {
          //   title: '传媒',
          //   path: '/ele/index2',
          //   iconUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2713042258,860821358&fm=26&gp=0.jpg',
          //   menuId: '2-1-3',
          // },{
          //   title: '娱乐',
          //   path: '/ele/index3',
          //   iconUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2713042258,860821358&fm=26&gp=0.jpg',
          //   menuId: '2-1-4',
          // },
          ]
        },{
          title: '设置',
          path: '/setting',
          menuId: '9-1',
          iconUrl: shezhi,
        }]
      }
    },
    computed: {
      screenSize() {
        return 123 
      }
    },
    mounted() {
      this.getMenu()
    },
    methods: {
      async getMenu(){
        const res = await this.$api({
          method: 'get',
          url: '/parameter/menu',
          params: {
            loginName: 'lp'
          }
        })
        console.log('getMenu::', res);
      },
      handleOpen() {
        // console.log('open');
      },
      handleClose() {
        // console.log('close');
      },
    },
  }
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
  }
  .menu{
    width:200px;
    height:calc(100vh - 60px);
    color: white;
}
</style>