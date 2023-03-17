<template>
  <body id="login-page">
    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">用户登录</h3>
      <el-form-item>
        <el-input
          type="text"
          v-model="loginForm.loginName"
          auto-complete="off"
          placeholder="账号"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="loginForm.password"
          auto-complete="off"
          placeholder="密码"
          prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>
      <el-form-item style="width: 100%; text-align: right">
        <el-link href="#/register" :underline="false">新用户注册</el-link>
      </el-form-item>
      
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%; border: none"
          @click="login"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </body>
</template>

<script>
import { userLogin } from "@/api/user";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        loginName: "",
        password: "",
      },
      responseResult: [],
    };
  },
  created() {
      //监听回车键
      window.addEventListener('keydown', this.enterKeydown)
    },
  methods: {
    enterKeydown(e) {
      if (e.keyCode === 13) {
        this.login()
      }
    },
    login() {
      var _this = this;
      userLogin({
        loginName: this.loginForm.loginName,
        password: this.loginForm.password,
      }).then((resp) => {
        let code=resp.data.code;
        if(code===200){
          let data=resp.data.data;
          let token=data.token;
          let user = data.user;
          //存储token
          _this.$store.commit('SET_TOKENN', token);
          //存储user，优雅一点的做法是token和user分开获取
          _this.$store.commit('SET_USER', user);
          console.log(_this.$store.state.token);
          var path = this.$route.query.redirect
          this.$router.replace({path: path === '/' || path === undefined ? '/' : path})
        }else{
          this.$message.error(resp.data.message);
        }
      });
    },
  },
};
</script>

<style scoped>
#login-page {
  background: url("../assets/img/bg.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body {
  margin: 0px;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  opacity: 0.85;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
