<template>
  <a-button type="text" long="true" size="large" @click="arriveRecord">
    <!-- <template #icon>
      <icon-list />
    </template> -->
    <template #default>查询记录</template>
  </a-button>
</template>

<script setup>
import { useDisplayMenu } from "../../../stores/store";

const displayMenu = useDisplayMenu();

function arriveRecord() {
  displayMenu.displayMenu = 2;
}
</script>