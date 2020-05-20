<template>
  <div class="article--list">
    <img src="../assets/logo.png" alt="" class="logo" />

    <div class="wrapper--liste">
      <router-link
        :to="`/article/${post.id}`"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="wrapper--text">
          <span class="article"> article </span>
          <span class="date"> {{ post.date }}</span>
          <h1>{{ post.title }}</h1>
          <img class="img--desc" :src="post.img" alt="" />
          <p> {{ post.texte }} </p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
//IMPORT LIBRARY

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
  }
};
</script>
<style lang="scss" scoped>
.article--list {
  padding: 20px;
  .wrapper--liste {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    a {
      .wrapper--text {
        // height: 400px;
        margin: 10px;
        @media screen and (min-width: 769px){
          width: 400px;
          height: 1400px;
        }
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
        .img--desc{
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
