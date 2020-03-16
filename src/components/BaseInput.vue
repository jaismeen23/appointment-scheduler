/* eslint-disable no-useless-return */
<template>
  <div class="parent-container">
    <div class="parent">
      <div class="label-title" v-if="value !== ''">
        <label v-if="label">{{label}}</label>
      </div>
      <div class="main-input">
        <input :value="value" @input="updateValue" v-bind="$attrs" >
      </div>
    </div>
    <div class="error" v-show="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: 'baseInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      value: '',
    },
    value: [String, Number],
    error: {
      type: String,
      required: false,
    },
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

.parent-container {
  min-height: 80px;
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

.input-disabled {
  background: #fcfcfc !important;
  border: 1px solid #f1f1f1 !important;
  pointer-events: none;
}

.input-disabled:hover {
  cursor: no-drop;
}
</style>
