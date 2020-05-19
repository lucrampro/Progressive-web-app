<template>
  <div class="home">
    <img src="../assets/logo.png" alt="" srcset="">
    <div class="wrapper--text">
      <h1>
        Vous avez toujours reve de devenir dresseur pokemon ? <br> Combatre la ligue ? <br> collectionné tous les pokemon ?
        Aujourd'hui ces possible avec POKEMON GO
      </h1>
      <Buttons/>
    </div>
  </div>
</template>

<script>
// IMPORTS COMPONENTS
import Buttons from './Button.vue'

export default {
  name: 'Home',
  components: {
    Buttons,
  },
}
</script>
<style lang="scss" scoped>
  .home {
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 30px;
   padding-top: 50px;
  }
</style>
