<template>
  <a-button type="text" long="true" size="large" @click="arrivePerson">
    <!-- <template #icon>
            <icon-user />
          </template> -->
    <template #default>个人中心</template>
  </a-button>
</template>

<script setup>
import { useDisplayMenu } from "../../../stores/store";

const displayMenu = useDisplayMenu();

function arrivePerson() {
  displayMenu.displayMenu = 4;
}
</script>