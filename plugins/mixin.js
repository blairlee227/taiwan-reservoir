import Vue from "vue";

let mixin = {
  methods: {
    findArea(name) {
      let areaData = [
        {
          name: "新山水庫",
          area: ["基隆"]
        },
        {
          name: "翡翠水庫",
          area: ["台北", "新北"]
        },
        {
          name: "石門水庫",
          area: ["新北", "桃園", "新竹"]
        },
        {
          name: "永和山水庫",
          area: ["新竹", "苗栗"]
        },
        {
          name: "寶山水庫",
          area: ["新竹"]
        },
        {
          name: "寶山第二水庫",
          area: ["新竹"]
        },
        {
          name: "明德水庫",
          area: ["苗栗"]
        },
        {
          name: "鯉魚潭水庫",
          area: ["苗栗", "台中"]
        },
        {
          name: "德基水庫",
          area: ["台中"]
        },
        {
          name: "石岡壩",
          area: ["台中"]
        },
        {
          name: "日月潭水庫",
          area: ["南投"]
        },
        {
          name: "霧社水庫",
          area: ["南投"]
        },
        {
          name: "湖山水庫",
          area: ["雲林", "彰化", "嘉義"]
        },
        {
          name: "仁義潭水庫",
          area: ["嘉義"]
        },
        {
          name: "蘭潭水庫",
          area: ["嘉義"]
        },
        {
          name: "白河水庫",
          area: ["台南"]
        },
        {
          name: "曾文水庫",
          area: ["嘉義", "台南"]
        },
        {
          name: "烏山頭水庫",
          area: ["台南"]
        },
        {
          name: "南化水庫",
          area: ["台南", "高雄"]
        },
        {
          name: "阿公店水庫",
          area: ["高雄"]
        },
        {
          name: "牡丹水庫",
          area: ["屏東"]
        },
      ]
      let area = areaData.find(item => name === item.name);
      return area.area;
    },
  }
};
Vue.mixin(mixin);
