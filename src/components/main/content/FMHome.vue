<template>
  <div class="flex-column">
    <div id="fm-home-overview">
      <h1>简报</h1>
      <div>{{ overview.display }}</div>
    </div>

    <div id="fm-home-record">
      <h1>最近记录</h1>
      <FMHomeTable />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import FMHomeTable from "./FMHomeTable.vue";
import { reactive } from "vue";
import { useStatus, useAxiosConfig } from "../../../stores/store";

const status = useStatus();
const axiosConfig = useAxiosConfig();

const overview = reactive({
  display: "",
});

function getOverview() {
  axios.get(`${axiosConfig.baseURL}/generateBillBrief.do`).then((res) => {
    if (res.data.code === "1") {
      overview.display = res.data.message;
    } else if (res.data.code === "0") {
      alert("系统忙，请稍后重试！");
    }
  });
}

getOverview();
</script>

<style scoped>
h1 {
  margin-top: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
}

#fm-home-overview,
#fm-home-report {
  flex-grow: 1;
  flex-basis: 50%;
}

#fm-home-record {
  margin-top: 50px;
}
</style>