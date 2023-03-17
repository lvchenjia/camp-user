<template>
    <body id="register-page">
      <el-form class="register-container" label-position="left" label-width="0px">
        <h3 class="register_title">用户注册</h3>
        <el-form-item>
          <el-input
            type="text"
            v-model="registerForm.username"
            auto-complete="off"
            placeholder="账号"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="registerForm.password"
            auto-complete="off"
            placeholder="密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="text"
            v-model="registerForm.name"
            auto-complete="off"
            placeholder="昵称"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-select 
            v-model="registerForm.gender"
            placeholder="性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input
            type="text"
            v-model="registerForm.email"
            auto-complete="off"
            placeholder="邮箱"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="text"
            v-model="registerForm.phone"
            auto-complete="off"
            placeholder="手机号"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
      
        <el-form-item style="width: 100%">
          <el-button
            type="primary"
            style="width: 100%; border: none"
            @click="register"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </body>
  </template>
  
  <script>
  import { userAdd } from '@/api/user';
  export default {
    name: "register",
    data() {
      return {
        registerForm: {
          username: "",
          name: "",
          password: "",
          gender: "",
          email: "",
          phone: "",
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
          this.register()
        }
      },
      register() {
        userAdd({
          username: this.registerForm.username,
          name: this.registerForm.name,
          password: this.registerForm.password,
          gender: this.registerForm.gender,
          email: this.registerForm.email,
          phone: this.registerForm.phone,
        }).then((resp) => {
          let code=resp.data.code;
          if(code===200){
            this.$message.success("注册成功,三秒后跳转到登录页面");
            setTimeout(() => {
              this.$router.push('/login');
            }, 3000);
          }else{
            this.$message.error(resp.data.message);
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  #register-page {
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
  .register-container {
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
  
  .register_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .el-select{
    width: 100%;
  }
  </style>
  