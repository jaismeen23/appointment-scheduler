<template>
  <span>
    <el-button v-on="$listeners" v-bind="$attrs" :class="buttonClass">
      <slot/>
    </el-button>
  </span>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
    },
  },
};
</script>

<style scoped>
.primary-button {
  min-width: 100px;
  height: 60px;
  color: #ffffff;
}

.blue-button:hover {
  background: var(--primary-hover);
  color: #ffffff;
}

.blue-button {
  background-color: var(--primary-color);
}

.transparent-button {
  color: var(--primary-color);
  background-color: transparent;
  border: 0;
}
</style>
