<script setup lang="ts">
import useTodosStore from '../stores/todos';
import useModalStore from '~/stores/modal';
import getUniqId from '../functions/getUniqId';
import { ref, computed } from 'vue';

const todosStore = useTodosStore();
const modalStore = useModalStore();

const modalClass = computed(() =>
  modalStore.active ? 'modal d-flex' : 'modal'
);

const overlayClass = computed(() =>
  modalStore.active ? 'overlay d-block' : 'overlay'
);

const handleCloseModal = () => {
  modalStore.setActive(false);
};

// const handleSubmit = (e) => {
//   e.preventDefault();

//   todosStore.addTodo({
//     name: text.value,
//     archived: false,
//     id: getUniqId(),
//   });

//   text.value = '';
// };
</script>

<template>
  <div :class="overlayClass"></div>
  <div :class="modalClass">
    <div class="d-flex first-row">
      <h2>Создать задачу</h2>
      <button class="closeButton" @click="handleCloseModal">
        <img src="/public/closeModal.svg" alt="close modal button" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 457px;
  height: 296px;
  padding: 20px;

  border-radius: 10px;
  border: 1px solid var(--gray-500);

  background: var(--gray-400);

  gap: 20px;
  flex-direction: column;
}

.first-row {
  justify-content: space-between;
}

h2 {
  font-size: 20px;
  color: white;
  font-weight: 700;
}

.closeButton {
  background-color: transparent;
  border: none;
  outline: none;
}

.d-flex {
  display: flex;
}
</style>
