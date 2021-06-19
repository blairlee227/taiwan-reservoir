<template>
  <div class="container mx-auto pt-10 xl:px-10 px-5">
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
      <div class="mb-10" v-for="item in rowData">
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
      rowData: []
    };
  },
  async fetch() {
    try {
      let res = await reservoirApi.getReservoirData();
      this.rowData = Object.values(res[0]);
      this.rowData = this.rowData.map((item) => {
        item.area = this.findArea(item.name);
        return item;
      });
      console.log(this.rowData);
    } catch (e) {
      console.log(e);
    }
  }
};
</script>
