<template>
  <section class="portfolios">
    <h2 class="title">Portfolios</h2>
    <ul class="menu">
      <li class="list" v-for="(item, index) in works" :key="index">
        <p class="worktitle">{{ works[index].name }}</p>
        <a
          class="link"
          :href="works[index].link"
          :style="{ backgroundImage: `url(${works[index].imgPath})` }"
        >
          <p class="text">預覽</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          name: "計算機",
          link: "https://js0731.github.io/portfolio/Calculator/caculator.html",
          imgPath: require("../assets/png/calculator.png"),
        },
        {
          name: "時鐘",
          link: "https://js0731.github.io/portfolio/RGBCOLOR/ColorGame.html",
          imgPath: require("../assets/png/clock.png"),
        },
        {
          name: "ColorGame",
          link:
            "https://js0731.github.io/portfolio/Tic-tac-toe/tic_tac_toe.html",
          imgPath: require("../assets/png/colorGame.png"),
        },
        {
          name: "Tic-Tac-Toe",
          link: "https://js0731.github.io/portfolio/clock/clock.html",
          imgPath: require("../assets/png/tictactoe.png"),
        },
        {
          name: "Todolist",
          link: "https://js0731.github.io/portfolio/todolist/caculator.html",
          imgPath: require("../assets/png/todolist.png"),
        },
        {
          name: "計算機",
          link: "https://js0731.github.io/portfolio/Calculator/caculator.html",
          imgPath: require("../assets/png/calculator.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolios {
  background: #d2dae2;
  padding: 30px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    text-align: center;
    color: #ffffff;
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 20px;
  }
}
.menu {
  max-width: 1050px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .list {
    position: relative;
    margin: 20px 25px;

    .worktitle {
      text-align: center;
      font-size: 18px;
      color: #ffffff;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .link {
      display: block;
      width: 250px;
      height: 150px;
      background-size: cover;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 18px;
      color: #ffffff;
      font-weight: 600;

      &:hover .text {
        opacity: 1;
      }
      .text {
        transition: 0.5s;
        width: 250px;
        height: 150px;
        line-height: 150px;
        text-align: center;
        opacity: 0;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>