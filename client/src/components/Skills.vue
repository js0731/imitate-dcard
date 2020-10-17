<template>
  <section class="skills">
    <h2>Skills</h2>
    <button @click="a()">清單 / 圖示</button>
    <ul class="skillMenu">
      <li class="skillItem">
        <Icon name="html" class="icon"> </Icon>
        <ul class="hiddenMenu">
          <p class="hiddenText">Html</p>
          <li class="hiddenItem">✔ 語意化命名標籤</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
        </ul>
      </li>
      <li class="skillItem">
        <Icon name="css" class="icon"> </Icon>
        <ul class="hiddenMenu">
          <p class="hiddenText">Css</p>
          <li class="hiddenItem">✔ 語意化命名標籤</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
        </ul>
      </li>
      <li class="skillItem">
        <Icon name="js" class="icon"> </Icon>
        <ul class="hiddenMenu">
          <p class="hiddenText">JavaScript</p>
          <li class="hiddenItem">✔ 語意化命名標籤</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
        </ul>
      </li>
      <li class="skillItem">
        <Icon name="git" class="icon"> </Icon>
        <ul class="hiddenMenu">
          <p class="hiddenText">Git</p>
          <li class="hiddenItem">✔ 語意化命名標籤</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
        </ul>
      </li>
      <li class="skillItem">
        <Icon name="jquery" class="icon"> </Icon>
        <ul class="hiddenMenu">
          <p class="hiddenText">Jquery</p>
          <li class="hiddenItem">✔ 語意化命名標籤</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
        </ul>
      </li>
      <li class="skillItem">
        <Icon name="mongodb" class="icon"> </Icon>
        <ul class="hiddenMenu">
          <p class="hiddenText">MongoDB</p>
          <li class="hiddenItem">✔ 語意化命名標籤</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
        </ul>
      </li>
      <li class="skillItem">
        <Icon name="react" class="icon"> </Icon>
        <ul class="hiddenMenu">
          <p class="hiddenText">React</p>
          <li class="hiddenItem">✔ 語意化命名標籤</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
        </ul>
      </li>
      <li class="skillItem">
        <Icon name="vue" class="icon"> </Icon>
        <ul class="hiddenMenu">
          <p class="hiddenText">Vue</p>
          <li class="hiddenItem">✔ 語意化命名標籤</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
        </ul>
      </li>
      <li class="skillItem">
        <Icon name="webpack" class="icon"> </Icon>
        <ul class="hiddenMenu">
          <p class="hiddenText">Webpack</p>
          <li class="hiddenItem">✔ 語意化命名標籤</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
        </ul>
      </li>
      <li class="skillItem">
        <Icon name="nodejs" class="icon"> </Icon>
        <ul class="hiddenMenu">
          <p class="hiddenText">NodeJs</p>
          <li class="hiddenItem">✔ 語意化命名標籤</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
        </ul>
      </li>
      <li class="skillItem">
        <Icon name="postman" class="icon"> </Icon>
        <ul class="hiddenMenu">
          <p class="hiddenText">Postman</p>
          <li class="hiddenItem">✔ 語意化命名標籤</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
          <li class="hiddenItem">✔ seo搜尋優化</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
import Icon from "./Icon";

export default {
  data() {
    return {};
  },
  methods: {
    a: function () {
      console.log("a");
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.skills {
  width: 100%;
  background-attachment: fixed; /* 固定圖像 */
  background-position: center center; /* 圖像置中 */
  background-size: cover;
  background: #353b48;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-top: 30px;
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    color: #ffffff;
  }
  button {
    background: #ffffff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    background: #00a8ff;
    box-shadow: inset -2px -2px 1px black;
    color: #ffffff;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
    &:active {
      box-shadow: inset 1px 2px 2px #050533;
    }
  }
}
.skillMenu {
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;

  .skillItem {
    width: 150px;
    height: 150px;
    margin: 50px;
    position: relative;
    overflow: hidden;
    &:hover .hiddenMenu {
      bottom: 0;
    }
    &:hover .icon {
      display: none;
    }
  }
}
.hiddenMenu {
  width: 150px;
  height: 150px;
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: -100%;
  transition: 0.5s;
  .hiddenText {
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    color: #ffffff;
  }
  .hiddenItem {
    color: #ffffff;
    font-size: 14px;
  }
}
</style>