import noImg from "../assets/no-image.jpg";
import Movie from "./Movie";

function Movies({ movies, btnText, type }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 lg:gap-12">
      {movies.map((movie) => {
        let img = movie.Poster === "N/A" ? noImg : movie.Poster;
        return (
          <Movie
            key={movie.imdbID}
            img={img}
            movie={movie}
            type={type}
            btnText={btnText}
          />
        );
      })}
    </div>
  );
}

export default Movies;
