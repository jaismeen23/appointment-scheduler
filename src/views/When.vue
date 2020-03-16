<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-lg-7 left-container">
        <div class="text-right picker">
          <picker/>
        </div>
      </div>
      <div
        class="col-xs-12 col-sm-6 col-lg-5 right-container when-right-container"
        v-if="!timePicker"
      >
        <div class="right-title">Time of Day</div>
        <div class="row round-container-with-shadow day-container">
          <div class="col-xs-12 col-sm-12 day-content" @click="showTimePicker('morning')">
            <div class="row">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="15px"
                height="16px"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 30 30"
              >
                <g>
                  <g>
                    <path
                      fill="#020400"
                      fill-rule="evenodd"
                      d="m29,23h-6c0-4.418-3.582-8-8-8-4.419,0-8,3.582-8,8h-6c-0.552,0-1,0.447-1,1 0,0.553 0.448,1 1,1h28c0.553,0 1-0.447 1-1 0-0.553-0.447-1-1-1zm-20,0c0-3.313 2.686-6 6-6 3.313,0 6,2.687 6,6h-12zm6-12c0.553,0 1-0.447 1-1v-4c0-0.553-0.447-1-1-1-0.552,0-1,0.447-1,1v4c0,0.553 0.448,1 1,1zm10.363,4.888l3.185-2.016c0.44-0.278 0.59-0.896 0.336-1.377-0.254-0.482-0.816-0.647-1.256-0.369l-3.185,2.016c-0.44,0.278-0.59,0.895-0.336,1.377 0.254,0.482 0.817,0.647 1.256,0.369zm-23.911-2.016l3.185,2.016c0.44,0.278 1.003,0.113 1.256-0.369 0.254-0.482 0.103-1.099-0.336-1.377l-3.185-2.016c-0.44-0.278-1.002-0.113-1.256,0.369-0.255,0.482-0.104,1.099 0.336,1.377z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="row">Morning</div>
          </div>
        </div>
        <div class="row round-container-with-shadow day-container">
          <div class="col-xs-12 col-sm-12 day-content" @click="showTimePicker('morning')">
            <div class="row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15px"
                height="16px"
              >
                <path
                  style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal"
                  d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1458514 5 5 8.1458514 5 12 C 5 15.854149 8.1458514 19 12 19 C 15.854149 19 19 15.854149 19 12 C 19 8.1458514 15.854149 5 12 5 z M 12 7 C 14.773268 7 17 9.2267316 17 12 C 17 14.773268 14.773268 17 12 17 C 9.2267316 17 7 14.773268 7 12 C 7 9.2267316 9.2267316 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z"
                  font-weight="400"
                  font-family="sans-serif"
                  white-space="normal"
                  overflow="visible"
                ></path>
              </svg>
             </div>
           <!-- <div class="row">Afternoon</div>
             <div
              class="row"
              :class="{ selectedtab: selectedTimings === 'afternoon' }"
              style="height: 4px;"
            ></div>
          </div>
        </div>
        <div class="row round-container-with-shadow day-container">
          <div class="col-xs-12 col-sm-12 day-content" @click="showTimePicker('morning')">
            <div class="row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="9"
                height="10"
                viewBox="0 0 9 10"
              >
                <defs>
                  <path
                    id="4w9ia"
                    d="M988 636.995c0-2.649 2.002-4.817 4.536-4.993a4.544 4.544 0 0 0-1.616 3.493c0 2.488 1.963 4.505 4.385 4.505.6 0 1.172-.124 1.693-.348-.861 1.41-2.388 2.348-4.128 2.348-2.69 0-4.87-2.24-4.87-5.005z"
                  ></path>
                </defs>
                <g>
                  <g transform="translate(-988 -632)">
                    <use fill="#4a4a4a" xlink:href="#4w9ia"></use>
                  </g>
                </g>
              </svg>
            </div>
            <div class="row">Evening</div>
          </div>
        </div>
      </div>
      <div
        class="col-xs-12 col-sm-6 col-lg-5 right-container round-container-with-shadow when-right-container"
        v-if="timePicker"
      >
        <div class="row tab-header">
          <div class="col-xs-4 tab-header-container" @click="selectTab('morning')">
            <div class="row">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="13px"
                height="14px"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 30 30"
              >
                <g>
                  <g>
                    <path
                      fill="#020400"
                      fill-rule="evenodd"
                      d="m29,23h-6c0-4.418-3.582-8-8-8-4.419,0-8,3.582-8,8h-6c-0.552,0-1,0.447-1,1 0,0.553 0.448,1 1,1h28c0.553,0 1-0.447 1-1 0-0.553-0.447-1-1-1zm-20,0c0-3.313 2.686-6 6-6 3.313,0 6,2.687 6,6h-12zm6-12c0.553,0 1-0.447 1-1v-4c0-0.553-0.447-1-1-1-0.552,0-1,0.447-1,1v4c0,0.553 0.448,1 1,1zm10.363,4.888l3.185-2.016c0.44-0.278 0.59-0.896 0.336-1.377-0.254-0.482-0.816-0.647-1.256-0.369l-3.185,2.016c-0.44,0.278-0.59,0.895-0.336,1.377 0.254,0.482 0.817,0.647 1.256,0.369zm-23.911-2.016l3.185,2.016c0.44,0.278 1.003,0.113 1.256-0.369 0.254-0.482 0.103-1.099-0.336-1.377l-3.185-2.016c-0.44-0.278-1.002-0.113-1.256,0.369-0.255,0.482-0.104,1.099 0.336,1.377z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div> -->
            <div class="row" :class="{ primaryfont : selectedTimings === 'morning'}">Morning</div>
            <div
              class="row"
              :class="{ selectedtab: selectedTimings === 'morning' }"
              style="height: 4px;"
            ></div>
          </div>
         <!-- <div class="col-xs-4 tab-header-container" @click="selectTab('afternoon')">
            <div class="row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11" height="12">
                <path
                  style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal"
                  d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1458514 5 5 8.1458514 5 12 C 5 15.854149 8.1458514 19 12 19 C 15.854149 19 19 15.854149 19 12 C 19 8.1458514 15.854149 5 12 5 z M 12 7 C 14.773268 7 17 9.2267316 17 12 C 17 14.773268 14.773268 17 12 17 C 9.2267316 17 7 14.773268 7 12 C 7 9.2267316 9.2267316 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z"
                  font-weight="400"
                  font-family="sans-serif"
                  white-space="normal"
                  overflow="visible"
                ></path>
              </svg>
            </div>
            <div class="row">Afternoon</div>
            <div
              class="row"
              :class="{ selectedtab: selectedTimings === 'afternoon' }"
              style="height: 4px;"
            ></div>
          </div>
          <div class="col-xs-4 tab-header-container" @click="selectTab('evening')">
            <div class="row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="9"
                height="10"
                viewBox="0 0 9 10"
              >
                <defs>
                  <path
                    id="4w9ia"
                    d="M988 636.995c0-2.649 2.002-4.817 4.536-4.993a4.544 4.544 0 0 0-1.616 3.493c0 2.488 1.963 4.505 4.385 4.505.6 0 1.172-.124 1.693-.348-.861 1.41-2.388 2.348-4.128 2.348-2.69 0-4.87-2.24-4.87-5.005z"
                  ></path>
                </defs>
                <g>
                  <g transform="translate(-988 -632)">
                    <use fill="#4a4a4a" xlink:href="#4w9ia"></use>
                  </g>
                </g>
              </svg>
            </div>
            <div class="row" :class="{ primaryfont : selectedTimings === 'evening'}">Evening</div>
            <div
              class="row"
              :class="{ selectedtab: selectedTimings === 'evening' }"
              style="height: 4px;"
            ></div>
          </div> -->
        </div>
        <div class="row" v-if="selectedTimings === 'morning'">
          <div class="tab-inside">
            <div class="col-xs-3">
              <div v-for="timing in timings[0]" :key="timing.time">
                <div
                  class="time-container"
                  @click="selectTime(timing.time)"
                  :class="{selectedtime: selectedTime === timing.time}"
                >{{timing.time}}</div>
              </div>
            </div>
            <div class="col-xs-3">
              <div v-for="timing in timings[1]" :key="timing.time">
                <div
                  class="time-container"
                  @click="selectTime(timing.time)"
                  :class="{selectedtime: selectedTime === timing.time}"
                >{{timing.time}}</div>
              </div>
            </div>
            <div class="col-xs-3">
              <div v-for="timing in timings[2]" :key="timing.time">
                <div
                  class="time-container"
                  @click="selectTime(timing.time)"
                  :class="{selectedtime: selectedTime === timing.time}"
                >{{timing.time}}</div>
              </div>
            </div>
            <div class="col-xs-3">
              <div v-for="timing in timings[3]" :key="timing.time">
                <div
                  class="time-container"
                  @click="selectTime(timing.time)"
                  :class="{selectedtime: selectedTime === timing.time}"
                >{{timing.time}}</div>
              </div>
            </div>
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
      timings: [
        [
          {
            time: '8.00 AM',
          },
          {
            time: '8.10 AM',
          },
          {
            time: '8.20 AM',
          },
          {
            time: '8.30 AM',
          },
          {
            time: '8.40 AM',
          },
          {
            time: '8.50 AM',
          },
        ],
        [
          {
            time: '9.00 AM',
          },
          {
            time: '9.10 AM',
          },
          {
            time: '9.20 AM',
          },
          {
            time: '9.30 AM',
          },
          {
            time: '9.40 AM',
          },
          {
            time: '9.50 AM',
          },
        ],

        [
          {
            time: '10.00 AM',
          },
          {
            time: '10.10 AM',
          },
          {
            time: '10.20 AM',
          },
          {
            time: '10.30 AM',
          },
          {
            time: '10.40 AM',
          },
          {
            time: '10.50 AM',
          },
        ],
        [
          {
            time: '11.00 AM',
          },
          {
            time: '11.10 AM',
          },
          {
            time: '11.20 AM',
          },
          {
            time: '11.30 AM',
          },
        ],
      ],
      selectedTimings: 'morning',
      selectedTime: null,
      timePicker: false,
    };
  },
  components: {
    picker: () => import('@/components/Calendar/Calendar'),
  },
  methods: {
    showTimePicker(timings) {
      this.timePicker = true;
      this.selectedTimings = timings;
    },
    selectTab(time) {
      this.selectedTimings = time;
    },
    selectTime(time) {
      this.selectedTime = time;
    },
  },
};
</script>
<style scoped>
.right-title {
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 1em;
}

.slot {
  margin: 4px 10px !important;
}

.right-container {
  height: 20em;
}

.day-container {
  font-weight: 600;
  height: 33.3%;
  margin-bottom: 4%;
  cursor: pointer;
}

.day-container:hover {
  color: var(--primary-color);
}

.day-content {
  padding-top: 8%;
}

.selectedtab {
  background-color: var(--primary-color);
}

.selectedtime {
  background-color: var(--primary-color);
  color: #fff !important;
  border-radius: 5px;
}

.el-button--small {
  margin-bottom: 10px;
}

.left-container {
  margin-bottom: 20px;
}

.el-button {
  border: 0;
  font-weight: 600;
  color: var(--dark-gray);
  background-color: #d9e3f7;
}

.button-click {
  color: #fff;
  background-color: var(--primary);
}

.time-picker {
  padding-top: 3%;
}

.tab-container {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
}

.tab-inside {
  padding: 3%;
  padding-top: 5%;
  /* border: 1px solid lightgray; */
  background-color: #d9e3f7;
  height: 298px;
}

.primaryfont {
  color: var(--primary-color);
}

.tab-header {
  margin-top: 10px;
}

.tab-header-container {
  /* border: 1px solid lightgray; */
  /* margin-bottom: 20px; */
}

.time-container {
  font-size: 1.7vh;
  font-weight: 600;
  height: 35px;
  padding-top: 7%;
  padding-bottom: 12%;
  color: var(--dark-gray);
  margin-bottom: 5%;
}

.col-xs-3 {
  padding-left: 5px;
  padding-right: 5px;
}
</style>
