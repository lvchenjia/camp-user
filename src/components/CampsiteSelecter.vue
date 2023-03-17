<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <p class="cardtitle" style="text-align: justify;">选择营地</p>
    </div>
    <el-row>
      <TransitionGroup name="fade-list" mode="out-in">
      <el-col :span="5"  v-for="(item) in campsiteList" :key="item.id">
          <el-card class="item" :class="{'active':item.id==currentSelectCampsite.id}" :body-style="{ padding: '0px' }" @click.native="itemClick(item)">
          <img :src="item.imageUrl" class="image" />
          <div style="margin:20px">
            <h4 style="text-align: justify;">{{item.name}}</h4>
            <p class="location" style="text-align: justify;">地址：{{item.location}}</p>
            <el-popover placement="top" width="200" trigger="click">
              <p style="text-align: justify;">{{item.description}}</p>
              <div slot="reference" class="name-wrapper">
                <el-button type="text">查看详情</el-button>
              </div>
            </el-popover>
          </div>
        </el-card>
      
        
      </el-col>
    </TransitionGroup>
    </el-row>
  </el-card>
</template>

<script>
import { campsiteListAll } from '@/api/campsite'
export default {
    
  name: 'CampsiteSelecter',
  data() {
    return {
      campsiteList: [],
      currentSelectCampsite: {},
    }
  },
  methods: {
    getCampsiteList() {
        campsiteListAll().then(response => {
            this.campsiteList = response.data.data
            console.log(this.campsiteList)
        })
    },
    itemClick(item) {
      this.currentSelectCampsite = item
      console.log('itemClick')
      console.log(this.currentSelectCampsite)
      this.$emit('campsiteSelect', item)
    },
  },
  mounted() {
    this.getCampsiteList()
  }
}
</script>

<style scoped>
.cardtitle{
    font-size: medium;
    margin-left: 3%;
    margin-top: 4px;
    margin-bottom: 0px;
  }
.image {
  width: 100%;
  height: 100%;
  display: block;
}
.location {
  font-size: smaller;
  font-weight: 100;
  margin-left: 5px;
}

.el-col{
  margin:10px;
}

.el-card {
  min-width: 100%;
  height: 100%;
  margin-right: 20px;
  transition: all .2s;
  box-shadow: 6px 6px 16px 0 rgba(0,0,0,.2);
  border-radius: 10px;
}

.item.el-card:hover {
  /* transform: scale(1.01); */
  transition-duration: 0.2s;
  box-shadow: 2px 2px 22px 0 rgba(21, 155, 245, 0.35);
}

/* el-card点击后的样式 */
.active.el-card{
  transform: scale(0.97);
  box-shadow: 2px 2px 22px 0 rgba(21, 155, 245, 0.35);
}

.box-card  ::v-deep .el-card__header {
  background-color: rgb(237, 248, 247);
}

.box-card ::v-deep .el-card__body {
  background-color: rgb(237, 248, 247);
}

.box-card{
  margin-bottom: 40px;
}

.item ::v-deep .el-card__body {
  background-color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-list-enter-active,
.fade-list-leave-active {
  transition: all 0.5s;
}

.fade-list-enter,
.fade-list-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.fade-list-enter-to,
.fade-list-leave {
  transform: translateX(0);
  opacity: 1;
}


</style>