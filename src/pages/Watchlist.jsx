import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import { PlusCircle } from "react-feather";
import Movies from "../components/Movies";
import MoviesContainer from "../components/MoviesContainer";

function Watchlist() {
  const { watchlist } = useMovieContext();
  return (
    <div className="overflow-hidden">
      <Nav>
        <div className="z-10 flex items-center justify-between w-11/12 mx-auto max-w-4xl ">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            My Watchlist
          </h1>
          <Link
            to="/"
            className="text-gray-200 hover:text-yellow-400 my-0 text-lg  font-bold"
          >
            Search Movie
          </Link>
        </div>
      </Nav>
      <section className="min-h-[calc(100vh-208px)]  py-12 px-6 flex">
        {watchlist.length < 1 && (
          <div className=" flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-gray-400 text-2xl text-center">
                Your watch list is looking a little empty
              </h3>
              <Link
                to="/"
                className="text-gray-800 text-xl gap-2 flex items-center hover:text-blue-500 transition-all duration-200"
              >
                <PlusCircle size={19} /> Lets add some movies
              </Link>
            </div>
          </div>
        )}
        {watchlist.length >= 1 && (
          <MoviesContainer>
            <Movies movies={watchlist} btnText={"remove"} type="minus" />
          </MoviesContainer>
        )}
      </section>
    </div>
  );
}

export default Watchlist;
