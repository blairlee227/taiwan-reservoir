<template>
  <div>
    <div class="flex justify-center">
      <div class="flex-initial xl:mr-10 lg:mr-5 md:mr-12 mr-5">
        <chart class="chart" :percentage="rowData.percentage" />
      </div>
      <div
        class="
          flex-initial
          divide-y-2 divide-brown divide-dotted divide-opacity-50
        "
      >
        <div class="mb-3">
          <div class="text-brown text-2xl font-bold mb-3">
            {{ rowData.name }}
          </div>
          <span
            v-for="area in rowData.area"
            :key="area"
            class="
              bg-grass
              text-white text-md
              rounded-md
              mr-2
              py-1
              px-2
              align-middle
            "
          >
            {{ area }}
          </span>
          <p class="mt-5 text-brown">
            有效蓄水量：{{ rowData.baseAvailable }}萬立方公尺
          </p>
          <p class="mt-2 text-brown">
            今日進水量：{{ rowData.daliyInflow }}萬立方公尺
          </p>
          <p class="mt-2 text-brown">
            今日出水量：{{ rowData.daliyOverflow }}萬立方公尺
          </p>
        </div>
        <div>
          <p class="mt-2 text-brown">更新時間：{{ rowData.updateAt }})</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rowData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/mediaQueries";
.chart {
  width: 150px;
  @include lg {
    width: 120px;
  }
  @include md {
    width: 100px;
  }
  @include sm {
    width: 100px;
  }
}
</style>
