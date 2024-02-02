<script setup lang="ts">
import useTodosStore from '../stores/todos';
import useModalStore from '~/stores/modal';
import getUniqId from '../functions/getUniqId';
import { ref, computed } from 'vue';
import { useForm } from 'vee-validate';
import {
  required,
  textValidation,
  dateValidation,
} from '../functions/validate';

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

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: {
    header: required,
    text: textValidation,
    date: dateValidation,
  },
});

const [header, headerProps] = defineField('header');
const [text, textProps] = defineField('text');
const [date, dateProps] = defineField('date');

const onSubmit = handleSubmit((values) => {
  // Submit to API
  console.log(values);
});

// const test = computed(() => console.log(errors.value));
const isDisabled = computed(() => Object.values(errors.value).length === 0 ? false : true);
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

    <form @submit="onSubmit">
      <input v-model="header" v-bind="headerProps" placeholder="Заголовок" />
      <span class="error">{{ errors.header }}</span>

      <input v-model="text" v-bind="textProps" placeholder="Текст" />
      <span class="error">{{ errors.text }}</span>

      <input v-model="date" v-bind="dateProps" placeholder="Дата окончания" />
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
  width: 457px;
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
