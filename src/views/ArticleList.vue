<template>
  <div class="artile--list">
    <h1>Liste des articles</h1>
    <div class="content">
      <div v-for="post in posts" :key="post.id" class="card">
        <router-link :to="`/article/${ post.id }`" > {{ post.title }}</router-link>
      </div>
    </div>
    
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
<style lang="scss">
.card {
  margin-top: 20px;
}
</style>