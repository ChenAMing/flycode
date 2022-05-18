<template>
  <a-button type="text" long="true" size="large" @click="arriveReport">
    <template #default>统计报表</template>
  </a-button>
</template>

<script setup>
import { useDisplayMenu } from "../../../stores/store";

const displayMenu = useDisplayMenu();

function arriveReport() {
  displayMenu.displayMenu = 3;
}
</script>