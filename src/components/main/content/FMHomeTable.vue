<template>
  <div id="fm-home-table">
    <table>
      <thead>
        <tr>
          <th v-for="(head, index) in tableHeader" :key="index">{{ head }}</th>
        </tr>
      </thead>
      <tbody>
        <!-- TODO: 后端确定属性名 -->
        <tr v-for="(data, propName) in tableData" :key="propName">
          <td>{{ data.name }}</td>
          <td>{{ data.type }}</td>
          <td>{{ data.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const tableHeader = ["名称", "分类", "金额"];

// const tableData = reactive({
//   name: "",
//   incomeOrExpend: true,
//   type: "",
//   price: "",
// });

const tableData = {
  id: {
    name: "打车去玩儿",
    incomeOrExpend: true,
    type: "交通",
    price: "100",
  },
};
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