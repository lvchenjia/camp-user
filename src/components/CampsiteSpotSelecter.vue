<template>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <p class="cardtitle" style="text-align: justify;">选择露营点</p>
        <!-- <span style="text-align: left; margin-left: 5%;">选择露营点</span> -->
        <!-- <el-divider></el-divider> -->
      </div>
      <el-row>
        <TransitionGroup name="fade-list" mode="out-in">
        <el-col :span="5"  v-for="(item) in campsiteSpotList" :key="item.id">
            <el-card class="item" :class="{'active':item.id==currentSelectCampsiteSpot.id}" :body-style="{ padding: '0px' }" @click.native="itemClick(item)">
            <img :src="campsite.imageUrl" class="image" />
            <div style="margin:20px">
              <h4 style="text-align: justify;">{{item.name}}</h4>
              <p class="description" style="text-align: justify;">{{item.description}}</p>
            </div>
          </el-card>
        </el-col>
      </TransitionGroup>
      </el-row>
    </el-card>
  </template>
  
  <script>
  import { campsitespotListByCampsiteId } from '@/api/campsitespot'
  export default {
      
    name: 'CampsiteSelecter',
    data() {
      return {
        campsiteSpotList: [],
        currentSelectCampsiteSpot: {},
      }
    },
    methods: {
      getCampsiteSpotList(){
        campsitespotListByCampsiteId(this.campsite.id).then(response => {
          this.campsiteSpotList = response.data.data
          console.log(this.campsiteSpotList)
        })
      },
      itemClick(item) {
        this.currentSelectCampsiteSpot = item
        this.$emit('campsiteSpotSelect', item)
      },
    },
    props:['campsite'],
    mounted() {
      this.getCampsiteSpotList()
    },
    watch:{
      campsite:function(){
        var tmpCampsiteSpotList = []
        campsitespotListByCampsiteId(this.campsite.id).then(response => {
          tmpCampsiteSpotList = response.data.data
        })
        
        this.campsiteSpotList = []
        setTimeout(() => {
          this.campsiteSpotList = tmpCampsiteSpotList
        },500);
      }
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
  .description {
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
    transition: all 0.3s ease-in-out;
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
    transform: scale(0.93);
    box-shadow: 2px 2px 22px 0 rgba(21, 155, 245, 0.35);
  }
  /* rgb(237, 248, 247); */
  .box-card  ::v-deep .el-card__header {
    background-color: #fffaf4;
  }
  
  .box-card ::v-deep .el-card__body {
    background-color: #fffaf4;
  }
  .box-card{
    margin-bottom: 40px;
    min-height: 300px;
  }

  .item ::v-deep .el-card__body {
    background-color: white;
  }

  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
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



/* .fade-height-enter-active{
  transition:all 1s;
  opacity: 1; 
  max-height: 1000px;
}
.fade-height-leave-active{
  transition:all 1s;
  opacity: 0; 
  max-height: 0px;
}
.fade-height-leave{
  opacity: 0; 
  max-height: 1000px;
}
.fade-height-enter{
  opacity: 0; 
  max-height: 0px;
} */

  </style>