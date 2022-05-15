<template>
  <div id="fm-home-container">
    <div id="fm-home-header">
      <div id="fm-home-overview">
        <h1>概况</h1>
        <div>{{ overview.display }}</div>
        <!-- <div>本月支出</div>
        <div>本月收入</div> -->
      </div>
      <div id="fm-home-report">
        <h1>简报</h1>
      </div>
    </div>
    <div id="fm-home-footer">
      <div id="fm-home-record">
        <h1>最近记录</h1>
        <FMHomeTable />
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO: 样式需要优化
import { reactive } from "vue";
import { useStatus } from "../../../stores/store";
import FMHomeTable from "./FMHomeTable.vue";
import axios from "axios";

const status = useStatus();

const overview = reactive({
  display: "",
});

function getOverview() {
  axios.get("http://127.0.0.1:8080/generateBillBrief.do").then((res) => {
    if (res.data.code === "1") {
      overview.display = res.data.message;
    } else if (res.data.code === "0") {
      alert("系统忙，请稍后重试！");
    }
  });
}

getOverview()
</script>

<style scoped>
#fm-home-container {
  display: flex;
  flex-flow: column nowrap;
}

h1 {
  margin-top: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
}

#fm-home-header {
  display: flex;
  flex-flow: row nowrap;
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