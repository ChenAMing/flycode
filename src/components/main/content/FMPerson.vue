<template>
  <div id="fm-person">
    <div id="fm-person-header">
      <a-avatar trigger-type="mask" :size="64">
        <img alt="avatar" src="../../../assets/img-sidebar/via.jpg" />
        <template #trigger-icon>
          <IconEdit />
        </template>
      </a-avatar>

      <div :style="{ marginLeft: '20px', flexGrow: '1' }">
        <div id="fm-person-username" :style="{ marginBottom: '20px' }">
          {{ status.displayUsername }}
        </div>

        <a-typography-paragraph>
          {{ user.intro }}
        </a-typography-paragraph>
      </div>
    </div>

    <a-typography-title heading="2">我的资产</a-typography-title>
    <div>
      <a-space size="large">
        <a-statistic
          title="初始资产"
          :value="money.initial"
          :precision="2"
          show-group-separator
          animation="true"
        >
          <template #prefix>￥</template>
        </a-statistic>
        <a-statistic
          title="现有资产"
          :value="money.existing"
          :precision="2"
          show-group-separator
          animation="true"
        >
          <template #prefix>￥</template>
        </a-statistic>
      </a-space>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";
import { IconEdit } from "@arco-design/web-vue/es/icon";
import { useStatus, useAxiosConfig } from "../../../stores/store";

const status = useStatus();
const axiosConfig = useAxiosConfig();

const money = reactive({
  initial: 0,
  existing: 0,
});

const user = reactive({
  sex: null,
  intro: null,
});

function getUserInfo() {
  axios({
    method: "get",
    url: `${axiosConfig.baseURL}/queryUserInformation.do`,
    params: {
      id: status.displayUserID,
    },
  }).then((res) => {
    user.sex = res.data.returnData.sex;
    user.intro = res.data.returnData.introduction;
    money.initial = parseFloat(res.data.returnData.balance);
    money.existing = parseFloat(res.data.message);
  });
}

getUserInfo();
</script>

<style>
#fm-person {
  display: flex;
  flex-flow: column nowrap;
}

#fm-person-header {
  display: flex;
  flex-flow: row nowrap;
}
</style>