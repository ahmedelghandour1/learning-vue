<template>
  <div>
    <!-- loading state -->
    <div v-if="$apollo.queries.todos.loading">loading....</div>
    <!-- in case of error -->
    <div>{{errorTodo}}</div>
    <div class="todoListwrapper">
      <TodoItem v-bind:todos="filteredTodos" v-bind:type="type" />
    </div>
    <TodoFilters
      v-bind:remainingTodos="remainingTodos"
      v-bind:filterResults="filterResults"
      v-bind:filterType="filterType"
      v-bind:type="type"
      v-bind:clearCompleted="clearCompleted"
    />
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";
import TodoFilters from "../components/TodoFilters";

import { GET_MY_TODOS, REMOVE_TODOS } from "./../services/graphql.gql";

export default {
  mounted() {
    console.log(this.$apollo);
  },
  components: {
    TodoItem,
    TodoFilters,
  },
  apollo: {
    todos: {
      query: GET_MY_TODOS,
      error(error) {
        this.errorTodo = JSON.stringify(error.message);
      },
    },
  },
  data() {
    return {
      type: "private",
      filterType: "all",
      todos: [],
      errorTodo: null,
    };
  },
  computed: {
    remainingTodos: function () {
      const activeTodos =
        this.todos !== undefined
          ? this.todos.filter((todo) => todo.is_completed !== true)
          : [];
      return activeTodos.length;
    },
    filteredTodos: function () {
      if (this.filterType === "all") {
        return this.todos;
      } else if (this.filterType === "active") {
        return this.todos.filter((todo) => todo.is_completed !== true);
      } else if (this.filterType === "completed") {
        return this.todos.filter((todo) => todo.is_completed === true);
      }
    },
  },
  methods: {
    filterResults: function (type) {
      if (type === "active") {
        this.filterType = "active";
      } else if (type === "completed") {
        this.filterType = "completed";
      } else {
        this.filterType = "all";
      }
    },
    clearCompleted: function () {
      const isOk = window.confirm("Are you sure?");
      if (isOk) {
        // Remove all the todos that are completed
        this.$apollo.mutate({
          mutation: REMOVE_TODOS,
          variables: {
            isCompleted: true,
          },
          update: (store, { data: { delete_todos } }) => {
            if (delete_todos.affected_rows) {
              const data = store.readQuery({
                query: GET_MY_TODOS,
              });
              data.todos = data.todos.filter(
                (el) => el.is_completed === false
              );
              store.writeQuery({
                query: GET_MY_TODOS,
                data,
              });
            }
          },
           optimisticResponse: {
          __typename: "Mutation",
          delete_todos: {
            __typename: "todos",
            affected_rows: this.todos.length - this.remainingTodos
          }
        }
        });
      }
    },
  },
};
</script>
