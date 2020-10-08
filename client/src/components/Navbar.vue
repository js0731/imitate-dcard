<template>
  <header class="navbar">
    <h1 class="title">
      <a href="#">
        <img src="../assests/png/balloons-16.png" alt="" />
        李冠容
      </a>
    </h1>
    <button class="rwdBtn" @click="isOpen = !isOpen"></button>
    <ul class="menu">
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
    <ul class="rwdMenu" :class="{'setOpen' : isOpen}">
      <li class="rwdItem">
        <a class="rwdLink" href="">skills</a>
      </li>
      <li class="rwdItem">
        <a class="rwdLink" href="">profiles</a>
      </li>
      <li class="rwdItem">
        <a class="rwdLink" href="">about</a>
      </li>
      <li class="rwdItem">
        <a class="rwdLink" href="">contact</a>
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
  margin: 0 auto;
  padding: 10px 50px;
  position: fixed;
  left: 0;
  right: 0;
  background: #24292E;
  @media (max-width: 767px) {
      padding: 10px 15px;
  }
}
.title {
  a {
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
  background-image: url("../assests/svg/rwdNavBtn.svg");
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
  @media (max-width: 767px) {
    display: none;
  }
  .item {
    .link {
      padding: 8px;
      color: #ffffff;
      transition: 0.15s;
      &:hover {
        cursor: pointer;
        color: #2bcbba;
      }
    }
  }
}
.rwdMenu {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  background: #24292E;
  max-height: 0px;
  transition: 0.4s;
  @media (min-width: 767px) {
    display: none;
  }
  .rwdItem {
    .rwdLink {
      display: block;
      padding: 10px;
      color: #ffffff;
      &:active {
        background: violet;
      }
    }
  }
}
.setOpen{
  max-height: 176px;
}
</style>