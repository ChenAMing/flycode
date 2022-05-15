<template>
  <div id="fm-report-container">
    <a-typography-title heading="2">消费/收入趋势图</a-typography-title>

    <div>
      <a-range-picker
        @change="onChange"
        @select="onSelect"
        v-model:model-value="data.date"
      />
      <a-select
        placeholder="选择账单类型"
        :default-value="['收入']"
        :style="{ maxWidth: '200px' }"
        v-model:model-value="data.type"
      >
        <a-option>收入</a-option>
        <a-option>支出</a-option>
      </a-select>

      <a-button :style="{ marginRight: 'auto' }" @click="createReport">
        <template #default>生成报表</template>
      </a-button>
    </div>

    <vue-echarts
      :option="option"
      ref="chart"
      :style="{ height: '400px', maxWidth: '691px', minWidth: '400px' }"
    ></vue-echarts>
  </div>
</template>

<script setup>
import { VueEcharts } from "vue3-echarts";
import axios from "axios";
import { reactive, toRefs } from "vue";

const data = reactive({
  date: null,
  type: "收入",
  xData: [],
  yData: [],
});

const chart = toRefs({
  xAxis: {
    type: "category",
    data: data.xData,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: data.yData,
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(220, 220, 220, 0.8)",
      },
    },
  ],
});

function createReport() {
  axios({
    method: "post",
    url: "http://127.0.0.1:8080/showBillCharts.do",
    params: {
      startDate: data.date[0],
      endDate: data.date[1],
      type: data.type === "收入" ? "2" : "1",
    },
  }).then((res) => {
    xData = res.data.returnData.dataList;
    yData = res.data.returnData.priceList;

    // let set = new Set();
    // for (let i = 0; i < res.data.returnData.length; i++) {
    //   set.add(res.data.returnData.billTime);
    // }
    // for (let item of set) {
    //   data.xData.push(item);
    //   let y = 0;
    //   for (let i = 0; i < res.data.returnData.length; i++) {
    //     if (res.data.returnData.billTime === item) {
    //       y += parseFloat(res.data.returnData.price);
    //     }
    //   }
    //   data.yData.push(y);
    // }
  });
}
</script>

<style>
#fm-report-container {
  display: flex;
  flex-flow: column nowrap;
}
</style>