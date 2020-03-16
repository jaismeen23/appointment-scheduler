<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <div class="left-container round-container-with-shadow">
          <div class="row left-row-top">
            <img src="@/assets/img/aston-martin.png" class="car" height="130" width="260">
          </div>
          <div class="row left-row-bottom">
            <div class="col-sm-6 col-md-6">
              <p class="title">YEAR</p>
              <p class="content">2017</p>
            </div>
            <div class="col-sm-6 col-md-6">
              <p class="title">MODEL</p>
              <p class="content">Genesis G90</p>
            </div>
          </div>
          <div class="row left-row-bottom">
            <div class="col-sm-6 col-md-6">
              <p class="title">TRIM</p>
              <p class="content">Sport</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-5">
        <div class="right-container">
          <div class="row right-row right-row-small right-row-one round-container-with-shadow">
            <div class="col-xs-2 icon-container">
              <img src="@/assets/img/icons/profile.png">
            </div>
            <div class="col-xs-10">
              <p class="title">NAME</p>
              <p class="content">Sophie Walker</p>
            </div>
          </div>
          <div class="row right-row right-row-small round-container-with-shadow">
            <div class="col-xs-2 icon-container">
              <img src="@/assets/img/icons/mail.png">
            </div>
            <div class="col-xs-10">
              <p class="title">EMAIL</p>
              <p class="content">sophie.walker@gmail.com</p>
            </div>
          </div>
          <div class="row right-row right-row-small round-container-with-shadow">
            <div class="col-xs-2 icon-container">
              <img src="@/assets/img/icons/call.png">
            </div>
            <div class="col-xs-10">
              <p class="title">PHONE</p>
              <p class="content">416 555 4321</p>
            </div>
          </div>
          <div class="row right-row right-row-big round-container-with-shadow">
            <div class="col-xs-2 icon-container">
              <img src="@/assets/img/icons/location.png">
            </div>
            <div class="col-xs-10">
              <p class="title location-name">GENESIS DOWNTOWN</p>
              <p class="content">
                630 QUEEN ST E, TORONTO, ON M4G
                <br>1G3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  text-align: left;
}

.col-md-2 {
  padding-right: 0px;
}

.left-container {
  min-height: 27em;
}

.left-row-top {
  height: 50%;
  text-align: center;
}

.left-row-bottom {
  height: 25%;
}

.right-container {
  height: 26em;
}

.right-row {
  padding: 5% 0;
  margin: 8% 0;
}

.right-row-one {
  margin-top: 0;
}

.right-row-small {
  height: 18%;
  width: 85%;
}

.right-row-big {
  height: 30%;
}

.title {
  color: var(--light-gray);
  font-size: 12px;
  font-weight: 600;
}

.content {
  color: var(--dark-gray);
}

.car {
  margin-top: 10%;
  margin-bottom: 10%;
}

.left-row-bottom {
  padding-left: 15%;
}

.icon-container {
  height: 100%;
}

.location-name {
  font-weight: 600;
}
</style>
