<template>
  <div class="container mx-auto pt-10 xl:px-10 px-5">
    <div class="text-center mb-12">
      <span
        class="
          bg-brown bg-opacity-40
          text-white text-md
          rounded-md
          mr-2
          py-1
          px-2
          align-middle
        "
        v-for="areaBtn in areaBtns"
        :key="areaBtn.name"
      >
        {{ areaBtn.name }}
      </span>
    </div>
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-12">
      <div class="mb-10" v-for="item in rowData" :key="item.name">
        <reservoirInfo :rowData="item" />
      </div>
    </div>
  </div>
</template>
<script>
import reservoirApi from "@/api/reservoir.api";
export default {
  data() {
    return {
      rowData: [],
      areaBtns: [
        {
          name: "全部"
        },
        {
          name: "北部"
        },
        {
          name: "中部"
        },
        {
          name: "南部"
        }
      ]
    };
  },
  async fetch() {
    try {
      let res = await reservoirApi.getReservoirData();
      this.rowData = Object.values(res[0]);
      this.rowData = this.rowData.map((item) => {
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
      let area = this.areaData.find((item) => name === item.name);
      return area.area;
    },
    findMainArea(name) {
      let area = this.areaData.find((item) => name === item.name);
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
};
</script>
