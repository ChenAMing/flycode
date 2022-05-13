<template>
  <div id="fm-login">
    <div id="fm-login-container">
      <div id="fm-login-frame">
        <div id="fm-login-logo">飞码记账</div>
        <div id="fm-login-main">
          <div class="fm-login-input">
            <label for="fm-login-username">账号</label>
            <input
              id="fm-login-username"
              type="text"
              v-model="userInfo.username"
              placeholder="请输入账号"
            />
          </div>
          <div class="fm-login-input">
            <label for="fm-login-password">密码</label>
            <input
              id="fm-login-password"
              type="password"
              v-model="userInfo.password"
              placeholder="请输入密码"
            />
          </div>
          <div id="fm-login-checkbox-container">
            <input
              type="checkbox"
              id="fm-login-checkbox"
              v-model="userInfo.passwordFree"
            />
            <label for="fm-login-checkbox">七天内免登录</label>
          </div>
          <button @click="userLogin" id="fm-login-btn">登录</button>
          <div id="fm-login-footer">
            <div>
              <span>还没有账号？</span>
              <span id="fm-login-ir" @click="atOnceRegister">立即注册</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

// URL
const loginURL = "http://127.0.0.1:8080/login.do";

const userInfo = reactive({
  username: null,
  password: null,
  passwordFree: false,
});

function userLogin() {
  axios({
    method: "post",
    url: loginURL,
    params: {
      loginAct: userInfo.username,
      loginPwd: userInfo.password,
      isRemPwd: userInfo.passwordFree,
    },
  }).then((res) => {
    console.log(res.data);
    if (res.data.code === "1") {
      // TODO: 跳转页面
      console.log();
    } else if (res.data.code === "0") {
      alert("账号或密码错误！请重新输入。");
    }
  });
}

function atOnceRegister() {}
</script>
 
<style>
#fm-login {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("../../assets/img-login/bg.png");
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
}

#fm-login {
  display: flex;
  flex-flow: column nowrap;
}

#fm-login-container {
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
}

#fm-login-frame {
  margin: auto;
  flex-grow: 1;
  width: 450px;
  height: 570px;
  background-color: white;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 3px;
}

#fm-login-logo {
  flex-basis: 33px;
  max-height: 33px;
  text-align: center;
  vertical-align: center;
  font-size: 24px;
  margin: 50px 100px 35px 100px;
  padding: 7px;
  background-image: url("../../assets/img-login/logo.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}

#fm-login-main {
  flex-grow: 1;
  margin: 0 100px 0 100px;
}

#fm-login-username,
#fm-login-password {
  margin-bottom: 30px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #808080;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3),
    inset 0px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0);
  background: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
}

.fm-login-input > label {
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
}

#fm-login-checkbox-container {
  display: flex;
  flex-flow: row nowrap;
}

#fm-login-checkbox-container > label {
  font-size: 12px;
  flex-grow: 1;
  margin-left: 7px;
}

#fm-login-checkbox {
  margin: 0.25px 0;
}

/* 登录按钮 */
#fm-login-btn {
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 1);
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 30px;
  transition: background 0.3s;
}

#fm-login-btn:hover {
  background-color: #00baad;
}

#fm-login-btn:active {
  background-color: #00978d;
}

/* 还没有账号？立即注册 */
#fm-login-footer {
  display: flex;
  flex-flow: column nowrap;
}

#fm-login-footer > div {
  margin: auto;
}

#fm-login-footer > div > span {
  color: #38383874;
}

#fm-login-ir {
  color: #000000 !important;
  transition: color 0.5s;
}

#fm-login-ir:hover {
  color: #007aff !important;
}
</style>