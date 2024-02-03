<script setup lang="ts">
import useTodosStore from '../stores/todos';
import useModalStore from '~/stores/modal';

import { computed } from 'vue';
import { useForm } from 'vee-validate';
import {
  required,
  textValidation,
  dateValidation,
} from '../functions/validate';
import getCurrentDate from '../functions/getCurrentDate';

const todosStore = useTodosStore();
const modalStore = useModalStore();

const modalClass = computed(() =>
  modalStore.active ? 'modal d-flex' : 'modal'
);

const overlayClass = computed(() =>
  modalStore.active ? 'overlay d-block' : 'overlay'
);

const { defineField, handleSubmit, errors, resetForm } = useForm({
  validationSchema: {
    title: required,
    text: textValidation,
    date: dateValidation,
  },
});

const [title, titleProps] = defineField('title');
const [text, textProps] = defineField('text');
const [date, dateProps] = defineField('date');

const handleCloseModal = () => {
  modalStore.setActive(false);
  resetForm();
};

const onSubmit = handleSubmit(async (values) => {
  console.log(values);

  const task = {
    title: values.title,
    text: values.text,
    done: false,
    dateOfCreation: getCurrentDate(),
    dateOfExpiring: values.date,
  };

  todosStore.addTodo(task);
  handleCloseModal();
});

const isDisabled = computed(() =>
  Object.values(errors.value).length === 0 ? false : true
);
</script>

<template>
  <div :class="overlayClass"></div>
  <div :class="modalClass">
    <div class="d-flex first-row">
      <h2>Создать задачу</h2>
      <button class="svgButton" @click="handleCloseModal">
        <img src="/public/closeModal.svg" alt="close modal button" />
      </button>
    </div>

    <form @submit="onSubmit">
      <input v-model="title" v-bind="titleProps" placeholder="Заголовок" />
      <span class="error">{{ errors.title }}</span>

      <input v-model="text" v-bind="textProps" placeholder="Текст" />
      <span class="error">{{ errors.text }}</span>

      <input
        v-model="date"
        v-bind="dateProps"
        placeholder="Дата окончания (DD.MM.YYYY)"
      />
      <span class="error">{{ errors.date }}</span>

      <NewTaskButton :disabled="isDisabled"></NewTaskButton>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;

  gap: 10px;
}

input {
  outline: none;

  border-radius: 8px;
  border: 1px solid var(--gray-700);
  background-color: var(--gray-500);

  color: var(--gray-300);
  font-size: 14px;
  font-weight: 400;

  height: 38px;

  padding-left: 16px;
}

.error {
  color: var(--danger);
  font-size: 10px;

  margin-top: -8px;
}

.modal {
  width: 95%;
  max-width: 457px;
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

.d-flex {
  display: flex;
}
</style>
