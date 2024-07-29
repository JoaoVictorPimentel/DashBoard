<script setup>

</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
  padding: 0;
  margin: 0;
  font-family: 'Roboto';
}

html, body {
  height: 100%;
  background-color: #f0f2f5;
  min-height: 100vh;
}

.content-pages {
  padding: 15px;
  min-height: 100vh;
}

.title-pages {
    font-size: 25px;
}
</style>
