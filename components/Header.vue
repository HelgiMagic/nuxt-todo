<template>
<header>
  <img src="/rocket.svg" alt="Rocket image">
  <h1 class="blue">Nu<span class="purple">xt</span> to<span class="purple">do</span></h1>
</header>
</template>

<style scoped>
header {
  width: 100%;
  height: 200px;

  background-color: #0D0D0D;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

h1 {
  font-size: 40px;
  font-weight: 900;
}

.purple {
  color: #5E60CE;
}

.blue {
  color: #4EA8DE;
}
</style>