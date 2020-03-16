<template>
  <div class="container">
    <form @submit.prevent="addToapi">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <BaseInput
            name="First name"
            placeholder="FIRST NAME"
            label="FIRST NAME"
            type="text"
            autofocus
            v-model="form.firstName"
            v-validate="'required'"
            :error="errors.first('First name')"
          />
        </div>
        <div class="col-xs-12 col-sm-6">
          <BaseInput
            name="Last name"
            placeholder="LAST NAME"
            label="LAST NAME"
            type="text"
            v-model="form.lastName"
            v-validate="'required'"
            :error="errors.first('Last name')"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6" style="min-height: 80px;">
          <div>
            <div class="parent">
              <div class="label-title" v-if="form.address !== ''">
                <label>ADDRESS</label>
              </div>
              <div class="main-input">
              </div>
            </div>
            <div class="error">{{ errors.first('Address') }}</div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6">
          <BaseInput
            name="City"
            placeholder="CITY"
            label="CITY"
            type="text"
            v-model="form.city"
            v-validate="'required'"
            :error="errors.first('City')"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <BaseInput
            name="Province"
            placeholder="PROVINCE"
            label="PROVINCE"
            type="text"
            v-model="form.province"
            v-validate="'required'"
            :error="errors.first('Province')"
          />
        </div>
        <div class="col-xs-12 col-sm-6">
          <BaseInput
            name="Email"
            placeholder="EMAIL"
            label="EMAIL"
            type="email"
            v-model="form.email"
            v-validate="'required|email'"
            :error="errors.first('Email')"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <BaseInput
            name="Phone number"
            placeholder="PHONE NUMBER"
            label="PHONE NUMBER"
            type="tel"
            v-model="form.phoneNumber"
            v-validate="'required'"
            :error="errors.first('Phone number')"
          />
        </div>
      </div>
      <button type ="submit" class="btn btn-large btn-block btn-primary full-width"
       @click='addToapi'>Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['location_id'],
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phoneNumber: '',
      },
    };
  },
  components: {
  },
  methods: {
    addToapi() {
      axios({
        method: 'post',
        url: process.env.VUE_APP_CUSTOMER_URL,
        data: {
          location_id: 1,
          first_name: this.form.firstName,
          last_name: this.form.lastName,
          email: this.form.email,
          address: this.form.address,
          phone_number: this.form.phoneNumber,
        },
      });
    },
    handleResults(results) {
      this.form.city = results.locality;
      this.form.province = results.administrative_area_level_1;
      this.form.address = `${results.street_number} ${results.route}`;
    },
    handleChange({ newVal }) {
      this.form.address = newVal;
    },
  },
};
</script>
<style scoped>
.picker {
  margin-left: 5vw;
}

.label-title {
  font-size: 11px;
  font-weight: 600;
  color: #9b9b9b;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: fit-content;
  position: absolute;
  left: 11px;
  top: 7px;
}
.parent {
  min-height: 58px;
  widows: auto;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  position: relative;
}
.main-input {
  position: absolute;
  font-size: 17px;
  color: #4a4a4a;
  width: 97%;
  left: 11px;
  top: 23px;
  height: 10px;
}

.main-input input {
  border: none;
  width: inherit;
}

input:focus {
  outline: none;
}
</style>
