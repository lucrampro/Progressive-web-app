<template>
  <div class="article--list">
    <img src="../assets/logo.png" alt="" class="logo">

    <router-link :to="`/article/${ post.id }`" v-for="post in posts" :key="post.id" >
      <div class="wrapper--text">
        <span class="article"> article </span>
        <span class="date"> 23 mai 2020</span>
        <h1>{{ post.title }}</h1>
        <img class="img--desc" src="../assets/test.png" alt="">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, eligendi dignissimos. Odio, obcaecati! Perferendis repellendus veniam nam ullam, eaque, quam neque rem debitis saepe, nisi consectetur. Laborum at voluptatum aspernatur.</p>
      </div>
    </router-link>
    </div>
</template>
<script>
export default {
  name: 'ArticleList',
  data() {
    return {
      posts: null,
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then((json) => {
        this.posts = json;
      });
  },
}
</script>
<style lang="scss" scoped>
.article--list {
  padding: 20px;
  @media(min-width:1000px){
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 15em
    }
  a {
    .wrapper--text {
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
      @media(min-width:1000px){
        font-size: 18px;
        }
      .img--desc{
        width: 90%;
        margin: auto;
        display: block;
      }
      p {
        text-transform: capitalize;
        font-weight: 400;
        width: 90%;
        margin: auto;
        margin-top: 10px;
      }
    }
  }
}
</style>