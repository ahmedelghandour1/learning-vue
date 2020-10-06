<template>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
      <div v-if="todo.is_public" class="userInfoPublic">@{{ todo.user.name }}</div>
      <div class="view" v-if="type === 'private'">
        <div v-if="todo.is_completed" class="round">
          <input type="checkbox" :id="todo.id" checked="true" />
          <label v-on:click.prevent="handleTodoToggle(todo)" :for="todo.id"></label>
        </div>
        <div v-else class="round">
          <input type="checkbox" :id="todo.id" />
          <label v-on:click.prevent="handleTodoToggle(todo)" :for="todo.id"></label>
        </div>
      </div>
      <div class="labelContent">
        <strike class="todoLabel" v-if="todo.is_completed">
          <div>{{ todo.title }}</div>
        </strike>
        <div v-else>{{ todo.title }}</div>
      </div>
      <button v-if="type === 'private'" v-on:click="handleTodoDelete(todo)" class="closeBtn">x</button>
    </li>
  </ul>
</template>

<script>
import { TOGGLE_TODO, GET_MY_TODOS, REMOVE_TODO } from "./../services/graphql.gql";
export default {
  props: ["todos", "type"],
  methods: {
    handleTodoToggle: function (todo) {
      // eslint-disable-line
      // update todo data in db here
      const id = todo.id;
      const isCompleted = !todo.is_completed;
      this.$apollo.mutate({
        mutation: TOGGLE_TODO,
        variables: {
          id,
          isCompleted,
        },
        update: (store, { data: { update_todos } }) => {
          if (update_todos.affected_rows && this.type === "private") {
            const data = store.readQuery({
              query: GET_MY_TODOS,
            });
            const toggledTodo = data.todos.find((el) => el.id === id);
            console.log(toggledTodo);
            toggledTodo.is_completed = !toggledTodo.is_completed;
            store.writeQuery({
              query: GET_MY_TODOS,
              data,
            });
          }
        },
        optimisticResponse: {
          __typename: "Mutation",
          update_todos: {
            __typename: "todos",
            id: id,
            is_completed: isCompleted,
            affected_rows: 1,
          },
        },
      });
    },
    handleTodoDelete: function (todo) {
      // eslint-disable-line
      // delete todo from db
      this.$apollo.mutate({
        mutation: REMOVE_TODO,
        variables: {
          id: todo.id,
        },
        update: (store, { data: { delete_todos } }) => {
          if (delete_todos.affected_rows) {
            const data = store.readQuery({
              query: GET_MY_TODOS,
            });
            data.todos = data.todos.filter(
              (el) => el.id !== todo.id
            );
            store.writeQuery({
              query: GET_MY_TODOS,
              data
            });
          }
        },
        optimisticResponse: {
          __typename: "Mutation",
          delete_todos: {
            __typename: "todos",
            affected_rows: 1
          }
        }
      });
    },
  },
};
</script>
