const API_KEY = "a0fb2540320bbad33e57f0dcad23c07d";

const requests = {
  fetchTrending: `/trending/all/weekl?api_key=${API_KEY}&language=en=US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en=US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_generes=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_generes=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_generes=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_generes=10749`,
  fetchDecumentaries: `discover/movie?api_key=${API_KEY}&with_generes=99`,
};

export default requests;
