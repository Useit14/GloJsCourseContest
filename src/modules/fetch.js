export const getData = async (url, mode = "json") => {
  if (mode === "json") {
    return await fetch(url)
      .then((response) => response.json())
      .catch((e) => console.log(e));
  } else {
    return await fetch(url)
      .then((response) => response.text())
      .catch((e) => console.log(e));
  }
};
