<template>
  <div class="container">
    <div class="row row-top">
      <div class="row">
        <div class="col-xs-12 col-sm-4 top-header">
          <div>
            Welcome
            <span class="blue-text">Sophie</span>,
          </div>
          <div>which vehicle will you bring?</div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3 col-sm-2 pull-right">
          <div>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;" xml:space="preserve" height="25px" width="25px"><g><path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554  c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587  c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z" data-original="#1E201D" class="active-path" data-old_color="#4a4a4a" fill="#4a4a4a"/></g> </svg>
            </span>
            <span class="pull-right">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve" height="25px" width="25px" class=""><g><path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z" data-original="#1E201D" class="active-path" data-old_color="#4a4a4a" fill="#4a4a4a"/></g> </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-mid">
      <div class="col-sm-6 col-md-3" v-scroll-to="'#make'" @click="selectCar(1)">
        <div class="round-container-with-shadow" :class="{ selected: selectCarContainer === 1 }">
          <div class="row car-container-top-one car-container-top">
            <img src="@/assets/img/car.jpg" class="car" height="75" width="80">
          </div>
          <div class="row car-container-bottom" :class="{ selectedd: selectCarContainer === 1 }">Other</div>
        </div>
        <div class="arrow-down" v-if="selectCarContainer === 1"></div>
      </div>
      <div class="col-sm-6 col-md-3" v-scroll-to="'#make'" @click="selectCar(2)">
        <div class="round-container-with-shadow" :class="{ selected: selectCarContainer === 2 }">
          <div class="row car-container-top">
            <div>
              <img src="@/assets/img/car1.png" class="car" height="100" width="190">
            </div>
            <div>VIN 1HGBH41JXMN109186</div>
          </div>
          <div class="row car-container-bottom" :class="{ selectedd: selectCarContainer === 2 }">2017 Genesis G90</div>
        </div>
        <div class="arrow-down" v-if="selectCarContainer === 2"></div>
      </div>
      <div class="col-sm-6 col-md-3" v-scroll-to="'#make'" @click="selectCar(3)">
        <div class="round-container-with-shadow" :class="{ selected: selectCarContainer === 3 }">
          <div class="row car-container-top">
            <div>
              <img src="@/assets/img/car2.png" class="car" height="100" width="160">
            </div>
            <div>VIN 1HGBH41JXMN109186</div>
          </div>
          <div class="row car-container-bottom" :class="{ selectedd: selectCarContainer === 3 }">2017 Genesis G70</div>
        </div>
        <div class="arrow-down" v-if="selectCarContainer === 3"></div>
      </div>
      <div class="col-sm-6 col-md-3" v-scroll-to="'#make'" @click="selectCar(4)">
        <div class="round-container-with-shadow" :class="{ selected: selectCarContainer === 4 }">
          <div class="row car-container-top">
            <div>
              <img src="@/assets/img/car3.png" class="car" height="100" width="190">
            </div>
            <div>VIN 1HGBH41JXMN109186</div>
          </div>
          <div class="row car-container-bottom" :class="{ selectedd: selectCarContainer === 4 }">2017 Genesis G80</div>
        </div>
        <div class="arrow-down" v-if="selectCarContainer === 4"></div>
      </div>
    </div>
    <div class="row row-bottom">
      <div class="row">
        <div class="col-xs-12 col-md-3 car-details">
          <BaseInput placeholder="MAKE" label="MAKE" type="text" id="make" v-model="make"/>
        </div>
        <div class="col-xs-12 col-md-3 car-details">
          <BaseInput placeholder="YEAR" label="year" type="text" v-model="year"/>
        </div>
        <div class="col-xs-12 col-md-3 car-details">
          <BaseInput placeholder="MODEL" label="MODEL" type="text" v-model="model"/>
        </div>
        <div class="col-xs-12 col-md-3 car-details">
          <BaseInput
            placeholder="TRANSMISSION"
            label="TRANSMISSION"
            type="text"
            v-model="transmission"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 car-details">
          <BaseInput placeholder="ENGINE" label="ENGINE" type="text" v-model="engine"/>
        </div>
        <div class="col-md-3 car-details">
          <BaseInput
            placeholder="DRIVE TRAIN"
            label="DRIVE TRAIN"
            type="text"
            v-model="driveTrain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      make: 'Hyundai',
      year: '2017',
      model: 'Genesis G90',
      transmission: '---',
      engine: '---',
      driveTrain: '---',
      selectCarContainer: null,
    };
  },
  methods: {
    selectCar(carId) {
      this.selectCarContainer = carId;
    },
  },
};
</script>

<style <style scoped>
.container {
  text-align: left;
}

.row-top {
  height: 20%;
}

.row-mid {
  height: 65%;
  text-align: center;
}

.row-bottom {
  height: 15%;
}

.row-top,
.row-mid,
.row-bottom {
  padding-bottom: 20px;
}

.car-details {
  margin-bottom: 2%;
}

.car-container-top {
  height: 60%;
  padding: 3%;
  font-size: 14px;
  font-weight: 600;
  color: var(--light-gray);
}

.car-container-bottom {
  height: 40%;
  padding-top: 13%;
  padding-bottom: 13%;
  margin-left: 0;
  margin-right: 0;
  color: var(--dark-gray);
  background-color: #f8f8fe;
}
.row-mid .col-md-3 {
  height: 100%;
}

.car-container-top-one {
  padding: 30px 0;
}

.row {
  margin: 0;
}

.round-container-with-shadow, svg {
  cursor: pointer;
}

.selected {
 border: 2px solid var(--primary-color);
}

.selectedd {
  background-color: var(--primary-color);
  color: #fff;
}

.arrow-down {
  text-align: center;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  margin: auto;
  border-top: 15px solid var(--primary-color);
}
</style>
