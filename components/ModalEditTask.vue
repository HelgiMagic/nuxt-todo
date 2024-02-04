<script setup lang="ts">
import useTodosStore from '../stores/todos';
import useModalStore from '~/stores/modal';

import { useForm } from 'vee-validate';
import {
  required,
  textValidation,
  dateValidation,
} from '../functions/validate';
import getCurrentDate from '../functions/getCurrentDate';

const todosStore = useTodosStore();
const modalStore = useModalStore();

const activeTask = computed(() =>
  todosStore.todos.find((todo) => todo.id === modalStore.elementId)
);

const { defineField, handleSubmit, errors, resetForm } = useForm({
  initialValues: {
    title: activeTask.value?.title,
    text: activeTask.value?.text,
    date: activeTask.value?.dateOfExpiring,
  },
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
  modalStore.setActive(null);
  resetForm();
};

const onSubmit = handleSubmit(async (values) => {
  if (values.title === undefined) throw new Error('title is undefined');
  if (values.text === undefined) throw new Error('text is undefined');
  if (values.date === undefined) throw new Error('date is undefined');
  if (activeTask.value?.id === undefined) throw new Error('id is undefined');

  const task = {
    title: values.title,
    text: values.text,
    done: activeTask.value?.done,
    dateOfCreation: getCurrentDate(),
    dateOfExpiring: values.date,
  };

  todosStore.editTodo(activeTask.value.id, task);
  handleCloseModal();
});

onMounted(() => console.log('mounted!'));

const isDisabled = computed(() =>
  Object.values(errors.value).length === 0 ? false : true
);
</script>

<template>
  <div class="overlay d-block"></div>
  <div class="modal d-flex">
    <div class="d-flex first-row">
      <h2>Редактирование задачи</h2>
      <button class="svgButton" @click="handleCloseModal">
        <img src="/closeModal.svg" alt="close modal button" />
      </button>
    </div>

    <form @submit="onSubmit" class="modalForm">
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

      <NewTaskButton :disabled="isDisabled" variant="edit"></NewTaskButton>
    </form>
  </div>
</template>

<style scoped>
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

h2 {
  font-size: 20px;
  color: white;
  font-weight: 700;
}
</style>
