<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style lang="scss">
// IMPORT STYLE
@import url('./style/reset.css');
// IMPORT FONTS
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

// GENERAL
body {
  height: 100vh;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #44696c;
  background-image: url('./assets/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  #app {
    height: 100%;
  }
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
