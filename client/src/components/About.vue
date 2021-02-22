<template>
  <section class="about">
    <h2 class="title">About</h2>
    <p class="content">
      我是李冠容，21歲，來自五股，目前就讀淡江大學進修部三年級，雖然我目前只有打工經驗，但我肯勤奮學習，吩咐的事我會做到最好，希望能找到資訊業相關的職缺。
    </p>
  </section>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  padding: 30px 0;
  background: #3c6382;
  .title {
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .content {
    max-width: 500px;
    font-size: 1.2rem;
    margin: 0 auto;
    text-align: center;
    padding: 0 10px;
    color: #fff;
  }
}
</style>