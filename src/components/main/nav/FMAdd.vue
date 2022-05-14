<template>
  <div id="fm-add-container" @click.self="closeAddMenu">
    <div id="fm-add-flex">
      <div id="fm-add">
        <div class="fm-add-row">
          <span class="fm-add-label">账单类型</span>
          <a-radio-group v-model:model-value="addForm.type">
            <a-radio value="income">收入</a-radio>
            <a-radio value="expend">支出</a-radio>
          </a-radio-group>
        </div>

        <div class="fm-add-row">
          <span class="fm-add-label">账单名称</span>
          <a-input v-model:model-value="addForm.name" />
        </div>

        <div class="fm-add-row">
          <span class="fm-add-label">账单时间</span>
          <a-date-picker v-model:model-value="addForm.date" />
        </div>

        <div class="fm-add-row">
          <span class="fm-add-label">账单金额</span>
          <a-input-number
            v-model="addForm.price"
            model-event="input"
            placeholder="请输入金额"
            :min="0"
          />
        </div>

        <div class="fm-add-row">
          <span class="fm-add-label">账单备注</span>
          <a-textarea auto-size v-model:model-value="addForm.memo" />
        </div>

        <div :style="{ display: 'flex', flexFlow: 'row nowrap' }">
          <div :style="{ flexGrow: '1' }"></div>
          <a-space size="large">
            <a-button type="primary">提交</a-button>

            <a-button @click="resetAdd">重置</a-button>
          </a-space>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 作为 FMMain 子组件
import { reactive } from "vue";
import { useStatus } from "../../../stores/store.js";

const status = useStatus();

const addForm = reactive({
  type: null,
  name: null,
  date: null,
  price: null,
  memo: null,
});

function closeAddMenu() {
  status.isAddMenuOpen = false;
}

// TODO:
function submitAdd() {}

function resetAdd() {
  addForm.type = null;
  addForm.name = null;
  addForm.date = null;
  addForm.price = null;
  addForm.memo = null;
}
</script>

<style>
#fm-add-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-flow: row nowrap;
}

#fm-add-flex {
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
}

#fm-add {
  width: 500px;
  min-height: 280px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  padding: 20px;
}

.fm-add-row {
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 20px;
}

.fm-add-label {
  min-width: 100px;
  font-size: 16px;
  margin: auto 0;
}
</style>