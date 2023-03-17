<template>
  <div>
    <!--Layout布局-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>销售记录信息列表</span>
      </div>
      <el-row>
      <el-col :span="24">
        <!--表格-->
        <el-table :data="saleRecordList" border stripe>
          <el-table-column type="index" label="序号"></el-table-column>
          <el-table-column prop="campsiteName" label="营地名称"></el-table-column>
            <el-table-column prop="facilityName" label="设施名称"></el-table-column>
            <el-table-column prop="facilityServiceName" label="设施服务名称"></el-table-column>
            <el-table-column prop="price" label="销售额"></el-table-column>


          <el-table-column label="操作">
            <!-- 作用域插槽 -->
            <template slot-scope="scope">
              
              <!--删除按钮-->
              <el-button type="danger" size="mini" icon="el-icon-delete"
                @click="removeSaleRecordById(scope.row.id)"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
      </el-card>
   
  </div>
</template>
  
<script>
import { saleRecordList,  saleRecordDelete, saleRecordListByUserId } from "@/api/saleRecord";
export default {
  data() {
    return {
      saleRecordList: [], // 销售记录信息列表
    };
  },
  created() {
    // 生命周期函数
    this.getSaleRecordList();
  },
  methods: {
    getSaleRecordList() {
      saleRecordListByUserId(this.$store.state.user.id)
        .then((res) => {
          if (res.data.code === 200) {
            this.saleRecordList = res.data.data;
          } else {
            this.$message.error("获取销售记录信息列表失败");
          }
        })
        .catch((err) => {
          this.$message.error("获取销售记录信息列表异常");
          console.log(err);
        });
    },


    // 根据ID删除对应的销售记录信息信息
    async removeSaleRecordById(id) {
      // 弹框 询问销售记录信息是否删除
      const confirmResult = await this.$confirm(
        "此操作将永久删除该销售记录信息, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      // 如果销售记录信息确认删除，则返回值为字符串 confirm
      // 如果销售记录信息取消删除，则返回值为字符串 cancel
      // console.log(confirmResult)
      if (confirmResult == "confirm") {
        //删除销售记录信息
        saleRecordDelete(id)
          .then((res) => {
            if (res.data.code === 200) {
              this.getSaleRecordList();
              this.$message({
                message: "删除销售记录信息成功",
                type: "success",
              });
            } else {
              this.$message.error("删除销售记录信息失败");
            }
          })
          .catch((err) => {
            this.$message.error("删除销售记录信息异常");
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
  