const initOptions = (data, filterKey) => {
  const select = document.querySelector(".selectMovies");
  const options = [];
  data.forEach((hero) => {
    if (hero.movies) {
      hero.movies.forEach((movie) => {
        if (!options.includes(movie)) options.push(movie);
      });
    }
  });
  select.innerHTML = `<option>Выберите фильм</option>`;
  options.forEach((option) => {
    if (filterKey && filterKey === option) {
      select.innerHTML += `<option selected>${option}</option>`;
    } else {
      select.innerHTML += `<option>${option}</option>`;
    }
  });
};

export default initOptions;
