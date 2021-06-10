import Vue from "vue";
import dayjs from "dayjs";
let filter = {
  filters: {
    currencyFormat(value) {
      if (typeof value == "number") {
        let result = new Intl.NumberFormat("zh-TW").format(value);
        return result;
      }
      return value;
    },
    dateFormat(time) {
      return time && dayjs(time).format("YYYY/MM/DD");
    },
  }
};
Vue.mixin(filter);
