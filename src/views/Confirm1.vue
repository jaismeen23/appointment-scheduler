<template>
  <div class="container">
    <div class="row row-top round-container-with-shadow">
      <div class="col-md-2 car-details">
        <img src="@/assets/img/aston-martin.png" height="120px" width="240px">
      </div>
      <div class="col-md-2 car-details row-details-right">
        <div class="col-md-12">
          <div class="title">Make</div>
          <div class="car-content">Hyundai</div>
        </div>
        <div class="col-md-12">
          <div class="title title-bottom">Year</div>
          <div>2017</div>
        </div>
      </div>
      <div class="col-md-4 car-details row-details-right">
        <div class="col-md-12">
          <div class="title">Model</div>
          <div class="car-content">Genesis G90</div>
        </div>
        <div class="col-md-12">
          <div class="title title-bottom">Engine</div>
          <div>---</div>
        </div>
      </div>
      <div class="col-md-4 car-details row-details-right">
        <div class="col-md-12">
          <div class="title">Drive Train</div>
          <div class="car-content">---</div>
        </div>
        <div class="col-md-12">
          <div class="title title-bottom">Vin</div>
          <div>1HGBH41JXMN109186</div>
        </div>
      </div>
    </div>
    <div class="row row-bottom">
      <div class="col-md-4">
        <div class="row round-container-with-shadow user-detail-container">
          <div class="col-xs-2 icon-container">
            <img src="@/assets/img/icons/profile.png">
          </div>
          <div class="col-xs-10">
            <p class="title">NAME</p>
            <p class="content">Sophie Walker</p>
          </div>
        </div>
        <div class="row round-container-with-shadow user-detail-container">
          <div class="col-xs-2 icon-container">
            <img src="@/assets/img/icons/mail.png">
          </div>
          <div class="col-xs-10">
            <p class="title">EMAIL</p>
            <p class="content">sophie.walker@gmail.com</p>
          </div>
        </div>
        <div class="row round-container-with-shadow user-detail-container">
          <div class="col-xs-2 icon-container">
            <img src="@/assets/img/icons/call.png">
          </div>
          <div class="col-xs-10">
            <p class="title">PHONE</p>
            <p class="content">416 555 4321</p>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="addition-services-container">
          <p class="title">ADDITIONAL SERVICES:</p>
            <textarea name="additionalServices" cols="25" rows="8" v-model="additionalServices"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      additionalServices: 'Need snow tires and oil check, there\'s also a small dent in the bumper so I was wondering if I could get that checked too.',
    };
  },
};
</script>

<style scoped>
.container {
  text-align: left;
}

.row-top {
  height: 40%;
  padding-top: 2%;
  padding-bottom: 1%;
}

.row-bottom {
  height: 40%;
  margin-top: 5%;
}

.addition-services-container {
  background-color: #f8f8fe;
  width: 100%;
  padding: 6%;
}

.car-details {
  padding-top: 1%;
  padding-bottom: 1%;
}

.row-details-right {
  padding-left: 6%;
}

.title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  color: var(--light-gray);
}

.title-bottom {
  padding-top: 15%;
}

.round-container-with-shadow {
  width: 100%;
  margin-left: 0;
}

.user-detail-container {
  padding-top: 5%;
  margin-bottom: 5%;
}

textarea {
  border: 0;
  resize: none;
  /* background-color: #f8f8fe; */
}
</style>
