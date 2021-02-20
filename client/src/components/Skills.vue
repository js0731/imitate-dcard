<template>
  <section class="skills">
    <h2 class="title">Skills</h2>
    <button @click="switchDisplay()">清單 / 圖示</button>
    <ul class="iconMenu">
      <li class="iconItem">
        <Icon name="html" class="icon" :class="{ switchIcon: iconDisplay }" />
        <ul class="ilistMenu" :class="{ switchList: listDisplay }">
          <p class="listTitle">Html</p>
          <li class="listItem">✔ 語意化命名標籤</li>
        </ul>
      </li>
      <li class="iconItem">
        <Icon name="css" class="icon" :class="{ switchIcon: iconDisplay }">
        </Icon>
        <ul class="ilistMenu" :class="{ switchList: listDisplay }">
          <p class="listTitle">Css</p>
          <li class="listItem">✔ SCSS</li>
          <li class="listItem">✔ Flex box</li>
          <li class="listItem">✔ RWD 手刻 breakpoints</li>
        </ul>
      </li>
      <li class="iconItem">
        <Icon name="js" class="icon" :class="{ switchIcon: iconDisplay }">
        </Icon>
        <ul class="ilistMenu" :class="{ switchList: listDisplay }">
          <p class="listTitle">JavaScript</p>

          <li class="listItem">✔ 瞭解 DOM 模型、閉包、AJAX、ES6+ 等基本概念</li>
        </ul>
      </li>
      <li class="iconItem">
        <Icon name="git" class="icon" :class="{ switchIcon: iconDisplay }">
        </Icon>
        <ul class="ilistMenu" :class="{ switchList: listDisplay }">
          <p class="listTitle">Git</p>
          <li class="listItem">✔ Github 進行團隊協作</li>
          <li class="listItem">✔ GitPage 部署</li>
          <li class="listItem">✔ Heroku 部署</li>
        </ul>
      </li>
      <li class="iconItem">
        <Icon name="jquery" class="icon" :class="{ switchIcon: iconDisplay }">
        </Icon>
        <ul class="ilistMenu" :class="{ switchList: listDisplay }">
          <p class="listTitle">Jquery</p>
          <li class="listItem">✔ 操作 DOM 元素</li>
          <li class="listItem">✔ 基本動畫效果</li>
        </ul>
      </li>
      <li class="iconItem">
        <Icon name="mongodb" class="icon" :class="{ switchIcon: iconDisplay }">
        </Icon>
        <ul class="ilistMenu" :class="{ switchList: listDisplay }">
          <p class="listTitle">MongoDB</p>
          <li class="listItem">✔ CRUD 等基本操作</li>
          <li class="listItem">✔ Robo 3T</li>
        </ul>
      </li>
      <li class="iconItem">
        <Icon name="react" class="icon" :class="{ switchIcon: iconDisplay }">
        </Icon>
        <ul class="ilistMenu" :class="{ switchList: listDisplay }">
          <p class="listTitle">React</p>
          <li class="listItem">✔ react-router</li>
          <li class="listItem">✔ Hooks</li>
        </ul>
      </li>
      <li class="iconItem">
        <Icon name="vue" class="icon" :class="{ switchIcon: iconDisplay }">
        </Icon>
        <ul class="ilistMenu" :class="{ switchList: listDisplay }">
          <p class="listTitle">Vue</p>
          <li class="listItem">✔ data 雙向綁定</li>
          <li class="listItem">✔ 模板元件化</li>
          <li class="listItem">✔ Vuex</li>
          <li class="listItem">✔ vue-router</li>
        </ul>
      </li>
      <li class="iconItem">
        <Icon name="webpack" class="icon" :class="{ switchIcon: iconDisplay }">
        </Icon>
        <ul class="ilistMenu" :class="{ switchList: listDisplay }">
          <p class="listTitle">Webpack</p>
          <li class="listItem">✔ 轉換 ES6、CSS預處理、打包圖片檔案等</li>
        </ul>
      </li>
      <li class="iconItem">
        <Icon name="nodejs" class="icon" :class="{ switchIcon: iconDisplay }">
        </Icon>
        <ul class="ilistMenu" :class="{ switchList: listDisplay }">
          <p class="listTitle">NodeJs</p>
          <li class="listItem">✔ npm 工具使用</li>
          <li class="listItem">✔ Express.js 架設 Web 應用</li>
        </ul>
      </li>
      <li class="iconItem">
        <Icon name="postman" class="icon" :class="{ switchIcon: iconDisplay }">
        </Icon>
        <ul class="ilistMenu" :class="{ switchList: listDisplay }">
          <p class="listTitle">Postman</p>
          <li class="listItem">✔ API 測試</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
import Icon from "./Icon";

export default {
  data() {
    return {
      iconDisplay: false,
      listDisplay: false,
    };
  },
  methods: {
    switchDisplay: function () {
      this.iconDisplay = !this.iconDisplay;
      this.listDisplay = !this.listDisplay;
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #353b48;
  padding: 30px 0;
  .title {
    text-align: center;
    color: #ffffff;
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    background: #00a8ff;
    color: #ffffff;
    box-shadow: inset -2px -2px 1px black;
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
.iconMenu {
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .iconItem {
    width: 150px;
    height: 150px;
    position: relative;
    overflow: hidden;
    margin: 50px;
    &:hover .ilistMenu {
      bottom: 0;
    }
    .icon {
      position: absolute;
      transition: 0.3s;
      top: 0;
    }
    &:hover .icon {
      position: absolute;
      top: -100%;
    }
  }
}
.ilistMenu {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  bottom: -100%;
  text-align: center;
  transition: 0.3s;
  .listTitle {
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    color: #ffffff;
  }
  .listItem {
    color: #ffffff;
    font-size: 14px;
  }
}
.switchList {
  bottom: 0;
}
.switchIcon {
  top: -100% !important;
}
</style>