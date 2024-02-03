type Todo = {
  title: string;
  text: string;
  done: boolean;
  id: number;
  dateOfCreation: string;
  dateOfExpiring: string;
};

type State = {
  todos: Todo[];
};

const useTodosStore = defineStore('todos', {
  state: (): State => ({ todos: [] }),
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    removeTodo(id: number) {
      const newTodos = this.todos.filter((todo) => todo.id !== id);

      this.todos = newTodos;
    },
    swapDone(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);

      todo.done = !todo.done;
    },
    // deleteTodo(deletingId) {
    //   const newTodos = this.todos.filter((todo) => todo.id !== deletingId);
    //   this.unarchiveTodo(deletingId);

    //   this.todos = newTodos;
    // },
    // archiveTodo(archivingId) {
    //   const elem = this.todos.find((todo) => todo.id === archivingId);
    //   elem.archived = true;

    //   this.archivedTodos.push(archivingId);
    // },
    // unarchiveTodo(unarchivingId) {
    //   const elem = this.todos.find((todo) => todo.id === unarchivingId);
    //   elem.archived = false;

    //   const newArchived = this.archivedTodos.filter((id) => id !== unarchivingId);
    //   this.archivedTodos = newArchived;
    // },
  },
});

export default useTodosStore;
