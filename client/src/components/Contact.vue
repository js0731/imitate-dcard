<template>
  <section class="contact">
    <p class="title">CONTACT</p>
    <div class="card">
      <img src="http://fakeimg.pl/200x200" alt="" />
      <p>您好，</p>
    </div>
  </section>
</template>

<script>
</script>
 
<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .title {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 12px;
  }
}
.card {
  width: 280px;
  border: 2px solid black;
}
</style>