<template>
  <button>
    Создать
    <img src="/public/plus.svg" alt="plus image">
  </button>
</template>

<style scoped>
button {
  width: 100%;
  padding: 16px;

  border: none;
  border-radius: 8px;

  background: var(--blue-dark);
  color: #F2F2F2;
  font-weight: 700;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: relative;
  transform: translateY(-50%);
}

button:hover {
  background-color: var(--blue);
}
</style>