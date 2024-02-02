<script setup lang="ts">
import useModalStore from '~/stores/modal';

const modalStore = useModalStore();

const handleClick = () => {
  modalStore.setActive(true);
};
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
