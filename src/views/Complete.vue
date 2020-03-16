<template>
  <div class="container">
    <img src="@/assets/img/icons/round-tick.png">
    <p class="font-weight-bold">Service Appointment Confirmed</p>
    <p class="blue-text font-weight-bold">Morning on Thursday, November 9th</p>
    <p>
      A reminder has been sent to your email. Please contact us if you
      <br>have any changes or concerns about your appointment prior to the
      <br>scheduled time and date.
    </p>
    <BaseButton buttonClass="primary-button blue-button el-button--medium">OKAY</BaseButton>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  margin-bottom: 1.5em;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 300px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
