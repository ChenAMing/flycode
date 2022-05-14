<template>
  <div id="fm-record">
    <FMRecordForm />
    <a-table :columns="columns"></a-table>
  </div>
</template>

<script setup>
import FMRecordForm from "./FMRecordForm.vue";

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
    url: loginURL,
    params: {
      loginAct: userInfo.username,
      loginPwd: userInfo.password,
      isRemPwd: userInfo.passwordFree,
    },
  });
}

// getData()
</script>

<style scoped>
#fm-record {
  display: flex;
  flex-flow: column nowrap;
}
</style>