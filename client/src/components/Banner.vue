<template>
  <section class="banner">
    <h2 class="title animate__animated animate__backInUp">你好，我是李冠容</h2>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 100vh;
  background: url("../assets/jpg/coffee-communication-compose-composer.jpg")
    no-repeat;
  background-size: cover;
  background-position: center center; /* 圖像置中 */
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    margin: 0px auto;
    font-size: 3rem;
    max-width: 500px;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    padding: 8px;
    color: #ffffff;
  }
}
</style>