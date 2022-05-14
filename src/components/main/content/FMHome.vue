<template>
  <div id="fm-home-container">
    <div id="fm-home-header">
      <div id="fm-home-overview">
        <h1>概况</h1>
        <div>
          您好，{{ status.displayUsername }}，今天是您记账的第
          {{ overview.day }} 天，此账本共记录了 {{ overview.records }} 笔流水。
        </div>
        <div>本月支出</div>
        <div>本月收入</div>
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

const status = useStatus();

// TODO: 更改为从后端获取
const overview = reactive({
  day: "12",
  records: "500",
});
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