import { getData } from "./modules/fetch";
import scroll from "./modules/scroll";
import { accumulatorKeys } from "./modules/helpers";
import filtersMovies from "./modules/filtersMovies";
import initOptions from "./modules/initOptions";

const app = () => {
  let data;
  let keys = [];
  let indexData = 1;
  let filterIndex = 0;
  let idTimeout = 0;

  const toNextHero = (event, data) => {
    keys = accumulatorKeys(keys, Object.keys(data[indexData]));
    scroll(
      event,
      filtersMovies(data).length > 0
        ? filtersMovies(data)[filterIndex]
        : data[indexData],
      keys
    );
    filterIndex++;
    indexData++;
  };

  const addHanler = (data, filterKey) => {
    const scrollLinks = document.querySelectorAll(".arrow span");
    const select = document.querySelector(".selectMovies");

    select.addEventListener("change", (e) => {
      filterIndex = 0;
      indexData = 1;
      filterKey = e.target.options[e.target.selectedIndex].value;
    });

    scrollLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        toNextHero(event, data);
        clearTimeout(idTimeout);
        idTimeout = setTimeout(() => {
          initOptions(data, filterKey);
          addHanler(data, filterKey);
        }, 2000);
      });
    });
  };

  getData("./dbHeroes.json").then((responseData) => {
    data = responseData;
    initOptions(data);
    addHanler(data);
    keys = Object.keys(data[0]);
  });
};

app();
