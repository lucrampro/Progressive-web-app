<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style lang="scss">
// IMPORT FONTS
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

// GENERAL
body {
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #44696c;
  h1 {
    font-weight: 900;
    font-size: 18px;
  }
  .date {
    font-size: 10px;
    font-weight: 700;
  }
}
</style>
