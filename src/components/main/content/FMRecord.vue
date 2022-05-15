<template>
  <div id="fm-record">
    <div id="fm-record-form-container">
      <div id="fm-record-form">
        <a-range-picker
          @change="onChange"
          @select="onSelect"
          :style="{ marginLeft: 'auto' }"
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

        <a-button :style="{ marginRight: 'auto' }" @click="getData()">
          <template #icon><icon-search /></template>
          <template #default>查询</template>
        </a-button>
      </div>
    </div>
    <a-table :columns="columns" :data="data.display"></a-table>
  </div>
</template>

<script setup>
import { IconSearch } from "@arco-design/web-vue/es/icon";
import { reactive } from "vue";
import axios from "axios";

const data = reactive({
  date: null,
  type: "收入",
  display: [],
});

const columns = [
  {
    title: "名称",
    dataIndex: "name",
  },
  {
    title: "收入/支出",
    dataIndex: "type",
  },
  {
    title: "分类",
    dataIndex: "sort",
  },
  {
    title: "日期",
    dataIndex: "date",
  },
  {
    title: "金额",
    dataIndex: "price",
  },
  {
    title: "操作",
    dataIndex: "handle",
  },
];

// TODO: 请求全部数据
function getData() {
  axios({
    method: "get",
    url: "http://127.0.0.1:8080/queryBillByConditionForPage.do",
    params: {
      startDate: data.date[0],
      endDate: data.date[1],
      type: data.type === "收入" ? "2" : "1",
    },
  }).then((res) => {
    for (let i = 0; i < res.data.billList.length; i++) {
      data.display.push({
        key: i + 1,
        name: res.data.billList[i]["title"],
        type: res.data.billList[i]["type"],
        sort: res.data.billList[i]["sort"],
        date: res.data.billList[i]["billTime"],
        price: res.data.billList[i]["price"],
      });
    }
  });
}
</script>

<style scoped>
#fm-record {
  display: flex;
  flex-flow: column nowrap;
}

#fm-record-form {
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 20px;
}
</style>