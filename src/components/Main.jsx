import { useMovieContext } from "../context/MovieContext";
import Loader from "../components/Loader";
import VideoImg from "./VideoImg";
import MoviesContainer from "./MoviesContainer";
import Movies from "./Movies";
import PagesBtn from "./PagesBtn";

function Main() {
  const { movies, isLoading } = useMovieContext();

  return (
    <section className="min-h-[calc(100vh-208px)]  py-12 px-6 flex items-center justify-center">
      {movies.length < 1 && !isLoading && <VideoImg />}

      {isLoading && <Loader />}

      {movies.length > 1 && !isLoading && (
        <MoviesContainer>
          <PagesBtn />
          <Movies movies={movies} btnText={"watchlist"} type='plus' />
        </MoviesContainer>
      )}
    </section>
  );
}

export default Main;
