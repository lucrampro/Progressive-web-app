<template>
  <div class="article--list">
    <router-link :to="`/`" class="header">
      <img src="../assets/logo.png" alt="" class="img-header logo" />
    </router-link>
    <div class="wrapper--list">
      <router-link
        :to="`/article/${post.id}`"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="wrapper--text">
          <span class="date"> {{ post.date }}</span>
          <h1>{{ post.title }}</h1>
          <img class="img--desc" :src="post.img" alt="" />
          <p>{{ post.header }}</p>
          <p>Lire la suite ...</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
//IMPORT LIBRARY
import gsap from 'gsap'

export default {
  name: "ArticleList",
  data() {
    return {
      posts: null,
    };
  },
  created() {
    fetch("https://my-json-server.typicode.com/melvinDebot/pokemon-go/article")
      .then((response) => response.json())
      .then((json) => {
        this.posts = json;
      });
  },
  mounted() {
    gsap.timeline().staggerFrom('.article--list *', 1, { y: '50px', opacity: 0 }, 0.2)
  }
};
</script>
<style lang="scss" scoped>
.article--list {
  .wrapper--list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 50px;
    max-width: 80vw;
    a {
      .wrapper--text {
        margin: 10px;
        max-width: 400px;
        height: 450px;

        span {
          margin-top: 10px;
          display: block;
          text-transform: uppercase;
          &.article {
            color: red;
            margin-left: 10px;
          }
          &.date {
            font-size: 13px;
          }
        }
        .img--desc {
          width: 100%;
        }
        p {
          text-transform: capitalize;
          font-weight: 400;
          margin: auto;
          margin-top: 10px;
          line-height: 18px;
          text-align: justify;
        }
      }
    }
  }
}
</style>
