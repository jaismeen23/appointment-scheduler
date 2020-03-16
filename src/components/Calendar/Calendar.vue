<template>
  <section class="v-calendar">
    <div class="content">
      <div class="calendar">
        <div class="selected-field">
          <div class="selected-date">
            <button
              type="button"
              class="viewButton text-left"
            >{{ this.calendar.months[currentDate.month].name }} {{ this.currentDate.year }}</button>
            <button class="prevDateButton" type="button" @click="prevMount('start')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 31.494 31.494"
                style="enable-background:new 0 0 31.494 31.494;"
                xml:space="preserve"
                height="20px"
                width="20px"
              >
                <g>
                  <path
                    d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554  c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587  c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"
                    data-original="#1E201D"
                    class="active-path"
                    data-old_color="#4a4a4a"
                    fill="#4a4a4a"
                  ></path>
                </g>
              </svg>
            </button>
            <button class="nextDateButton" type="button" @click="nextMount('start')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 31.49 31.49"
                style="enable-background:new 0 0 31.49 31.49;"
                xml:space="preserve"
                height="20px"
                width="20px"
                class
              >
                <g>
                  <path
                    d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                    data-original="#1E201D"
                    class="active-path"
                    data-old_color="#4a4a4a"
                    fill="#4a4a4a"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div class="days">
          <div
            class="day name"
            v-for="day in calendar.days"
            :key="`${day.dayNumber}-day`"
          >{{ day.name.substring(0, 2) }}</div>
          <!-- {{ calendar}} -->
          <button
            class="day square"
            :class="[{'disabledDate': !mDay.isDayInMouth || !mDay.isUsable}, {'selectedDate': range ? formatDate(selectedDate[0]) === mDay.date : formatDate(selectedDate) === mDay.date }, {'selectedRange': isInSelectedDate(mDay.fullDate)}]"
            v-for="(mDay,index) in calendar.daysOfMonth"
            :key="`${index}-mounthday`"
            @click="handlerDate(mDay.fullDate,'start')"
            type="button"
          >
            <span class="number">{{ mDay.day }}</span>
          </button>
        </div>
      </div>
      <div class="calendar" :class="{'textLong': textFormat === 'long'}" v-if="range">
        <div class="selected-field">
          <div class="selected-date">
            <button class="prevDateButton" type="button" @click="prevMount('end')"></button>
            <div>{{ this.calendarEnd.months[currentDateEnd.month].name }} {{ this.currentDateEnd.year }}</div>
            <button class="nextDateButton" type="button" @click="nextMount('end')"></button>
          </div>
        </div>
        <div class="days">
          <div
            class="day name"
            v-for="day in calendarEnd.days"
            :key="`${day.dayNumber}-day`"
          >{{ day.name }}</div>
          <button
            class="day square"
            :class="[{'disabledDate': !mDay.isDayInMouth || !mDay.isUsable}, {'selectedDate': formatDate(selectedDate[1]) === mDay.date}, {'selectedRange': isInSelectedDate(mDay.fullDate)}]"
            v-for="(mDay,index) in calendarEnd.daysOfMonth"
            :key="`${index}-mounthday`"
            @click="handlerDate(mDay.fullDate, 'end')"
            type="button"
          >
            <span class="number">{{ mDay.day }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Calendar from './datepicker';

export default {
  name: 'VueDatePicker',
  data() {
    return {
      calendarView: 'day',
      isShowPicker: false,
      currentDate: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        firstDayOfWeek: this.firstDayOfWeek,
      },
      currentDateEnd: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        firstDayOfWeek: this.firstDayOfWeek,
      },
      selectedDate: this.range ? [null, null] : null,
    };
  },
  props: {
    textFormat: {
      type: String,
      default: 'short',
    },
    dateFormat: {
      type: Object,
      default() {
        return { day: '2-digit', month: 'long', year: 'numeric' };
      },
    },
    value: {
      type: [Array, String, Date],
    },
    range: {
      type: Boolean,
      default: false,
    },
    lang: {
      type: String,
      default: 'en',
    },
    inputClass: {
      type: String,
      default: '',
    },
    firstDayOfWeek: {
      type: String,
      default: 'sunday', // monday or sunday
    },
    disabledStartDate: {
      type: Object,
      default() {
        return {
          from: null,
          to: null,
        };
      },
    },
    disabledEndDate: {
      type: Object,
      default() {
        return {
          from: null,
          to: null,
        };
      },
    },
  },
  computed: {
    disabledStartDateCalc() {
      const unSelectedDate = {
        from: null,
        to: null,
      };
      if (this.range) {
        let disabledDate = new Date(this.selectedDate[1]);
        disabledDate = !this.disabledStartDate.from
          || disabledDate.getTime() < this.disabledStartDate.from.getTime()
          ? disabledDate
          : this.disabledStartDate.from;
        unSelectedDate.from = disabledDate;
        unSelectedDate.to = this.disabledStartDate.from;
      }
      return unSelectedDate;
    },
    disabledEndDateCalc() {
      const unSelectedDate = {
        from: null,
        to: null,
      };
      if (this.range) {
        let disabledDate = new Date(this.selectedDate[0]);
        disabledDate = !this.disabledEndDate.to
          || disabledDate.getTime() > this.disabledStartDate.to.getTime()
          ? disabledDate
          : this.disabledStartDate.from;
        unSelectedDate.to = disabledDate;
        unSelectedDate.from = this.disabledEndDate.from;
      }
      return unSelectedDate;
    },
    calendar() {
      return new Calendar(
        this.currentDate,
        this.lang,
        this.textFormat,
        { ...this.dateFormat },
        this.range ? this.disabledStartDateCalc : this.disabledStartDate,
      );
    },
    calendarEnd() {
      if (!this.range) return false;
      return new Calendar(
        this.currentDateEnd,
        this.lang,
        this.textFormat,
        { ...this.dateFormat },
        this.range ? this.disabledEndDateCalc : this.disabledEndDate,
      );
    },
    formattedValue() {
      if (!this.range) {
        return this.formatDate(this.selectedDate);
      }
      return `${this.formatDate(this.selectedDate[0])} ~ ${this.formatDate(
        this.selectedDate[1],
      )}`;
    },
  },
  methods: {
    formatDate(value) {
      return new Date(value).toLocaleDateString(this.lang, {
        ...this.dateFormat,
      });
    },
    prevMount(type) {
      const currentDate = type === 'start' ? this.currentDate : this.currentDateEnd;
      currentDate.month -= 1;
      if (currentDate.month === -1) {
        currentDate.year -= 1;
        currentDate.month = 11;
      }
    },
    nextMount(type) {
      const currentDate = type === 'start' ? this.currentDate : this.currentDateEnd;
      currentDate.month += 1;
      if (currentDate.month === 12) {
        currentDate.year += 1;
        currentDate.month = 0;
      }
    },
    handlerDate(fullDate, type = null) {
      if (!this.range) {
        this.setDate(fullDate);
        return;
      }
      const selectedDates = [
        type === 'start' ? fullDate : this.selectedDate[0],
        type === 'end' ? fullDate : this.selectedDate[1],
      ];
      this.setDate(selectedDates);
    },
    setDate(selectedDates) {
      this.$emit('input', selectedDates);
      this.selectedDate = selectedDates;
    },
    isInSelectedDate(date) {
      return (
        new Date(this.selectedDate[0]).getTime() <= date.getTime()
        && new Date(this.selectedDate[1]).getTime() >= date.getTime()
      );
    },
    changeView(view) {
      this.calendarView = view;
    },
  },
  mounted() {
    this.setDate(new Date());
    window.addEventListener('click', (e) => {
      const el = e.target.closest('.v-calendar');
      if (!el) this.isShowPicker = false;
    });
  },
};
</script>

<style>
.v-calendar .content {
  display: flex;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #eaeaeb;
  background: #fff;
  z-index: 99999;
  padding: auto;
}
.v-calendar .calendar {
  padding: 5%;
  width: 100%;
  /* min-width: 550px;
  min-height: 450px; */
}
.v-calendar .calendar.textLong {
  max-width: 580px;
}

.v-calendar .calendar .selected-field {
  padding: 10px;
  margin-bottom: 10px;
}
.v-calendar .calendar .selected-field .selected-date {
  display: flex;
  justify-content: space-between;
}
.v-calendar .calendar .selected-field .viewButton {
  border: 0;
  width: 100%;
  padding: 10px;
  padding-left: 0;
  color: #4d4d4d;
  font-size: 1em;
  margin-right: 10px;
  background: transparent;
  font-weight: 600;
}

.nextDateButton,
.prevDateButton {
  border: 0;
  background-color: #fff;
}
/* .v-calendar .calendar .selected-field .prevDateButton,
.v-calendar .calendar .selected-field .nextDateButton {
  position: relative;
  border: 0;
  background: transparent;
}
.v-calendar .calendar .selected-field .prevDateButton::after,
.v-calendar .calendar .selected-field .nextDateButton::after {
  content: "";
  display: inline-block;
  text-align: left;
  cursor: pointer;
  border: 7px solid transparent;
}
.v-calendar .calendar .selected-field .prevDateButton::after {
  border-right: 10px solid #7b8187;
} */
/* .v-calendar .calendar .selected-field .nextDateButton::after {
  border-left: 10px solid #7b8187;
} */
.v-calendar .calendar .days {
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  border-radius: 6px;
  font-weight: 600;
}
.v-calendar .calendar .days .day {
  background: transparent;
  border: 0;
  text-align: center;
  padding: 10px;
  font-size: 0.8em;
  color: #7b8187;
  cursor: pointer;
}
.v-calendar .calendar .days .day.name {
  color: var(--light-gray);
  pointer-events: none;
}
.v-calendar .calendar .days .day.selectedRange:not(.selectedDate) {
  background: #f5fbff;
}
.v-calendar .calendar .days .day.disabledDate {
  opacity: 0.3;
  pointer-events: none;
}
.v-calendar .calendar .days .day.disabledDate.selectedRange {
  background: #f5fbff;
  opacity: 1;
}
.v-calendar .calendar .days .day.disabledDate.selectedRange span {
  opacity: 0.2;
}
.v-calendar .calendar .days .day:hover:not(.selectedDate) {
  background: #eaeaeb;
}
.days .square {
  background: #f7f9ff !important;
  border: 1px solid #e3e9ff !important;
  border-radius: 1.12px !important;
  margin: 1px;
  color: var(--primary-color) !important;
}
.v-calendar .calendar .days .day.selectedDate {
  background: var(--primary-color) !important;
  color: #fff !important;
}

.day {
  max-width: 63px;
  max-height: 63px;
}

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .v-calendar .content {
    width: 350px;
    height: 450px;
  }
  .v-calendar .calendar {
    min-width: 300px;
    min-height: 450px;
  }
}

/* Medium devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .v-calendar .content {
    width: 450px;
    height: 450px;
  }
  .v-calendar .calendar {
    min-width: 450px;
    min-height: 450px;
  }
}

/* Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .v-calendar .content {
    width: 550px;
    height: 450px;
  }
  .v-calendar .calendar {
    min-width: 550px;
    min-height: 450px;
  }
}
</style>
