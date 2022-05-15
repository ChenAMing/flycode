import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// ArcoDesign
import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import "@arco-design/web-vue/dist/arco.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(ArcoVue);
app.use(ArcoVueIcon);

axios.defaults.withCredentials = true;

app.mount("#app");
