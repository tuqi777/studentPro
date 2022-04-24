<template>
  <div class="top">
    <span class="logoWraper">
      <!-- <img src="@/assets/img/alibaba.webp" alt="" srcset=""> -->
      <div id="logo"></div>
    </span>
    <el-dropdown class="userOperate" @command="dropdownCommand">
      <span class="el-dropdown-link">
        {{$t('common.name')}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
            v-for="(item,i) in operateArr"
            :key="i"
            >
          {{item.name}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="changeLang" @click="$i18n.locale = $i18n.locale === 'en'? 'zh' : 'en'">切换语言</div>
  </div>
</template>

<script>
  export default {
    data:() =>({
      userName: '李鹏',
      operateArr: [{
        name: '安全退出',

      }]
    }),
    mounted () {
      this.init();
    },
    methods: {
      init(){

      },
      dropdownCommand(){
        console.log(arguments);
        this.$router.replace('/login')
      },
      loginOut() {
        console.log('安全退出');
        this.$router.push('/login')
      }
    },
  }
</script>

<style lang="scss" scoped>
.top{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #4969cb;
  box-shadow: 0 0 10px 0 #4969cb;
  z-index: 9999999999;
  // overflow: hidden;
  .logoWraper{
    width: 200px;
    height: 60px;
    display: inline-block;
    img{
      display: inline-block;
      width: 100%;
      height:100%;
    }
  }
  .userOperate{
    float: right;
    margin-right: 10px;
    color:#fff;
  }
  .changeLang{
    // display: inline-block;
    float: right;
    color: #fff;
    cursor: pointer;
    padding-right: 10px;
  }
}
</style>