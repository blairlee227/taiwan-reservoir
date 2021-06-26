import Vue from "vue";

let mixin = {
  data() {
    return {
      areaData:[
        {
          name: "新山水庫",
          area: ["基隆"],
          mainArea: "北部",
          sort:1
        },
        {
          name: "翡翠水庫",
          area: ["台北", "新北"],
          mainArea: "北部",
          sort:2
        },
        {
          name: "石門水庫",
          area: ["新北", "桃園", "新竹"],
          mainArea: "北部",
          sort:3
        },
        {
          name: "永和山水庫",
          area: ["新竹", "苗栗"],
          mainArea: "北部",
          sort:6
        },
        {
          name: "寶山水庫",
          area: ["新竹"],
          mainArea: "北部",
          sort:4
        },
        {
          name: "寶山第二水庫",
          area: ["新竹"],
          mainArea: "北部",
          sort:5
        },
        {
          name: "明德水庫",
          area: ["苗栗"],
          mainArea: "北部",
          sort:7
        },
        {
          name: "鯉魚潭水庫",
          area: ["苗栗", "台中"],
          mainArea: "中部",
          sort:8
        },
        {
          name: "德基水庫",
          area: ["台中"],
          mainArea: "中部",
          sort:9
        },
        {
          name: "石岡壩",
          area: ["台中"],
          mainArea: "中部",
          sort:10
        },
        {
          name: "日月潭水庫",
          area: ["南投"],
          mainArea: "中部",
          sort:11
        },
        {
          name: "霧社水庫",
          area: ["南投"],
          mainArea: "中部",
          sort:12
        },
        {
          name: "湖山水庫",
          area: ["雲林", "彰化", "嘉義"],
          mainArea: "中部",
          sort:13
        },
        {
          name: "仁義潭水庫",
          area: ["嘉義"],
          mainArea: "南部",
          sort:14
        },
        {
          name: "蘭潭水庫",
          area: ["嘉義"],
          mainArea: "南部",
          sort:15
        },
        {
          name: "白河水庫",
          area: ["台南"],
          mainArea: "南部",
          sort:17
        },
        {
          name: "曾文水庫",
          area: ["嘉義", "台南"],
          mainArea: "南部",
          sort:16
        },
        {
          name: "烏山頭水庫",
          area: ["台南"],
          mainArea: "南部",
          sort:18
        },
        {
          name: "南化水庫",
          area: ["台南", "高雄"],
          mainArea: "南部",
          sort:19
        },
        {
          name: "阿公店水庫",
          area: ["高雄"],
          mainArea: "南部",
          sort:20
        },
        {
          name: "牡丹水庫",
          area: ["屏東"],
          mainArea: "南部",
          sort:21
        }
      ]
    }
  }
};
Vue.mixin(mixin);
