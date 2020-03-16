<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-4 top-header">
        <div>
          Welcome
          <span class="blue-text">Sophie</span>,
        </div>
        <div>what are you vehicle details?</div>
      </div>
    </div>
    <div class="row">
      <form>
        <div class="col-sm-3 col-xs-12 col-vehicle">
          <div class="select-box">
            <div class="label-title">YEAR</div>
            <div class="select-box__current" tabindex="1">
              <div class="select-box__value">
                <input class="select-box__input" type="radio" id="0" value="1" name="1" checked="checked"/>
                <p class="select-box__input-text">2019</p>
              </div>
              <div class="select-box__value">
                <input class="select-box__input" type="radio" id="1" value="2" name="1" checked="checked"/>
                <p class="select-box__input-text">2018</p>
              </div>
              <div class="select-box__value">
                <input class="select-box__input" type="radio" id="4" value="5" name="1" checked="checked"/>
                <p class="select-box__input-text">2017</p>
              </div>
            </div>
            <ul class="select-box__list">
              <li>
                <label class="select-box__option" for="0" aria-hidden="aria-hidden">2019</label>
              </li>
              <li>
                <label class="select-box__option" for="1" aria-hidden="aria-hidden">2018</label>
              </li>
              <li>
                <label class="select-box__option" for="4" aria-hidden="aria-hidden">2017</label>
              </li>
            </ul>
          </div>
          <!-- <BaseSelect label="YEAR" :options="years" v-model="selectedYear"/> -->
        </div>
        <div class="col-sm-3 col-xs-12 col-vehicle">
          <div class="select-box">
            <div class="label-title">MODEL</div>
            <div class="select-box__current" tabindex="1">
              <div class="select-box__value">
                <input class="select-box__input" type="radio" id="10" value="1" name="2" checked="checked"/>
                <p class="select-box__input-text">M1</p>
              </div>
              <div class="select-box__value">
                <input class="select-box__input" type="radio" id="11" value="2" name="2" checked="checked"/>
                <p class="select-box__input-text">M2</p>
              </div>
              <div class="select-box__value">
                <input class="select-box__input" type="radio" id="14" value="5" name="2" checked="checked"/>
                <p class="select-box__input-text">M3</p>
              </div>
            </div>
            <ul class="select-box__list">
              <li>
                <label class="select-box__option" for="10" aria-hidden="aria-hidden">M1</label>
              </li>
              <li>
                <label class="select-box__option" for="11" aria-hidden="aria-hidden">M2</label>
              </li>
              <li>
                <label class="select-box__option" for="14" aria-hidden="aria-hidden">M3</label>
              </li>
            </ul>
          </div>
          <!-- <BaseSelect label="MODEL" :options="models" v-model="selectedModel"/> -->
        </div>
        <div class="col-sm-3 col-xs-12 col-vehicle">
          <div class="select-box">
            <div class="label-title">TRIM</div>
            <div class="select-box__current" tabindex="1">
              <div class="select-box__value">
                <input class="select-box__input" type="radio" id="20" value="1" name="3" checked="checked"/>
                <p class="select-box__input-text">T1</p>
              </div>
              <div class="select-box__value">
                <input class="select-box__input" type="radio" id="21" value="2" name="3" checked="checked"/>
                <p class="select-box__input-text">T2</p>
              </div>
              <div class="select-box__value">
                <input class="select-box__input" type="radio" id="24" value="5" name="3" checked="checked"/>
                <p class="select-box__input-text">T3</p>
              </div>
            </div>
            <ul class="select-box__list">
              <li>
                <label class="select-box__option" for="20" aria-hidden="aria-hidden">T1</label>
              </li>
              <li>
                <label class="select-box__option" for="21" aria-hidden="aria-hidden">T2</label>
              </li>
              <li>
                <label class="select-box__option" for="24" aria-hidden="aria-hidden">T3</label>
              </li>
            </ul>
          </div>
          <!-- <BaseSelect label="TRIM" :options="trims" v-model="selectedTrim"/> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedYear: '',
      selectedModel: '',
      selectedTrim: '',
      years: ['2000', '2001', '2002', '2003', '2004', '2005'],
      models: [
        'Model 1',
        'Model 2',
        'Model 3',
        'Model 4',
        'Model 5',
        'Model 6',
      ],
      trims: ['Trim 1', 'Trim 2', 'Trim 3', 'Trim 4', 'Trim 5', 'Trim 6'],
    };
  },
};
</script>
<style scoped>
.container {
  text-align: left;
}

.top-header {
  margin-bottom: 2em;
  line-height: 1.5em;
}

/* CUSTOM SELECT */
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

 .select-box {
  min-height: 58px;
  widows: auto;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  position: relative;
}
 .select-box__current {
  position: absolute;
  font-size: 17px;
  color: #4a4a4a;
  width: 95%;
  top: 23px;
  height: 10px;
}
 .select-box__current:focus + .select-box__list {
	 opacity: 1;
	 animation-name: none;
}
 .select-box__current:focus + .select-box__list .select-box__option {
	 cursor: pointer;
}
 .select-box__current:focus .select-box__icon {
	 transform: translateY(-50%) rotate(180deg);
}
 .select-box__icon {
	 position: absolute;
	 top: 50%;
	 right: 15px;
	 transform: translateY(-50%);
	 width: 20px;
	 opacity: 0.3;
	 transition: 0.2s ease;
}
 .select-box__input {
	 display: none;
}
 .select-box__input:checked + .select-box__input-text {
	 display: block;
}
 .select-box__input-text {
	 display: none;
	 width: 100%;
	 margin: 0;
	 padding-left: 15px;
	 background-color: #fff;
}
 .select-box__list {
   position: absolute;
   top: 57px;
	 width: 100%;
	 padding: 0;
	 list-style: none;
	 opacity: 0;
	 animation-name: HideList;
	 animation-duration: 0.5s;
	 animation-delay: 0.5s;
	 animation-fill-mode: forwards;
	 animation-timing-function: step-start;
   box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
   z-index: 10;
}
 .select-box__option {
	 display: block;
	 padding: 15px;
	 background-color: #fff;
}
 .select-box__option:hover, .select-box__option:focus {
	 color: var(--primary-color);
	 background-color: #d9e3f7;
}
 @keyframes HideList {
	 from {
		 transform: scaleY(1);
	}
	 to {
		 transform: scaleY(0);
	}
}
</style>
