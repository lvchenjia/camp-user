<template>
  <el-row>
    <Transition name="fade" mode="out-in">
      <CampsiteSelecter @campsiteSelect="(i) => currentSelectCampsite = i"></CampsiteSelecter>
    </Transition>

    <Transition name="fade" mode="out-in">
      <FacilitySelecter v-if="currentSelectCampsite.id" :campsite="currentSelectCampsite"
        @facilitySelect="(i) => currentSelectFacility = i"></FacilitySelecter>
    </Transition>

    <Transition name="fade" mode="out-in">
      <FacilityServiceSelecter v-if="currentSelectFacility.id" :facility="currentSelectFacility"
        @facilityServiceSelect="(i) => currentSelectFacilityService = i"></FacilityServiceSelecter>
    </Transition>



    <!-- <Transition name="fade" mode="out-in">
      <el-button v-if="currentSelectCampsiteSpot.id" class="button" @click="dialogVisible = true">购买</el-button>
    </Transition> -->

    <Transition name="fade" mode="out-in">
      <el-button v-if="currentSelectFacilityService.id" class="button" @click="dialogVisible = true">购买</el-button>
    </Transition>


    <!-- <el-dialog title="选择日期" :visible.sync="dialogVisible" width="30%">
      <span style="margin-right: 20px;">购买时间</span>
      <el-date-picker v-model="currentDate" type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
      </el-date-picker>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="reservationAdd">确 定</el-button>
      </span>
    </el-dialog> -->

    <el-dialog title="确认购买？" :visible.sync="dialogVisible" width="30%">
      <span style="font-size: 20px;">营地名：{{ currentSelectCampsite.name }}</span>
      <br>
      <span style="font-size: 20px;">设施名：{{ currentSelectFacility.name }}</span>
      <br>
      <span style="font-size: 20px;">项目名：{{ currentSelectFacilityService.name }}</span>
      <br>
      <span style="font-size: 20px;">价格：{{ currentSelectFacilityService.price }} 元</span>
      <br>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saleRecordAdd">确 定</el-button>
      </span>
    </el-dialog>

  </el-row>
</template>

<style scoped>
.button {
  float: left;
  margin-left: 30%;
  width: 40%;
  height: 60px;
  font-size: medium;
  color: white;
  background-color: #b5c4b1;
  box-shadow: 6px 6px 16px 0 rgba(0, 0, 0, .2);
  border-radius: 10px;
}

.fade-enter-active{
  transition: opacity 0.7s;
}
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

::v-deep .el-dialog {
  border-radius: 15px;
  background-color: #fffaf4;
  box-shadow: 2px 2px 22px 0 rgba(21, 155, 245, 0.35);
}

.el-dialog{
  box-shadow: 6px 6px 16px 0 rgba(0, 0, 0, .2);
}
</style>

<script>
import CampsiteSelecter from '@/components/CampsiteSelecter.vue';
import FacilitySelecter from '@/components/FacilitySelecter.vue';
import FacilityServiceSelecter from '@/components/FacilityServiceSelecter.vue';
import { saleRecordAdd } from '@/api/saleRecord';
export default {
  data() {
    return {
      currentDate: new Date(),
      currentSelectCampsite: {},
      currentSelectFacility: {},
      currentSelectFacilityService: {},
      dialogVisible: false,
    };
  },
  watch: {
    currentSelectCampsite: function () {
      this.currentSelectFacility = {};
      this.currentSelectFacilityService = {};
    },
    currentSelectFacility: function () {
      this.currentSelectFacilityService = {};
    },

  },
  methods: {
    saleRecordAdd() {
      saleRecordAdd({
        userId: this.$store.state.user.id,
        campsiteId: this.currentSelectCampsite.id,
        facilityId: this.currentSelectFacility.id,
        facilityServiceId: this.currentSelectFacilityService.id,
        price: this.currentSelectFacilityService.price,
      }).then(response => {
        if (response.data.code == 200) {
          this.$message({
            message: '购买成功',
            type: 'success'
          });
        } else {
          this.$message.error(response.data.msg);
        }
      })
      this.dialogVisible = false
    }
  },
  components: { CampsiteSelecter, FacilitySelecter, FacilityServiceSelecter }
};
</script>