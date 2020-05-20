<template>
  <div class="home">
    <div class="overlay">
      <img src="../assets/logo.png" alt="" srcset="" />
    </div>
    <img src="../assets/logo.png" alt="" class="logo" />
    <div class="wrapper--text">
      <h1>
        Vous avez toujours reve de devenir dresseur pokemon ? <br />
        Combatre la ligue ? <br />
        collectionné tous les pokemon ? Aujourd'hui ces possible avec POKEMON GO
      </h1>
      <router-link to="/articles">
        <Buttons />
      </router-link>
    </div>
  </div>
</template>

<script>
import { gsap, Bounce } from "gsap";
// IMPORTS COMPONENTS
import Buttons from "./Button.vue";

export default {
  name: "Home",
  components: {
    Buttons,
  },
  mounted() {
    gsap
      .timeline()
      .set(".overlay img", { scale: 0, y: "-50%", x: "-50%" })
      .to(".overlay img", 1.5, { scale: 1, ease: Bounce.easeOut })
      .to(".overlay img", 1, { rotate: "360deg", y: "-50%", x: "-50%" })
      .to(".overlay img", 0.5, { scale: 0, ease: Bounce.easeOut })
      .to(".overlay", 0.5, { opacity: 0 })
      .set(".overlay", { height: 0 })
      .staggerFrom(
        ".home .logo, .home .wrapper--text",
        0.5,
        { opacity: 0, y: "50px" },
        0.2
      );
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 30px;
  max-width: 500px;
}
</style>
