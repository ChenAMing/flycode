<template>
  <a-button type="text" status="danger" @click="exitApp">安全退出</a-button>
  
  <router-view></router-view>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { useAxiosConfig } from "../../../stores/store";

const router = useRouter();
const axiosConfig = useAxiosConfig();

// TODO:
function exitApp() {
  axios.get(`${axiosConfig.baseURL}/logout.do`).then((res) => {
    if (res.data.code === "1") {
      alert("退出成功！");
    } else {
      alert("系统忙，请稍后再试");
    }
  });
  router.replace("/");
}
</script>