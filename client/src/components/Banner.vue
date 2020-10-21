<template>
  <section class="banner">
    <h2 class="title animate__animated animate__bounce">你好，我是李冠容</h2>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../assets/scss/all.scss";
.banner {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../assets/png/star.jpg");
  background-size: cover;
  background-position: bottom center;
  .title {
    max-width: 500px;
    font-size: 3rem;
    font-weight: 600;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #fff;
    color: #ffffff;
    margin: 0px auto;
    padding: 8px;
    @include phone {
      font-size: 2rem;
    }
  }
}
</style>