<template>
  <div id="fm-record-form-container">
    <div id="fm-record-form">
      <a-range-picker
        @change="onChange"
        @select="onSelect"
        :style="{ marginLeft: 'auto' }"
      />

      <a-select
        placeholder="选择账单类型"
        :default-value="['收入']"
        multiple
        :style="{ maxWidth: '200px' }"
      >
        <a-option>收入</a-option>
        <a-option>支出</a-option>
      </a-select>

      <a-button :style="{ marginRight: 'auto' }">
        <template #icon><icon-search /></template>
        <template #default>查询</template>
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { IconSearch } from "@arco-design/web-vue/es/icon";
</script>

<style scoped>
#fm-record-form {
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 20px;
}
</style>