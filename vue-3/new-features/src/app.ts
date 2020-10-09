import { reactive, ReactiveEffect, readonly, ref } from "vue";

const state = reactive({
  appTitle: "Simple Counter app",
  otherTitle: "sadsad",
});

setTimeout(() => {
  state.otherTitle = "_+_";
}, 3000);
setTimeout(() => {
  state.appTitle += " :D";
}, 3000);
const asyncAlertAppTitle = () => {
  setTimeout(() => {
    alert(state.appTitle);
  }, 2000);
};

interface State {
  appTitle: string;
  otherTitle: string;
}
export type globals = {
  state: State;
  asyncAlertAppTitle: any;
};
export default {
  state: readonly(state),
  asyncAlertAppTitle,
};
