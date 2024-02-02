<script setup lang="ts">
import useTodosStore from '../stores/todos';

const todosStore = useTodosStore();
const todosLength = computed(() => todosStore.todos.length);
const doneLength = computed(() => todosStore.todos.filter((todo) => todo.done).length);
</script>

<template>
  <div class="header">
    <div class="header-group">
      <p class="blue">Всего задач</p>
      <p class="counter">{{ todosLength }}</p>
    </div>

    <div class="header-group">
      <p class="purple">Выполнено</p>

      <p class="counter" v-if="doneLength === todosLength">{{ doneLength }}</p>
      <p class="counter" v-else>{{ doneLength }} из {{ todosLength }}</p>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;

  width: 100%;
}

.header-group {
  display: flex;
  gap: 8px;
  align-items: center;
}

.counter {
  font-size: 12px;
  font-weight: 700;
  color: var(--gray-200);

  border-radius: 999px;

  background-color: var(--gray-400);

  height: 19px;
  padding: 2px 8px;

  display: flex;
  align-items: center;
}

.gap-8 {
  gap: 8px;
}

p {
  font-size: 14px;
}

.blue {
  color: var(--blue);
}

.purple {
  color: var(--purple);
}
</style>
