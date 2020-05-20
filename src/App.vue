<template>
  <div id="app">
    <div class="overlay">
      <img class="logo" src="./assets/logo.png" alt="" srcset="" />
    </div>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
// import library
import { gsap, Bounce } from "gsap";

export default {
  name: "app",
  mounted() {
    console.log(this.$route.name);
    gsap
      .timeline()
      .set(".overlay .logo", { scale: 0, y: "-50%", x: "-50%" })
      .to(".overlay .logo", 1.5, { scale: 1, ease: Bounce.easeOut })
      .to(".overlay .logo", 1, { rotate: "360deg", y: "-50%", x: "-50%" })
      .to(".overlay .logo", 0.5, { scale: 0, ease: Bounce.easeOut })
      .to(".overlay", 0.5, { opacity: 0 })
      .set(".overlay", { height: 0 })
      .staggerFrom(
        ".home .logo, .home .wrapper--text",
        0.5,
        { opacity: 0, y: "50px" },
        0.2
      );
  },
  methods: {
    beforeEnter: function() {},
    enter: function(el, done) {
      let tl = gsap.timeline();
      console.log("je suis le FUCKING ENTER");
      tl.staggerTo("body *", 1.5, {
        opacity: 1,
        onComplete: () => {
          done;
        },
      });
    },
    beforeLeave: function() {},
    leave: function(el, done) {
      let tl = gsap.timeline();
      console.log("je suis le FUCKING LEAVE PTN");
      tl.staggerTo("body *", 1.5, {
        opacity: 0,
        onComplete: () => {
          done();
        },
      });
    },
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
