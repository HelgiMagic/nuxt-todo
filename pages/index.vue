<script setup lang="ts">
import routes from '~/routes';
import useModalStore from '~/stores/modal';
import useTodosStore from '../stores/todos';

const modalStore = useModalStore();
const todosStore = useTodosStore();

const handleClick = () => {
  modalStore.setActive(true);
};

interface Todo {
  title: string;
  text: string;
  done: boolean;
  id: number;
  dateOfCreation: string;
  dateOfExpiring: string;
}

const data:Todo[] = await $fetch(routes.main(), {
  method: 'GET',
});

todosStore.setTodos(data);
</script>

<template>
  <main>
    <div class="container">
      <NewTaskButton @click="handleClick" />
      <TasksContainer></TasksContainer>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 736px;
  margin: auto;
}

.new-task-button {
  position: relative;
  transform: translateY(-50%);
}
</style>
