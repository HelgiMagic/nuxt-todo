<script setup>
const props = defineProps(['variant']);

const text = props.variant === 'edit' ? 'Изменить' : 'Создать';
</script>

<template>
  <button class="new-task-button">
    {{ text }}
    <img src="/plus.svg" alt="plus image" />
  </button>
</template>

<style scoped>
button {
  width: 100%;
  padding: 16px;

  border: none;
  border-radius: 8px;

  background: var(--blue-dark);
  color: #f2f2f2;
  font-weight: 700;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

button:hover {
  background-color: var(--blue);
}

button:disabled {
  background-color: var(--gray-300);
  cursor: not-allowed;
}
</style>
