import { getData } from "./modules/fetch";
import scroll from "./modules/scroll";
import { accumulatorKeys } from "./modules/helpers";

const app = (indexData = 1) => {
  let data;
  let keys = [];

  getData("./dbHeroes.json").then((responseData) => {
    data = responseData;
    keys = Object.keys(data[0]);
  });

  const toNextHero = (event) => {
    keys = accumulatorKeys(keys, Object.keys(data[indexData]));
    scroll(event, data[indexData], keys);
    indexData++;
  };

  const addHanler = () => {
    const scrollLinks = document.querySelectorAll(".arrow span");

    scrollLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        toNextHero(event);
        setTimeout(() => {
          addHanler();
        }, 2000);
      });
    });
  };

  addHanler();
};

app();
