<template>
  <section class="contact">
    <p class="title">CONTACT</p>
    <div class="card">
      <div class="banner">
        <img class="avatar" src="http://fakeimg.pl/150x150" alt="" />
      </div>
      <h3 class="name">李冠容</h3>
      <a href="mailto:a0905050792@gmail.com">
        <Icon name="mail" fill="#FFF" class="icon" />
        a0905050792@gmail.com
      </a>
      <a href="tel:+886-905050792">
        <Icon name="phone" fill="#FFF" class="icon" />
        0905050792
      </a>
      <ul class="footer">
        <li>
          <a href="https://github.com/js0731?tab=repositories" target="_blank">
            <Icon name="github"
          /></a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100003690614819" target="_blank">
            <Icon name="fb"
          /></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "contact",
  components: {},
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    Icon,
  },
};
</script>
 
<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 0 52px 0;
  background: #487eb0;
  .title {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #ffffff;
  }
}
.icon {
  width: 18px;
  height: 18px;
}
.card {
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  .banner {
    width: 100%;
    height: 150px;
    background: #718093;
    position: relative;
    margin-bottom: 60px;
    .avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  h3 {
    font-size: 1.8rem;
    font-weight:bold;
    text-align: center;
    margin-bottom: 10px;
    color:#fff;
  }
  a {
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: 1.2rem;
    margin-bottom: 20px;
    color:#fff;
    .icon{
      margin:0 5px;
    }
  }
  .footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  background: #718093;
    li {
      width: 36px;
      height: 36px;
      margin: 10px;
      transition: 0.5s;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
}
</style>