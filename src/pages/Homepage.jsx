import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Main from "../components/Main";
import MovieInput from "../components/MovieInput";

function Homepage() {
  return (
    <div className="overflow-hidden">
      <Nav>
        <div className="z-10 flex items-center justify-between w-11/12 mx-auto max-w-5xl ">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Find your Movie
          </h1>
          <Link
            to="watchlist"
            className="text-yellow-400 font-bold hover:text-yellow-200 my-0 text-lg"
          >
            My Watchlist
          </Link>
        </div>
        <MovieInput />
      </Nav>
      <Main />
    </div>
  );
}

export default Homepage;
