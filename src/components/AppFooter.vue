<template>
  <div id="footer" class="bg-gray">
    <div class="container footer-container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-9">
          <h5 class="subtitle"></h5>
          <p class="primary-text"></p>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-3">
          <div class="col-xs-6" v-show="!isWhenRoute">
            <BaseButton
              buttonClass="primary-button transparent-button el-button--medium"
              @click="previousStep"
            >BACK</BaseButton>
          </div>
          <div class="col-xs-12 next-button text-right" v-show="isWhenRoute">
            <BaseButton
              buttonClass="primary-button blue-button el-button--medium"
              @click="nextStep"
            >{{ nextButtonTitle }}</BaseButton>
          </div>
          <div class="col-xs-6" v-show="!isWhenRoute">
            <BaseButton
              buttonClass="primary-button blue-button el-button--medium"
              @click="nextStep"
            >{{ nextButtonTitle }}</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 'location',
      nextStepName: '',
      isWhenRoute: false,
      nextButtonTitle: 'NEXT',
    };
  },
  watch: {
    $route(to, from) {
      switch (to.name) {
        case 'Customer': {
          this.nextStepName = 'When';
          this.nextButtonTitle = 'NEXT';
          this.isWhenRoute = false;
          break;
        }

        case 'Vehicle': {
          this.nextStepName = 'Transportation';
          this.nextButtonTitle = 'NEXT';
          this.isWhenRoute = false;
          break;
        }
        case 'Transportation': {
          this.nextStepName = 'Complete';
          this.nextButtonTitle = 'SUBMIT';
          this.isWhenRoute = false;
          break;
        }
        case 'Location': {
          this.nextStepName = 'Customer';
          this.nextButtonTitle = 'NEXT';
          this.isWhenRoute = false;
          break;
        }
        case 'Confirm': {
          this.nextStepName = 'Vehicle';
          this.nextButtonTitle = 'NEXT';
          this.isWhenRoute = false;
          break;
        }
        case 'When': {
          this.nextStepName = 'Confirm';
          this.nextButtonTitle = 'NEXT';
          this.isWhenRoute = false;
          break;
        }
        default: {
          this.nextStepName = 'location';
          this.nextButtonTitle = '';
          this.isWhenRoute = true;
          break;
        }
      }
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: this.nextStepName });
    },
    previousStep() {
      this.$router.go(-1);
    },
  },
};
</script>
<style>
#footer {
  padding-top: 2%;
}

.footer-container {
  text-align: left;
}

.bg-gray {
  background: #f9f9f9;
  border-top: 1px solid #e6e6e6;
}
.primary-text {
  color: var(--primary-color);
  font-size: 20px;
}
</style>
