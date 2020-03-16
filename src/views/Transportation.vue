<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <div class="title">Do you require a loner vehicle</div>
        <el-radio class="option" v-model="requiredLonerVehicle" label="yes">Yes</el-radio>
        <br>
        <el-radio class="option" v-model="requiredLonerVehicle" label="no">No</el-radio>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <div class="title">Would you like to use our valet service?</div>
        <el-radio class="option" v-model="useValetService" label="yes">Yes</el-radio>
        <br>
        <el-radio class="option" v-model="useValetService" label="no">No</el-radio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requiredLonerVehicle: 'yes',
      useValetService: 'no',
    };
  },
};
</script>

<style scoped>
.container {
  text-align: left;
}

.row {
  margin-bottom: 2em;
}

.title {
  line-height: 1.5em;
  margin-bottom: 1em;
}

.option {
  line-height: 2em !important;
}
</style>
