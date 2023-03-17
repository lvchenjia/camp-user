<template>
    <el-card class="box-card">
        <el-form>
        <h3>用户基本信息</h3>
        <el-form-item>
            <el-input type="text" v-model="userForm.username" auto-complete="off" placeholder="用户名"
                prefix-icon="el-icon-user" disabled></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" v-model="userForm.password" auto-complete="off" placeholder="密码"
                prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="text" v-model="userForm.name" auto-complete="off" placeholder="昵称"
                prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item>
            <el-select v-model="userForm.gender" placeholder="性别">
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-input type="text" v-model="userForm.email" auto-complete="off" placeholder="邮箱"
                prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="text" v-model="userForm.phone" auto-complete="off" placeholder="手机号"
                prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="updateUser">保存</el-button>
        </el-form-item>
    </el-form>
    </el-card>
</template>

<script>
import { userUpdate, userGetById } from "@/api/user";
export default {
    data() {
        return {
            userForm: {
                //用户
                username: "",
                name: "",
                password: "",
                gender: "",
                email: "",
                phone: "",
            },
        }
    },
    created() {
        this.getUser();
    },
    methods: {
        //获取用户列表
        getUser() {
            var _this = this;
            var _userid = _this.$store.state.user.id;
            userGetById(_userid)
                .then((res) => {
                    if (res.data.code === 200) {
                        _this.userForm = res.data.data;
                    } else {
                        this.$message.error("获取用户信息失败");
                    }
                })
                .catch((err) => {
                    this.$message.error("获取用户信息异常");
                    console.loge(err);
                });
        },
        updateUser() {
            userUpdate(this.userForm)
                .then((res) => {
                    if (res.data.code === 200) {
                        this.getUser();
                        this.$message({
                            message: "修改用户成功",
                            type: "success",
                        });

                    } else {
                        this.$message.error("修改用户失败");
                    }
                })
                .catch((err) => {
                    this.$message.error("修改用户异常");
                    console.loge(err);
                });
        }
    },
}
</script>

<style scoped>
.el-card {
    margin-left: 10%;
    float: left;
    width: 80%;
  height: 100%;
  margin-right: 20px;
  transition: all .2s;
  box-shadow: 6px 6px 16px 0 rgba(0,0,0,.2);
  border-radius: 10px;
}

.box-card  ::v-deep .el-card__header {
    background-color: #fffaf4;
  }
  
  .box-card ::v-deep .el-card__body {
    background-color: #fffaf4;
  }

.el-form {
    width: 50%;
    margin-left: 25%;
    margin-bottom: 5%;
}

.el-select {
    width: 100%;
}
</style>