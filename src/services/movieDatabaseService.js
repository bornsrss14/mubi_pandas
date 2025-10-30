const API_KEY = "2cb7932316152b903dede7400635a17c";
const BASE_URL = "https://api.themoviedb.org/3";

class MovieService {
  // Search Movie by Title
  async searchMovies(query) {
    if (!query || query.length < 2) return [];
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}&language=es-MX`
      );

      if (!response.ok) throw new Error("Something went wrong :(");
      console.log(response, "Esto es f estructura de una promesa resuelta");
      const data = await response.json();

      /* console.log(data, "TODO LOS DATOS"); */
      return data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        year: movie.release_date?.split("-")[0] || "N/A",
        director: null, //aquí voy hacer otra petición para obtener director segun película
        poster: movie.poster_path
          ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
          : null,
        originalTitle: movie.original_title,
        voteAverage: movie.vote_average,
      }));
    } catch (error) {
      console.error("Error en la consulta", error);
      return [];
    }
  }

  //Get Popular Movies
  async getPopularMovies(page = 1) {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=es-MX`
      );

      if (!response.ok) throw new Error("Error fetching popular movies");
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error", error);
    }
  }

  //Get object movie details( including director)

  async getMovieDetails(movieId) {
    try {
      const [details, credits] = await Promise.all([
        fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=es-MX`),
        fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`),
      ]);

      const detailsData = await details.json();
      const creditsData = await credits.json();
      console.log("Aquí viene el director en los créditos:", creditsData);
      const director = creditsData.crew.find(
        (person) => person.job === "Director"
      );
      return {
        ...detailsData,
        director: director?.name || "Desconocido",
      };
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
}

export default new MovieService();
