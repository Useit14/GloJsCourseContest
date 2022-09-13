/* eslint-disable indent */
const filtersMovies = (data) => {
  const select = document.querySelector(".selectMovies");
  let filteredData = [];
  if (select && select.selectedIndex !== 0) {
    const filterKey = select.options[select.selectedIndex].value;
    filteredData = data.filter((value) => {
      if (value.movies) {
        return value.movies.includes(filterKey);
      }
      return false;
    });
  }

  return filteredData;
};

export default filtersMovies;
