<template>
  <div id="fm-main">
    <FMNav />
    <div id="fm-main-container">
      <FMSidebar />
      <FMContent />
    </div>
  </div>
</template>

<script setup>
import FMNav from "./nav/FMNav.vue";
import FMSidebar from "./sidebar/FMSidebar.vue";
import FMContent from "./content/FMContent.vue";
</script>

<style>
#fm-main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f2f1e9;
}
</style>