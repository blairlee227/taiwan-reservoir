<template>
  <div id="chart">
    <!-- Generator: Adobe Illustrator 24.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 97.1 139.4"
      style="enable-background: new 0 0 97.1 139.4"
      xml:space="preserve"
      :class="value < 30 ? 'danger' : value < 50 ? 'warning' : 'default'"
    >
      <path
        class="bg"
        d="M48.5,136.2c15.5,0,30.2-7.7,39-20c9.5-13.4,10.1-29.9,4.2-44.8c-4.9-12.6-13-23.9-20-35.4
	C64.5,24,56.7,12.4,49.4,0.5c-0.4-0.6-1.3-0.6-1.7,0C40.4,12.4,32.6,24,25.3,35.9c-7,11.5-15,22.9-20,35.4
	c-5.9,14.9-5.3,31.5,4.2,44.8C18.3,128.5,33,136.2,48.5,136.2"
      />
      <g>
        <defs>
          <path
            id="clip-path-use"
            d="M48.5,136.2c15.5,0,30.2-7.7,39-20c9.5-13.4,10.1-29.9,4.2-44.8c-4.9-12.6-13-23.9-20-35.4
			C64.5,24,56.7,12.4,49.4,0.5c-0.4-0.6-1.3-0.6-1.7,0C40.4,12.4,32.6,24,25.3,35.9c-7,11.5-15,22.9-20,35.4
			c-5.9,14.9-5.3,31.5,4.2,44.8C18.3,128.5,33,136.2,48.5,136.2"
          />
        </defs>
        <clipPath id="clip-path">
          <use xlink:href="#clip-path-use" style="overflow: visible" />
        </clipPath>
        <g>
          <rect y="0" class="water" width="97.1" height="275">
            <!-- 0~137 -->
            <animate
              attributeName="height"
              from="137"
              :to="waterValue"
              dur="0.6s"
              fill="freeze"
            />
          </rect>
        </g>
      </g>
    </svg>
    <p class="value-text">
      <span class="value">{{ removeDecimalZero(value) }}</span>
      <span class="percentage">%</span>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    percentage: {
      type: Number,
      default: 0
    }
  },
  computed: {
    value() {
      let val = this.percentage.toFixed(1);
      return val;
    },
    waterValue() {
      // 0~137
      let waterVal = 137 - (this.value * 137) / 100;
      return waterVal;
    }
  },
  methods: {
    removeDecimalZero(val) {
      let stringVal = val.toString();
      if (stringVal.slice(-1) === "0") {
        // remove the decimal point if the decimal point is 0.
        return stringVal.slice(0, -2);
      } else {
        return val;
      }
    }
  }
};
</script>
<style lang="scss">
// google font
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
@mixin font-family {
  font-family: "Raleway", sans-serif !important;
}
// media queries
@import "@/assets/css/mediaQueries";

#chart {
  position: relative;
}
.water {
  clip-path: url(#clip-path);
  -webkit-clip-path: url(#clip-path) !important;
}
.default {
  .bg {
    fill: #27859c;
  }
  .water {
    fill: #6ec2c6;
  }
}
.warning {
  .bg {
    fill: #dd994c;
  }
  .water {
    fill: #edd6b3;
  }
}
.danger {
  .bg {
    fill: #d26344;
  }
  .water {
    fill: #edd8c9;
  }
}
.value-text {
  color: #ffffff;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  .value {
    font-size: 55px;
    @include font-family;
    @include lg {
      font-size: 40px;
    }
    @include md {
      font-size: 35px;
    }
    @include sm {
      font-size: 30px;
    }
  }
  .percentage {
    font-size: 20px;
    @include font-family;
    @include lg {
      font-size: 18px;
    }
    @include md {
      font-size: 18px;
    }
  }
}
</style>
