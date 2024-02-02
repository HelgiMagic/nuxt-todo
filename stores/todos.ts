type Todo = {
  dateOfCreation: string;
  dateOfExpiring: string;
  done: boolean;
  header: string;
  text: string;
  id: number;
};

type State = {
  todos: Todo[];
}

const useTodosStore = defineStore('todos', {
  state: (): State => ({ todos: [] }),
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
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
