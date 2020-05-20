<template>
  <div class="home">
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
// IMPORTS COMPONENTS
import Buttons from "./Button.vue";
export default {
  name: "Home",
  components: {
    Buttons,
  },
  mounted() {},
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
