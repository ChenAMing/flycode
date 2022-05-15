<template>
  <div id="fm-sidebar">
    <div id="fm-sidebar-user">
      <!-- <img src="../../../assets/img-sidebar/via.jpg" alt="" /> -->
      <!-- TODO:username -->
      <div id="fm-sidebar-username">{{ sidebar.username }}</div>
    </div>
    <div id="fm-sidebar-menu">
      <a-space direction="vertical" size="large">
        <FMSidebarHome :style="btnStyle"/>
        <FMSidebarRecord :style="btnStyle"/>
        <FMSidebarReport :style="btnStyle"/>
        <FMSidebarPerson :style="btnStyle"/>
      </a-space>
    </div>
  </div>
</template>

<script setup>
import FMSidebarHome from "./FMSidebarHome.vue";
import FMSidebarRecord from "./FMSidebarRecord.vue";
import FMSidebarReport from "./FMSidebarReport.vue";
import FMSidebarPerson from "./FMSidebarPerson.vue";
import { reactive } from "vue";
import { useStatus } from "../../../stores/store";

const status = useStatus();

const sidebar = reactive({
  username: status.displayUsername,
});

const btnStyle = {
  color: "black",
  fontSize: "20px",
};
</script>

<style>
#fm-sidebar {
  margin-top: 70px;
  margin-right: 25px;
  width: 200px;
  height: 440px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column nowrap;
}

#fm-sidebar-username {
  font-size: 20px;
  text-align: center;
}

#fm-sidebar-menu {
  margin: auto;
}
</style>