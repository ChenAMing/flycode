<template>
  <div id="fm-main">
    <FMNav />
  </div>
</template>

<script setup>
import FMNav from "./nav/FMNav.vue";
</script>

<style>
#fm-main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: pink;
}
</style>