import { getData } from "./fetch";

const getCode = async (nameClass = "current") => {
  let container;
  await getData("./index.html", "html").then((data) => (container = data));
  const cardHero = container
    .split('<div class="container current">')[1]
    .split('<div class="container bound d-none"></div>')[0];
  console.log(cardHero);
  return cardHero;
};

export default getCode;
