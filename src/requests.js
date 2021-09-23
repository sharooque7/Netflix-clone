const API_KEY = process.env.REACT_APP_BASE_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_network=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_network=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_network=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_network=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_network=99`,
};

export default requests;
