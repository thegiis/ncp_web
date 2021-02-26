<template>
  <div class="container">
      <h2>This is an about page</h2>
  </div>
</template>

<script>
export default {
  head () {
    return{
      title: "About"
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
