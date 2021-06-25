exports.ids = [3];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=ff26553e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container mx-auto pt-10 xl:px-10 px-5"},[_vm._ssrNode("<div class=\"text-center mb-12\">"+(_vm._ssrList((_vm.areaBtns),function(areaBtn){return ("<span class=\"\n        bg-brown bg-opacity-40\n        text-white text-md\n        rounded-md\n        mr-2\n        py-1\n        px-2\n        align-middle\n      \">"+_vm._ssrEscape("\n      "+_vm._s(areaBtn.name)+"\n    ")+"</span>")}))+"</div> "),_vm._ssrNode("<div class=\"grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-12\">","</div>",_vm._l((_vm.rowData),function(item){return _vm._ssrNode("<div class=\"mb-10\">","</div>",[_c('reservoirInfo',{attrs:{"rowData":item}})],1)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=ff26553e&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(27);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./plugins/axios.js


class axios_AxiosClient {
  request(options = {}) {
    const instance = external_axios_default.a.create({ ...options,
      baseURL: "http://localhost:8080",
      timeout: 1000
    });
    return instance;
  }

}

/* harmony default export */ var axios = (new axios_AxiosClient());
// CONCATENATED MODULE: ./api/reservoir.api.js

const ENDPOINT = "https://www.taiwanstat.com/waters/latest";
/**
 * 查詢水庫資料
 * @returns 基金列表
 */

const getReservoirData = async () => {
  return (await axios.request().get(ENDPOINT)).data;
};

/* harmony default export */ var reservoir_api = ({
  getReservoirData
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      rowData: [],
      areaBtns: [{
        name: "全部"
      }, {
        name: "北部"
      }, {
        name: "中部"
      }, {
        name: "南部"
      }]
    };
  },

  async fetch() {
    try {
      let res = await reservoir_api.getReservoirData();
      this.rowData = Object.values(res[0]);
      this.rowData = this.rowData.map(item => {
        item.mainArea = this.findMainArea(item.name);
        item.area = this.findArea(item.name);
        item.index = this.findIndex(item.area);
        return item;
      });
      this.rowData.sort(function (a, b) {
        return a.index - b.index;
      });
    } catch (e) {
      alert(e);
    }
  },

  methods: {
    findArea(name) {
      let area = this.areaData.find(item => name === item.name);
      return area.area;
    },

    findMainArea(name) {
      let area = this.areaData.find(item => name === item.name);
      return area.mainArea;
    },

    findIndex(area) {
      let index = -1;

      for (let i = 0; i < area.length; i++) {
        switch (area[i]) {
          case "基隆":
            index = 0;
            break;

          case "台北":
            index = 1;
            break;

          case "新北":
            index = 2;
            break;

          case "桃園":
            index = 3;
            break;

          case "新竹":
            index = 4;
            break;

          case "苗栗":
            index = 5;
            break;

          case "台中":
            index = 6;
            break;

          case "南投":
            index = 7;
            break;

          case "雲林":
            index = 8;
            break;

          case "彰化":
            index = 9;
            break;

          case "嘉義":
            index = 10;
            break;

          case "台南":
            index = 11;
            break;

          case "高雄":
            index = 12;
            break;

          case "屏東":
            index = 13;
            break;
        }

        break;
      }

      return index;
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "71a00b90"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map