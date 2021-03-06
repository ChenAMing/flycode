import { defineStore } from "pinia";

export const useStatus = defineStore({
  id: "status",
  state: () => ({
    // 增加记录面板是否打开：
    isAddMenuOpen: false,
    // 登录的用户名：
    displayUsername: null,
    displayUserID: null,
  }),
});

export const useDisplayMenu = defineStore({
  id: "displayMenu",
  state: () => ({
    /*\
    | | 1.主页
    | | 2.查询记录
    | | 3.统计报表
    | | 4.个人中心
    \*/
    displayMenu: 1,
  }),
});

export const useAxiosConfig = defineStore({
  id: "axiosConfig",
  state: () => ({
    baseURL: "http://127.0.0.1:8080",
  }),
});
