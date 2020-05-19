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
   .wrapper--text {
     height: 300px;
     padding: 10px;
     padding-top: 30px;
     background-color: #fffff5;
     border-radius: 1%;
     margin-top: 20px;
     text-transform: uppercase;
     opacity: 85%;
     h1 {
       line-height: 20px;
     }
   }
  }
</style>
