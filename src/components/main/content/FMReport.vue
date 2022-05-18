<template>
  <div class="flex-column">
    <a-typography-title heading="2">消费/收入趋势图</a-typography-title>

    <div class="flex-row">
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
      :option="data.options"
      ref="chart"
      :style="{ height: '400px', maxWidth: '691px', minWidth: '400px' }"
      v-if="data.chartVisible"
    ></vue-echarts>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";
import { VueEcharts } from "vue3-echarts";
import { useAxiosConfig } from "../../../stores/store";

const axiosConfig = useAxiosConfig();

const data = reactive({
  date: null,
  type: "收入",
  chartVisible: false,
  options: null,
});

function createReport() {
  axios({
    method: "post",
    url: `${axiosConfig.baseURL}/showBillCharts.do`,
    params: {
      startDate: data.date[0],
      endDate: data.date[1],
      type: data.type === "收入" ? "2" : "1",
    },
  }).then((res) => {
    // 图表配置
    data.options = {
      xAxis: {
        type: "category",
        data: res.data.returnData.dateList,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: res.data.returnData.priceList,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)",
          },
        },
      ],
    };

    // 显示组件
    data.chartVisible = true;
  });
}
</script>