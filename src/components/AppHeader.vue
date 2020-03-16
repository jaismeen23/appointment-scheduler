<template>
  <div class="container">
    <br>
    <div class="row">
      <div class="col-xs-12">
        <h2>Schedule Service Appointment</h2>
      </div>
    </div>
    <div class="row stepper">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="arrow-steps clearfix">
          <div class="step" :class="{ current: $route.path === '/' }">
            <span>1. LOCATION</span>
          </div>

          <div class="step" :class="{ current: $route.path === '/customer' }">
            <span>2. CUSTOMER</span>
          </div>
          <div class="step" :class="{ current: $route.path === '/when' }">
            <span>3. WHEN</span>
          </div>
           <div class="step" :class="{ current: $route.path === '/confirm' }">
            <span>4. CONFIRM</span>
          </div>
          <div class="step" :class="{ current: $route.path === '/vehicle' }">
            <span>5. VEHICLE</span>
          </div>
          <div class="step" :class="{ current: $route.path === '/transportation' }">
            <span>6. TRANSPORTATION</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped >
h2 {
  color: var(--darkest-gray);
  font-weight: 600;
}

/* STEPPER */
.stepper {
  padding-top: 30px;
  padding-left: 2%;
  padding-right: 2%;
}

.clearfix:after {
  clear: both;
  content: "";
  display: block;
  height: 0;
}

.nav {
  margin-top: 40px;
}

.arrow-steps .step {
  font-size: 14px;
  text-align: center;
  color: #9b9b9b;
  cursor: default;
  margin: 0 3px;
  padding: 10px 10px 10px 30px;
  min-width: 15%;
  float: left;
  position: relative;
  background-color: #d9e3f7;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: background-color 0.2s ease;
}

.arrow-steps .step:after,
.arrow-steps .step:before {
  content: " ";
  position: absolute;
  top: 0;
  right: -17px;
  width: 0;
  height: 100%;
  line-height: 14px;
  border-top: 19px solid transparent;
  border-bottom: 17px solid transparent;
  border-left: 17px solid #d9e3f7;
  z-index: 2;
  transition: border-color 0.2s ease;
}

.arrow-steps .step:before {
  right: auto;
  left: 0;
  border-left: 17px solid #fff;
  z-index: 0;
}

.arrow-steps .step:first-child:before {
  border: none;
}

.arrow-steps .step:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.arrow-steps .step span {
  position: relative;
}

.arrow-steps .step span:before {
  opacity: 0;
  content: "✔";
  position: absolute;
  top: -2px;
  left: -20px;
}

.arrow-steps .step.done span:before {
  opacity: 1;
  -webkit-transition: opacity 0.3s ease 0.5s;
  -moz-transition: opacity 0.3s ease 0.5s;
  -ms-transition: opacity 0.3s ease 0.5s;
  transition: opacity 0.3s ease 0.5s;
}

.arrow-steps .step.current {
  color: #fff;
  background-color: #6f94ff;
}

.arrow-steps .step.current:after {
  border-left: 17px solid #6f94ff;
}

.arrow-steps .step:first-child {
  border-radius: 50px 0 0 50px;
}

.arrow-steps .step:last-child {
  border-radius: 0 50px 50px 0;
}

.arrow-steps .step:last-child:after {
  right: 0;
}
</style>
