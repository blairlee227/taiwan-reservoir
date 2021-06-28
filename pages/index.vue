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
          cursor-pointer
          duration-300
          ease-in-out
        "
        :class="{ 'bg-opacity-90': areaBtn.active }"
        v-for="areaBtn in areaBtns"
        :key="areaBtn.value"
        @click="dataFilter(areaBtn)"
      >
        {{ areaBtn.text }}
      </span>
    </div>
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-12">
      <div class="mb-10" v-for="item in dataForView" :key="item.name">
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
      dataForView: [],
      areaBtns: [
        {
          text: "全部",
          value: "ALL",
          active: true
        },
        {
          text: "北部",
          value: "NORTHERN",
          active: false
        },
        {
          text: "中部",
          value: "CENTRAL",
          active: false
        },
        {
          text: "南部",
          value: "SOUTHERN",
          active: false
        }
      ]
    };
  },
  fetchOnServer: false,
  async fetch() {
    try {
      let res = await reservoirApi.getReservoirData();
      this.rowData = Object.values(res[0]);
      this.rowData = this.rowData.map((item) => {
        item.mainArea = this.findData(item.name, "mainArea");
        item.area = this.findData(item.name, "area");
        item.sort = this.findData(item.name, "sort");
        return item;
      });
      this.dataForView = this.rowData.sort((a, b) => {
        return a.sort - b.sort;
      });
    } catch (e) {
      alert(e);
    }
  },
  methods: {
    findData(name, key) {
      let area = this.areaData.find((item) => name === item.name);
      return area[key];
    },
    dataFilter(item) {
      // clear all btn style
      this.areaBtns.forEach((btn) => (btn.active = false));
      // add active btn style
      item.active = true;
      // filter data
      if (item.value === "ALL") {
        this.dataForView = this.rowData;
      } else {
        this.dataForView = this.rowData.filter(
          (data) => data.mainArea === item.value
        );
      }
    }
  }
};
</script>
