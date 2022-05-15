<template>
  <div id="fm-home-table">
    <table>
      <thead>
        <tr>
          <th v-for="(head, index) in tableHeader" :key="index">{{ head }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in tableData.billData" :key="index">
          <td>{{ data.title }}</td>
          <td>{{ data.type }}</td>
          <td>{{ data.billTime }}</td>
          <td>{{ data.sort }}</td>
          <td>{{ data.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

const tableHeader = ["名称", "类型", "日期", "分类", "金额"];

const tableData = reactive({
  billData: [],
});

function getHomeData() {
  axios.get("http://127.0.0.1:8080/showTopFiveBills.do").then((res) => {
    for (let i = 0; i < res.data.billList.length; i++) {
      tableData.billData.push({
        title: res.data.billList[i].title,
        type: res.data.billList[i].type,
        billTime: res.data.billList[i].billTime,
        sort: res.data.billList[i].sort,
        price: res.data.billList[i].price,
      });
    }
  });
}

getHomeData();
</script>

<style scoped>
#fm-home-table {
  display: flex;
  flex-flow: column nowrap;
}

table {
  border-collapse: collapse;
  border: 1px #f2f3f5;
}

tr {
  height: 40px;
}

td,
th {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: #f2f3f5;
  text-align: center;
}

th {
  background-color: #f2f3f5;
}
</style>