<template>
  <div class="article">
    <router-link :to="`/`" class="header">
      <img src="../assets/logo.png" alt="" class="img-header logo" />
    </router-link>
    <!-- LES ARTICLES SERONT INJECTÉs ICI -->
    <div v-if="post" class="wrapper--text">
      <p class="date">{{ post.date }}</p>
      <h1 class="title">{{ post.title }}</h1>
      <img class="img-article" :src="post.img" alt="" />
      <p class="content">{{ post.texte }}</p>
      <div class="author">- {{ post.author }}</div>
    </div>
    <router-link to="/articles">
      <img class="close" src="../assets/article/close.png" alt="" />
    </router-link>
  </div>
</template>

<script>
// IMPORT LIBRARY
import gsap from 'gsap';

export default {
  name: "Post",
  data() {
    return {
      post: null,
    };
  },
  created() {
    fetch(
      `https://my-json-server.typicode.com/melvinDebot/pokemon-go/article/${this.$route.params.slug}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.post = json;
        this.$nextTick(() => {
          gsap.from('.wrapper--text', 0.5, { y: '50px', opacity: 0 })
        })
      });
  },
  mounted() {
    // gsap.from('.wrapper--text', 1.5, { y: '50px', opacity: 0 })
  },
};
</script>

<style lang="scss" scoped>
.article {
  position: relative;
  .wrapper--text {
    width: 70vw;
    margin: auto;
    flex-direction: column;
    height: 64vh;
    bottom: 5vh;
    overflow: scroll;
    .img-article {
      width: 100%;
      max-width: 500px;
      margin: auto;
      display: block;
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
  @media all and (min-width: 800px) {
    .wrapper--text {
      padding: 60px;
    }
  }
</style>
