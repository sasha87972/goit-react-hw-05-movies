async function ApiService(fetchUrl) {
  try {
    let responce = await fetch(fetchUrl);
    return await responce.json();
  } catch (error) {
    console.log(error);
  }
}

function getTrend() {
  const fetchUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=e678f7c273568c761a3a9b6f228b8fa1&language=en-US&page=1`;
  return ApiService(fetchUrl);
}
function getById(id) {
  const fetchUrl = `https://api.themoviedb.org/3//movie/${id}?api_key=e678f7c273568c761a3a9b6f228b8fa1&language=en-US`;

  return ApiService(fetchUrl);
}
function searchMovies(query) {
  const fetchUrl = `https://api.themoviedb.org/3/search/movie?api_key=e678f7c273568c761a3a9b6f228b8fa1&query=${query}&language=en-US&page=1&include_adult=false`;

  return ApiService(fetchUrl);
}
function getMovieCredits(movieId) {
  const fetchUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e678f7c273568c761a3a9b6f228b8fa1&language=en-US`;

  return ApiService(fetchUrl);
}
function getMovieReviews(movieId) {
  const fetchUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=e678f7c273568c761a3a9b6f228b8fa1&language=en-US`;

  return ApiService(fetchUrl);
}

export { getTrend, getById, searchMovies, getMovieCredits, getMovieReviews };
