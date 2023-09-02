import { Search } from "react-feather";
import { useMovieContext } from "../context/MovieContext";

function MovieInput() {
  const { searchQuery, setSearchQuery, handleGetMovies } = useMovieContext();

  return (
    <form
      onSubmit={handleGetMovies}
      className="absolute bottom-0 flex w-11/12 mx-auto max-w-2xl  translate-y-1/2 rounded border"
    >
      <div className="w-9/12 bg-white  pl-4 flex items-center space-x-2 ">
        <Search size={20} className="text-gray-500" />
        <input
          type="text"
          className="outline-none flex-grow py-2"
          placeholder="Blade Runner"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="text-center w-3/12 border-l border-gray-100 bg-gray-100 text-gray-600"
      >
        Search
      </button>
    </form>
  );
}

export default MovieInput;
