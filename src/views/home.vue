<template>
    <el-container class="home-container">
      <!--顶部-->
      <el-header style="margin-right: 15px; width: 100%">
        <span class="nav-logo">🌄</span>
        <span class="head-title">露营地管理系统 用户端</span>
        <el-dropdown trigger="click" style="position: absolute; right: 2%; top: 10px">
          <span class="el-dropdown-link">
            <el-avatar
              style="position: absolute; right: 2%; top: 10px"
              size="large"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__480.png"
            ></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              @click.native="$router.push('/userInfo')"
            >个人中心</el-dropdown-item>
            <el-dropdown-item
              @click.native="logout"
            >退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-header>
      <!-- 主体 -->
      <el-container class="main">
        <!-- 侧边栏 -->
        <el-aside width="13%">
          <el-menu
            :default-active="$route.path"
            router
            text-color="black"
            active-text-color="#409EFF"
          >
            <el-menu-item
              v-for="(item, i) in navList"
              :key="i"
              :index="item.name"
            >
              <i :class="item.icon"></i>
              {{ item.title }}
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <!--路由占位符-->
          <Transition name="fade" mode="out-in">
            <router-view></router-view>
          </Transition>
        </el-main>
      </el-container>
    </el-container>
  </template>
  
  <script>
  export default {
    name: "Home",
    data() {
      return {
        navList: [
          { name: "/index", title: "首页", icon: "el-icon-s-home" },
          { name: "/userInfo", title: "个人中心",icon:"el-icon-user"},
          { name: "/reserve", title: "营地预约",icon:"el-icon-s-order"},
          { name: "/userReservation", title: "我的预约",icon:"el-icon-s-order"},
          { name: "/buy", title: "购买",icon:"el-icon-s-shop"},
          { name: "/userSaleRecord", title: "我的销售记录",icon:"el-icon-s-shop"},
          

        ],
      };
    },
    methods: {
      // 退出登录
      logout() {
        var _this = this;
        this.$confirm("确定退出登录吗？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            _this.$store.commit("REMOVE_INFO");
            _this.$router.push("/login");
          })
          .catch(() => {});
      },
    },
  };
  </script>
  
  <style >
  .nav-logo {
    position: absolute;
    padding-top: -1%;
    left: 5%;
    font-size: 40px;
  }
  
  .head-title {
    position: absolute;
    padding-top: 20px;
    left: 15%;
    font-size: 20px;
    font-weight: bold;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  </style>