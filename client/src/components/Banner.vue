<template>
  <section class="banner">
    <div class="container">
      <img
        src="https://img.ltn.com.tw/Upload/playing/page/2019/09/11/190911-21005-01-bIL1w.jpg"
        alt=""
      />
      <div class="content">
        <h2 class="content-title">您好，我是李冠容</h2>
        <p class="content-paragraph">
          您好，我是李冠容您好，我是李冠容您好，我是李冠容您好，我是李冠容您好，我是李冠容您好，我是李冠容您好，我是李冠容您好，我是李冠容
        </p>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.banner {
  background-size: cover;
  width: 100%;
  height: 100vh;
  background: url("../assets/jpg/coffee-communication-compose-composer.jpg")
    no-repeat;
  background-size: cover;
  background-position: center center; /* 圖像置中 */
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  display: flex;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 20px;
    border: 10px solid #ffffff;
    padding: 0;
  }
  .content {
    max-width: 330px;
    color: #ffffff;
    .content-title {
      font-size: 2.5rem;
    }
    .content-paragraph {
      font-size: 1.2rem;
    }
  }
}
</style>