<template>
  <div id="fm-sidebar">
    <div id="fm-sidebar-user">
      <div id="fm-sidebar-via">
        <a-avatar :size="80">
          <img alt="avatar" src="../../../assets/img-sidebar/via.jpg" />
        </a-avatar>
      </div>

      <div id="fm-sidebar-username">{{ sidebar.username }}</div>
    </div>

    <div id="fm-sidebar-menu">
      <a-space direction="vertical" size="large">
        <FMSidebarHome :style="btnStyle" />
        <FMSidebarRecord :style="btnStyle" />
        <FMSidebarReport :style="btnStyle" />
        <FMSidebarPerson :style="btnStyle" />
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

const btnContent = ["主页", "查询记录", "统计报表", "个人中心"];
</script>

<style scoped>
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

#fm-sidebar-user {
  margin: 0 auto;
}

#fm-sidebar-via {
  transform: translateY(-30px);
}
</style>