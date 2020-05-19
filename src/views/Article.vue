<template>
  <div class="article-container">
    <!-- LES ARTICLES SERONT INJECTÉs ICI -->
      <div v-if="post" class="article-content">
          <p class="date">19 mai 2020</p>
          <h1 class="title"> {{ post.title }} </h1>
          <img class="img-article" src="../assets/article/img-article.png" alt="">
          <p class="content"> {{ post.body }} </p>
          <div class="author">- Author</div>
      </div>
      <router-link to="/articles">
          <img class="close" src="../assets/article/close.png" alt="">
      </router-link>
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
.article-content {
    position: absolute;
    width: 70vw;
    left: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    background-color: rgba(255, 253, 245, 0.85);
    border-radius: 5px;
    padding: 30px;
    margin-left: 20px;
    margin-right: 20px;
    min-height: 70vh;
    max-height: 70vh;
    bottom: 5vh;
    overflow: scroll;

    .img-article {
        width: 100%;
    }
}

.close {
    position: absolute;
    width: 50px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2.5vh;
}
</style>
