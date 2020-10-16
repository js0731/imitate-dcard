<template>
  <header class="navbar">
    <h1 class="title">
      <a href="#">
        <img src="../assets/png/balloons-16.png" alt="" />
        李冠容
      </a>
    </h1>
    <button class="rwdBtn" @click="isOpen = !isOpen"></button>
    <ul class="menu" :class="{ setOpen: isOpen }">
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
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px 50px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: black;
  opacity: 0.8;
  z-index: 1000;
  @media (max-width: 767px) {
    padding: 10px 15px;
  }
}
.title {
  a {
    display: block;
    color: #ffffff;
    padding: 8px;
    transition: 0.15s;
    &:hover {
      color: #2bcbba;
    }
    img {
      vertical-align: text-bottom;
    }
  }
}
.rwdBtn {
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background: transparent;
  background-image: url("../assets/svg/rwdNavBtn.svg");
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 767px) {
    display: none;
  }
}
.menu {
  display: flex;
  transition: 0.3s;
  @media (max-width: 767px) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: red;
    flex-direction: column;
    max-height: 0px;
    overflow: hidden;
  }
  .item {
    .link {
      display: block;
      padding: 8px;
      color: #ffffff;
      transition: 0.15s;
      &:hover {
        cursor: pointer;
        color: #2bcbba;
      }
      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }
}
.setOpen {
  max-height: 176px;
}
</style>