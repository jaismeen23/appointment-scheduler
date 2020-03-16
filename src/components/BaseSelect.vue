<template>
  <div class="parent">
    <div class="label-title" v-if="value !== ''">
      <label v-if="label">{{label}}</label>
    </div>
    <div class="main-input">
      <select :value="value" @input="updateValue" v-bind="$attrs">
        <option value disabled hidden>{{label}}</option>
        <option
          v-for="option in options"
          :value="option"
          :key="option"
          :selected="option === value"
        >{{ option }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baseSelect',
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      value: '',
    },
    value: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped>
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

.main-input select {
  border: none;
  width: inherit;
  background-color: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

select:focus {
  outline: none;
}

select:hover {
  cursor: pointer;
}
</style>
