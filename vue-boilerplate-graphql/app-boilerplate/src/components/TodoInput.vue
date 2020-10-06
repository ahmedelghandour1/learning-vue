<template>
  <div class="formInput">
    <input
      class="input"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <i class="downArrow fa fa-angle-right" />
  </div>
</template>

<script>
import { ADD_TODO, GET_MY_TODOS } from "./../services/graphql.gql";
export default {
  props: ["type"],
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo: function () {
      // insert new todo into db
      const todo = this.newTodo && this.newTodo.trim();
      const isPublic = this.type === "public" ? true : false;
      this.newTodo = "";
      this.$apollo.mutate({
        mutation: ADD_TODO,
        variables: {
          todo,
          isPublic,
        },
        update(store, { data: { insert_todos } }) {
          console.log(insert_todos);
          const data = store.readQuery({
            query: GET_MY_TODOS,
          });
          const addedTodo = insert_todos.returning;
          data.todos.splice(0, 0, addedTodo[0]);
          store.writeQuery({
            query: GET_MY_TODOS,
            data,
          });
          console.log(data);
        },
        optimisticResponse: {
          __typename: "Mutation",
          insert_todos: {
            __typename: "todos_mutation_response",
            affected_rows: 1,
            returning: [
              {
                __typename: "todos",
                id: null,
                is_public: isPublic,
                title: todo,
                is_completed: false,
                created_at: null,
              },
            ],
          },
        },
      });
    },
  },
};
</script>
