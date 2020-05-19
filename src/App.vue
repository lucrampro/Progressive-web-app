<template>
  <div id="app">
    <router-link to="/articles">les article</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
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
    display: block;
    @media(min-width:1000px){
      position: absolute;
      left: 45%;
      top: 1%;
      transform: translate(-1%, -4%)

    }
  }
  .wrapper--text {
    padding: 10px;
    padding-top: 30px;
    background-color: #fffff5;
    // border-radius: 1%;
    margin-top: 20px;

    text-transform: uppercase;
    // opacity: 85%;
    @media(min-width:1000px){
      width: 35vw;
      margin: 10px;
      height: 490px;
    }
    @media(min-width:1500px){

      height: 500px;
    }
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
