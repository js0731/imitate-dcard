<template>
  <header class="navbar">
    <ul class="menu">
      <h1 class="title">
        <a class="logo" href="#"> 李冠容 </a>
      </h1>
      <li class="item">
        <a class="link" href="">skills</a>
      </li>
      <li class="item">
        <a class="link" href="">profiles</a>
      </li>
      <li class="item">
        <a class="link" href="">about</a>
      </li>
      <li class="item">
        <a class="link" href="">contact</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "navbar",
  components: {},
};
</script>

<style  lang="scss" scoped>
@import "../assets/scss/all.scss";
.navbar {
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba($color: black, $alpha: 0.6);
  border-radius: 0 0 8px 8px;
  @include phone {
    bottom: 0;
    border-radius: 8px 8px 0 0;
  }
}
.menu {
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  padding: 10px 50px;
  @include phone {
    justify-content: space-around;
    padding: 10px;
  }
}

.title {
  flex-grow: 1;
  .logo {
    display: inline-block;
    font-weight: 600;
    font-size: $font-pc;
    color: #ffffff;
    padding: 4px;
    transition: 0.3s;
    &:hover {
      color: #0097e6;
    }
  }
  @include phone {
    display: none;
  }
}

.item {
  margin: 0 8px;
}
.link {
  display: block;
  font-weight: 600;
  font-size: $font-pc;
  color: #ffffff;
  padding: 4px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    color: #0097e6;
  }
  @include phone {
    font-size: $font-normal;
  }
  @include iPhone5 {
    font-size: $font-phone;
  }
}
</style>