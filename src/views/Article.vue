<template>
  <div class="article">
    <!-- LES ARTICLES SERONT INJECTER ICI -->
  <div v-if="post" >
    <h1> {{ post.title }} </h1>
    <p> {{ post.body }} </p>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Post',
  data() {
    return {
      post: null,
    }
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${ this.$route.params.slug }`)
      .then(response => response.json())
      .then(json => this.post = json);
  },
  mounted() {
    console.log(`l'etat de mon post est ${this.post}`);
  },
}
</script>
<style lang="scss" scoped>
</style>