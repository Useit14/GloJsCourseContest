/* eslint-disable indent */
import getCode from "./getCode";

const scroll = (event, data, keys) => {
  event.preventDefault();
  const currentRow = document.querySelector(".current");
  const containerHero = document.createElement("div");
  containerHero.classList.add("container");
  containerHero.classList.add("next");
  containerHero.style.opacity = 0;
  const bound = document.querySelector(".bound");

  const getNodes = (containerHero, code, keys) => {
    const nodes = {};
    containerHero.innerHTML = code;
    keys.forEach((key) => {
      if (document.querySelector(`.next .${key}`)) {
        nodes[key] = document.querySelector(`.next .${key}`);
      }
    });

    return nodes;
  };

  const setCodeToNodes = (nodes) => {
    debugger;
    if (data) {
      for (const key in nodes) {
        if (Object.hasOwnProperty.call(nodes, key)) {
          if (key === "realName") {
            nodes["name"].textContent += `(${data[key]})`;
            continue;
          }
          if (key === "movies") {
            nodes[key].textContent = "";
            if (data[key]) {
              data[key].forEach((element) => {
                nodes[key].textContent += `${element}; `;
              });
            }
            continue;
          }
          if (key === "photo") {
            nodes[key].src = data[key];
            continue;
          }
          nodes[key].textContent = data[key];
        }
      }
    } else {
      window.location.assign("/");
    }
  };

  bound.after(containerHero);
  getCode().then((code) => {
    const nodes = getNodes(containerHero, code, keys);
    setCodeToNodes(nodes);
    bound.classList.toggle("d-none");
    containerHero.style.opacity = 1;
    containerHero.scrollIntoView({ block: "start", behavior: "smooth" });
    setTimeout(() => {
      currentRow.remove();
      bound.classList.toggle("d-none");
      containerHero.after(bound);
      containerHero.classList.replace("next", "current");
    }, 1000);
  });
};

export default scroll;
