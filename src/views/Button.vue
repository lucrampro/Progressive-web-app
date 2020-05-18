<template>
  <button> {{ text }} </button>
</template>
<script>
export default {
  name: 'buttons',
  props: {
    text : {
      default: 'my buttons'
    }
  }
}
</script>
<style lang="scss" scoped>
  button {
    width: 200px;
    height: 50px;
    background: linear-gradient(to right, #24ccaa, #a2db95);
    font-size: 13px;
    border-radius: 50px;
    text-transform: uppercase;
    color: #fefefe;
  }
</style>