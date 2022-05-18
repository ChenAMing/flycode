<template>
  <a-button type="text" long="true" size="large" @click="arriveHome">
    <template #default>主页</template>
  </a-button>
</template>

<script setup>
import { useDisplayMenu } from "../../../stores/store";

const displayMenu = useDisplayMenu();

function arriveHome() {
  displayMenu.displayMenu = 1;
}
</script>