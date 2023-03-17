<template>
      <el-row>
      <div>
        <h2>
          <span>露营地管理系统</span>
        </h2>
        <h2>
          <span>显示一些基础管理信息</span>
        </h2>
      </div>
      <el-row :gutter="24">
        <el-col :span="8" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://cdn.pixabay.com/photo/2021/05/17/12/42/lake-6260668__480.png"
            class="image"
          />
          <div style="margin:25px">
            <p style="text-align: justify;">某景区图片欣赏</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://cdn.pixabay.com/photo/2022/05/12/16/04/trees-7191822__480.png"
            class="image"
          />
          <div style="margin:25px">
            <p style="text-align: justify;">某景区图片欣赏</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://cdn.pixabay.com/photo/2018/09/07/19/44/mountains-3661319__480.png"
            class="image"
          />
          <div style="margin:25px">
            <p style="text-align: justify;">某景区图片欣赏</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" :key="o" style="margin-top: 50px;">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://cdn.pixabay.com/photo/2013/03/03/19/51/greenwood-89662__480.jpg"
            class="image"
          />
          <div style="margin:25px">
            <p style="text-align: justify;">某景区图片欣赏</p>
          </div>
        </el-card>
      </el-col>

      
      </el-row>
    </el-row>
  </template>
  
  <style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  
  .button {
    padding: 0;
    float: right;
  }
  
  .image {
    width: 100%;
    height: 100%;
    display: block;
  }
  
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  
  .clearfix:after {
    clear: both;
  }

  .el-card {
    min-width: 100%;
    height: 100%;
    margin-right: 20px;
    transition: all .5s;
    box-shadow: 6px 6px 16px 0 rgba(0,0,0,.2);
    border-radius: 10px;
  }

  </style>
  
  <script>
  export default {
    data() {
      return {
        currentDate: new Date(),
      };
    },
  };
  </script>