<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
// import library


export default {
  name: "app",
  mounted() {
  },
};
</script>

<style lang="scss">
// IMPORT STYLE
@import url("./style/reset.css");
// IMPORT FONTS
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap");

// GENERAL
* {
  outline: none;
}
.overlay {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #fefefe;
  position: absolute;
  top: 0;
  left: 0;
  img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
body {
  height: 100vh;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  color: #44696c;
  background-image: url("./assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
  #app {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: #44696c;
    font-weight: 700;
  }
  h1 {
    font-weight: 900;
    font-size: 18px;
    text-transform: uppercase;
  }
  .date {
    font-size: 10px;
    font-weight: 700;
  }
  .logo {
    margin: auto;
    margin-bottom: 20px;
    display: block;
  }
  .wrapper--text {
    padding: 30px; //padding-top: 30px;
    background-color: rgba(255, 253, 245, 0.85);
    border-radius: 5px;
    margin-top: 20px;
    text-transform: uppercase;
    h1 {
      line-height: 20px;
    }
  }
  .author {
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }
}
</style>
