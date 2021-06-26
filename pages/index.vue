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
  fetchOnServer: false,
  async fetch() {
    try {
      let res = await reservoirApi.getReservoirData();
      this.rowData = Object.values(res[0]);
      this.rowData = this.rowData.map((item) => {
        item.mainArea = this.findMainArea(item.name);
        item.area = this.findArea(item.name);
        return item;
      });
      this.rowData.sort(function (a, b) {
        return a.sort - b.sort;
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
    }
  }
};
</script>
