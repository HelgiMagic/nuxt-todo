import routes from "~/routes";

interface Todo {
  title: string;
  text: string;
  done: boolean;
  dateOfCreation: string;
  dateOfExpiring: string;
}

interface TodoWithId extends Todo {
  id: number;
}

type State = {
  todos: TodoWithId[];
};

const useTodosStore = defineStore('todos', {
  state: (): State => ({ todos: [] }),
  actions: {
    setTodos(todos: TodoWithId[]) {
      this.todos = todos;
    },
    async addTodo(body: Todo) {
      const todo: TodoWithId = await $fetch(routes.main(), {
        method: 'POST',
        body,
      });

      this.todos.push(todo);
    },
    async removeTodo(id: number) {
      const newTodos = this.todos.filter((todo) => todo.id !== id);
      this.todos = newTodos;

      await $fetch(routes.certain(id), {
        method: 'DELETE',
      });
    },
    async editTodo(id: number, body: Todo) {
      const todo: TodoWithId = await $fetch(routes.certain(id), {
        method: 'PUT',
        body,
      });

      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos[index] = todo;
    },
    async swapDone(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo === null || todo === undefined) throw new Error('todo is undefined!');

      todo.done = !todo.done;

      await $fetch(routes.certain(id), {
        method: 'PUT',
        body: todo,
      });
    },
  },
});

export default useTodosStore;
