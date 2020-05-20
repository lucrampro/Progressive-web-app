<template>
  <div class="article-container">
    <!-- LES ARTICLES SERONT INJECTÉs ICI -->
      <div v-if="post" class="article-content">
          <p class="date">{{ post.date }}</p>
          <h1 class="title"> {{ post.title }} </h1>
          <img class="img-article" :src="post.img" alt="">
          <p class="content"> {{ post.texte }} </p>
          <div class="author">{{ post.author }}</div>
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
    fetch(`https://my-json-server.typicode.com/melvinDebot/pokemon-go/article/${ this.$route.params.slug }`)
      .then(response => response.json())
      .then(json => this.post = json);
  },
  mounted() {
    console.log(`l'etat de mon post est ${this.post}`);
  },
}
</script>

<style lang="scss" scoped>

    .article-container {
        position: relative;
        .article-content {
            width: 70vw;
            margin: auto;
            margin-top: 50px;
            flex-direction: column;
            background-color: rgba(255, 253, 245, 0.85);
            border-radius: 5px;
            padding: 30px;
            min-height: 70vh;
            max-height: 80vh;
            bottom: 5vh;
            overflow: scroll;
            .img-article {
                width: 100%;
            }
            .content {
              line-height: 18px;
              text-align: justify;
            }
        }
        .close {
            position: absolute;
            width: 50px;
            left: 50%;
            transform: translateX(-50%);
            bottom: -25px;
        }
    }

</style>
