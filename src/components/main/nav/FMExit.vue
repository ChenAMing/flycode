<template>
  <a-button type="text" status="danger" @click="exitApp">安全退出</a-button>
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

// TODO:
function exitApp() {
  axios.get("http://127.0.0.1:8080/logout.do").then((res) => {
    if (res.data.code === "1") {
      alert("退出成功！");
    } else {
      alert("系统忙，请稍后再试");
    }
  });
  router.replace("/");
}
</script>