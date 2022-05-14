<template>
  <div id="fm-content">
    <FMHome v-if="displayMenu.displayMenu === 1" />
    <FMRecord v-else-if="displayMenu.displayMenu === 2" />
    <FMReport v-else-if="displayMenu.displayMenu === 3" />
    <FMPerson v-else-if="displayMenu.displayMenu === 4" />
  </div>
</template>

<script setup>
import { useDisplayMenu } from "../../../stores/store";
// import { watch } from "vue";
import FMHome from "./FMHome.vue";
import FMRecord from "./FMRecord.vue";
import FMReport from "./FMReport.vue";
import FMPerson from "./FMPerson.vue";

const displayMenu = useDisplayMenu();

// watch(displayMenu, function () {
//   displayMenu.displayMenu;
// });
</script>

<style scoped>
#fm-content {
  margin-top: 70px;
  margin-bottom: 70px;
  flex-grow: 1;
  height: auto;
  background-color: white;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 50px;
}
</style>