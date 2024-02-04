<script setup>
import routes from '~/functions/routes';

const route = useRoute();

const { data } = await useFetch(routes.certain(route.params.id));

useHead({
  title: data.value.title,
  meta: [{ name: 'description', content: data.value.text }],
});
</script>

<template>
  <div class="container">
    <div class="header">
      <NuxtLink to="/">Главная</NuxtLink>
      <p>/</p>
      <p>{{ data.title }}</p>
    </div>

    <div class="task">
      <div class="middle">
        <h3>{{ data.title }}</h3>

        <div class="text">{{ data.text }}</div>
      </div>
    </div>

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
</template>

<style scoped>
.container {
  align-items: flex-start;
  gap: 8px;
}

.header {
  display: flex;
  width: 100%;
  gap: 5px;
  margin-top: 31px;

  font-size: 14px;
  color: var(--gray-300);
}

a {
  text-decoration: none;
  color: inherit;
}

.middle {
  padding-left: 0;
}

.text {
  cursor: default;
}
</style>
