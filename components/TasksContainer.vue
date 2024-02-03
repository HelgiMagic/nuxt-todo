<script setup lang="ts">
import useTodosStore from '../stores/todos';

const todosStore = useTodosStore();
const todosLength = computed(() => todosStore.todos.length);
const doneLength = computed(
  () => todosStore.todos.filter((todo) => todo.done).length
);
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

  <div class="stub" v-if="todosLength === 0">
    <img src="/public/clipboard.svg" alt="Clipboard image" />
    <p class="bold">У вас ещё нет созданных задач</p>
    <p>Создавайте задачи и организуйте свои дела</p>
  </div>

  <div class="tasks">
    <Task v-for="task in todosStore.todos" :data="task" :key="task.id" />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-top: calc(66px - 25px);
  margin-bottom: 24px;
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

.header p {
  font-size: 14px;
}

.blue {
  color: var(--blue);
}

.purple {
  color: var(--purple);
}

.stub {
  border-radius: 8px;
  border-top: 1px solid var(--gray-400);

  width: 100%;
  padding: 64px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.stub p {
  font-size: 16px;
  color: var(--gray-300);
}

.stub img {
  margin-bottom: 16px;
}

.bold {
  font-weight: 700;
}

.tasks {
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 12px;
  margin-bottom: 50px;
}
</style>
