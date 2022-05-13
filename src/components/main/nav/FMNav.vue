<template>
  <div id="fm-nav">
    <div class="fm-nav-blank"></div>
    <div id="fm-nav-main"></div>
    <div class="fm-nav-blank"></div>
  </div>
</template>

<script setup>
</script>

<style>
#fm-nav {
  background-color: #333333;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
}

.fm-nav-blank {
  max-width: 160px;
  flex-grow: 1;
}

#fm-nav-main {
  flex-grow: 1;
  background-color: white;
}


</style>