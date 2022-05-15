<template>
  <div id="fm-nav">
    <div class="fm-nav-blank"></div>
    <div id="fm-nav-main">
      <img
        src="../../../assets/img-login/logo.jpg"
        alt="logo"
        id="fm-nav-logo-img"
      />

      <div id="fm-nav-logo">飞码记账</div>

      <a-space>
        <!-- 搜索框 -->
        <a-input-search
          :style="{ width: '320px' }"
          placeholder="搜索一条记录"
          search-button
        />
        <!-- 增加记录 -->
        <a-button type="primary" @click="openAddMenu">
          <template #icon>
            <icon-plus />
          </template>
          <template #default>增加记录</template>
        </a-button>
        <!-- 安全退出 -->
        <FMExit />
      </a-space>
    </div>
    <div class="fm-nav-blank"></div>
    <!-- 增加记录的弹窗 -->
  </div>
</template>

<script setup>
import FMExit from "./FMExit.vue";
import { useStatus } from "../../../stores/store.js";

const status = useStatus();

function openAddMenu() {
  status.isAddMenuOpen = true;
}
</script>

<style scoped>
#fm-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #333333;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  z-index: 99;
}

.fm-nav-blank {
  max-width: 160px;
  flex-grow: 1;
}

#fm-nav-main {
  flex-grow: 1;
  display: flex;
  flex-flow: row nowrap;
}

#fm-nav-logo {
  flex-grow: 1;
  padding: 12px 0;
  color: aliceblue;
  font-size: 20px;
}

#fm-nav-logo-img {
  margin: 5px 10px 5px 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>