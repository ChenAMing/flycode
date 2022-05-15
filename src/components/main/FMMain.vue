<template>
  <div id="fm-main">
    <FMNav />
    <transition name="fm-add">
      <template v-if="status.isAddMenuOpen">
        <FMAdd />
      </template>
    </transition>
    <div id="fm-main-container">
      <div class="fm-main-blank"></div>
      <FMSidebar />
      <FMContent />
      <div class="fm-main-blank"></div>
    </div>
  </div>
</template>

<script setup>
import FMNav from "./nav/FMNav.vue";
import FMAdd from "./nav/FMAdd.vue";
import FMSidebar from "./sidebar/FMSidebar.vue";
import FMContent from "./content/FMContent.vue";
import { useStatus } from "../../stores/store.js";

const status = useStatus();
</script>

<style scoped>
#fm-main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f2f1e9;
  overflow: auto;
}

#fm-main-container {
  position: absolute;
  top: 50px;
  right: 0;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
}

.fm-main-blank {
  max-width: 160px;
  min-width: 10px;
  flex-grow: 1;
}

.fm-add-enter-active,
.fm-add-leave-active {
  transition: all 0.3s;
}

.fm-add-enter-from,
.fm-add-leave-to {
  opacity: 0;
}
</style>