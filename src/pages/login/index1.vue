<template>
  <div class="login">
    <div class="submit">
      <el-form
              v-model="loginForm"
              size="mini"
              inline
              label-width="80px"
              label-position="right"
              class="demo-ruleForm">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.userName" type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.passWord" type="password"></el-input>
        </el-form-item>
        <el-form-item label=" ">
          <div style="text-align:center;">
            <el-button type="primary" @click="login">登陆</el-button>
            <el-button @click="register">注册</el-button>
          </div>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
  export default {
    data:() =>({
      loginForm:{
        userName: 'admin',
        passWord: 'admin'
      }
    }),
    methods: {
      login() {
        console.log('登陆');
        this.$api({
          method: 'post',
          url: '/apis/user/loging',
          data: {
            name: this.loginForm.userName,
            pwd:this.loginForm.passWord
          }
        }).then((res)=>{
          console.log(res,'denglu');

          this.$router.push({path: '/workBeanch'})
        })
      },
      register() {
        console.log('注册');
      },
    },
  }
</script>

<style lang="scss" scoped>
/deep/.el-form-item__label{
  color:#fff;
}
.login{
  width: 100vw;
  height: 100vh;
  background: url('../../assets/img/seeYouWhat.jpg') no-repeat center;
  background-size: cover;
  .submit{
    width: 300px;
    padding: 20px;
    position: fixed;
    left:50%;
    top: 50%;
    transform: translate(-50%);
    background: rgba($color: #FFF, $alpha: .2);
    .el-form{
      overflow: hidden;
    }
  }
}
</style>