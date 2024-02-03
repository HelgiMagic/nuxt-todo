<script setup>
import useTodosStore from '~/stores/todos';
const props = defineProps(['data']);

const todosStore = useTodosStore();

const handleDone = () => {
  todosStore.swapDone(props.data.id);
};

const handleRemove = () => {
  console.log(props.data.id);
  console.log(todosStore.todos);

  todosStore.removeTodo(props.data.id);

  console.log(todosStore.todos);
};

const h3Class = computed(() => (props.data.done ? 'text-done' : ''));
const textClass = computed(() => (props.data.done ? 'text text-done' : 'text'));
</script>

<template>
  <div class="task">
    <input
      type="checkbox"
      class="check-input"
      @click="handleDone"
      :checked="props.data.done"
    />
    <span class="check-box"></span>

    <div class="middle">
      <div class="row">
        <h3 :class="h3Class">{{ data.title }}</h3>
        <div class="dates">
          <div class="date-row">
            <p>Дата создания:</p>
            <p class="date">{{ data.dateOfCreation }}</p>
          </div>
          <div class="date-row">
            <p>Дата окончания:</p>
            <p class="date">{{ data.dateOfExpiring }}</p>
          </div>
        </div>
      </div>

      <div :class="textClass">{{ data.text }}</div>
    </div>

    <div class="controls">
      <button class="svgButton" @click="handleRemove">
        <img src="/public/trash.svg" alt="Trash image" />
      </button>

      <button class="svgButton">
        <img src="/public/edit.svg" alt="Edit image" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.task {
  display: flex;
  align-items: flex-start;

  width: 100%;

  border-radius: 8px;
  border: 1px solid var(--gray-400);

  background-color: var(--gray-500);

  padding: 16px;
  gap: 12px;
}

.check-input {
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  height: 30px;
  width: 30px;
  margin-left: -5px;
  z-index: 10;
}

.check-box {
  position: absolute;
  margin-left: -5px;
  width: 25px;
  height: 25px;
  background-image: url(/unchecked.svg);
}

.check-input:checked + .check-box {
  background-image: url(/checked.svg);
}

.middle {
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  gap: 10px;

  padding-left: 30px;
}

.row {
  display: flex;
  justify-content: space-between;
}

h3 {
  font-size: 20px;
  color: white;

  font-weight: 700;
}

.date-row {
  display: flex;
  justify-content: space-between;

  width: 137px;
  height: 14px;

  font-size: 10px;
  color: var(--gray-300);
}

.date {
  color: var(--blue);
}

.text {
  font-size: 16px;
  color: var(--gray-100);
  font-weight: 400;

  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
}

.text-done {
  color: var(--gray-300);
  text-decoration-line: line-through;
}

.controls {
  display: flex;
  gap: 2px;
}
</style>
