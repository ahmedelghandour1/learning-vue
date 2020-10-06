import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AuthPlugin from "./plugins/auth";

import VueApollo from "vue-apollo";

import { ApolloClient } from "apollo-client";
import { /* HttpLink,*/ createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

Vue.use(AuthPlugin);
Vue.use(VueApollo);

Vue.config.productionTip = false;

const getHeaders = () => {
  const headers = {};
  const token = window.localStorage.getItem("apollo-token");
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};
// Create an http link:
const httpLink = createHttpLink({
  uri: "https://hasura.io/learn/graphql",
  fetch,
  headers: getHeaders()
});
const wsLink = new WebSocketLink({
  uri: "wss://hasura.io/learn/graphql",
  options: {
    reconnect: true,
    timeout: 30000,
    connectionParams: () => {
      return { headers: getHeaders() };
    }
  }
});
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true,
    connectToDevTools: true,
  })
});
const apolloProvider = new VueApollo({
  defaultClient: client
});

console.log(apolloProvider);

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
