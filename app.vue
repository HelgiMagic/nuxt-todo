<script setup>
import useModalStore from './stores/modal';

const modalStore = useModalStore();
</script>

<template>
  <ModalNewTask />
  <ModalEditTask v-if="modalStore.active === 'editTask'" />
  <Header />
  <NuxtPage />
</template>
