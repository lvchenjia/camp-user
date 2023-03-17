<template>
  <div>
    <!--Layout布局-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>预定信息列表</span>
      </div>
      <el-row>
      <el-col :span="24">
        <!--表格-->
        <el-table :data="reservationList" border stripe>
          <el-table-column type="index" label="序号"></el-table-column>
          <el-table-column label="营地名" prop="campsiteName"></el-table-column>
          <el-table-column label="露营点名" prop="campsiteSpotName"></el-table-column>
          <el-table-column label="预定时间" prop="date"></el-table-column>


          <el-table-column label="操作">
            <!-- 作用域插槽 -->
            <template slot-scope="scope">
              
              <!--删除按钮-->
              <el-button type="danger" size="mini" icon="el-icon-delete"
                @click="removeReservationById(scope.row.id)"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
      </el-card>
  </div>
</template>
  
<script>
import { reservationList,  reservationDelete, reservationListByUserId } from "@/api/reservation";
export default {
  data() {
    return {
      reservationList: [], // 预定信息列表
    };
  },
  created() {
    // 生命周期函数
    this.getReservationList();
  },
  methods: {
    getReservationList() {
      reservationListByUserId(this.$store.state.user.id)
        .then((res) => {
          if (res.data.code === 200) {
            this.reservationList = res.data.data;
          } else {
            this.$message.error("获取预定信息列表失败");
          }
        })
        .catch((err) => {
          this.$message.error("获取预定信息列表异常");
          console.log(err);
        });
    },


    // 根据ID删除对应的预定信息信息
    async removeReservationById(id) {
      // 弹框 询问预定信息是否删除
      const confirmResult = await this.$confirm(
        "此操作将永久删除该预定信息, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      // 如果预定信息确认删除，则返回值为字符串 confirm
      // 如果预定信息取消删除，则返回值为字符串 cancel
      // console.log(confirmResult)
      if (confirmResult == "confirm") {
        //删除预定信息
        reservationDelete(id)
          .then((res) => {
            if (res.data.code === 200) {
              this.getReservationList();
              this.$message({
                message: "删除预定信息成功",
                type: "success",
              });
            } else {
              this.$message.error("删除预定信息失败");
            }
          })
          .catch((err) => {
            this.$message.error("删除预定信息异常");
            console.log(err);
          });
      }
    },
  },
};
</script>
  
<style scoped>
.el-card {
  padding: 2%;
  height: 100%;
  margin-right: 20px;
  transition: all .2s;
  box-shadow: 6px 6px 16px 0 rgba(0,0,0,.2);
  border-radius: 10px;
}




.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.el-select {
  width: 100%;
}

.el-date-editor {
  width: 100%;
}
</style>
  