<template>
  <FMLogin />
</template>

<script setup>
import FMLogin from "./components/login/FMLogin.vue";
</script>

<style>
/* 全局生效 */
.flex-row {
  display: flex;
  flex-flow: row nowrap;
}

.flex-column {
  display: flex;
  flex-flow: column nowrap;
}
</style>