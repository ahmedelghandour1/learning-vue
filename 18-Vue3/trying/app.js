import { reactive, createApp } from "./vue3.js";

const app = createApp({
  data() {
    return {
      counter: 0,
    };
  },
}).mount("#app");
