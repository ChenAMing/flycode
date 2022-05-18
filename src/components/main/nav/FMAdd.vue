<template>
  <div id="fm-add-container" @click.self="closeAddMenu">
    <div id="fm-add-flex">
      <div id="fm-add">
        <div class="fm-add-row">
          <span class="fm-add-label">账单类型</span>

          <a-select v-model="type">
            <a-option>收入</a-option>
            <a-option>支出</a-option>
          </a-select>

          <a-select :options="data[type] || []" v-model="addForm.sort">
          </a-select>
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

        <div class="flex-row">
          <div :style="{ flexGrow: '1' }"></div>
          <a-space size="large">
            <a-button type="primary" @click="submitAdd">提交</a-button>

            <a-button @click="resetAdd">重置</a-button>
          </a-space>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 作为 FMMain 子组件
import axios from "axios";
import { reactive, watch, ref } from "vue";
import { useStatus, useAxiosConfig } from "../../../stores/store.js";

const status = useStatus();
const axiosConfig = useAxiosConfig();

const data = ref({
  收入: [],
  支出: [],
});

const type= ref('收入')

const addForm = reactive({
  // type: "收入",
  name: null,
  date: null,
  price: null,
  memo: null,
  sort: null,
});

function closeAddMenu() {
  status.isAddMenuOpen = false;
}

function submitAdd() {
  axios({
    method: "post",
    url: `${axiosConfig.baseURL}/saveCreateBill.do`,
    params: {
      title: addForm.name,
      billTime: addForm.date,
      type: type.value === "收入" ? "2" : "1",
      remark: addForm.memo,
      price: addForm.price,
      sort: addForm.sort,
    },
  }).then((res) => {
    if (res.data.code === "1") {
      alert("增加成功！");
      status.isAddMenuOpen = false;
    } else if (res.data.code === "0") {
      alert("系统错误，请稍后重试。");
    }
  });
}

function resetAdd() {
  type.value = "收入";
  addForm.name = null;
  addForm.date = null;
  addForm.price = null;
  addForm.memo = null;
  addForm.sort = null;
}

watch(type, () => {
  addForm.sort = "";
});

function getSort() {
  axios.get(`${axiosConfig.baseURL}/showBillSort.do`).then((res) => {
    for (let i = 0; i < res.data.incomingList.length; i++) {
      data.value["收入"].push({
        value: res.data.incomingList[i]["id"],
        label: res.data.incomingList[i]["value"],
      });
    }

    for (let i = 0; i < res.data.expendList.length; i++) {
      data.value["支出"].push({
        value: res.data.expendList[i]["id"],
        label: res.data.expendList[i]["value"],
      });
    }
  });
}

getSort();
</script>

<style scoped>
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