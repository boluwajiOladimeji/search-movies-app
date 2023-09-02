import { PlusCircle } from "react-feather";
import { useMovieContext } from "../context/MovieContext";
import { MinusCircle } from "react-feather";

function Movie({ img, movie, btnText, type }) {
  const { handleAddWatchlist } = useMovieContext();

  return (
    <li className="h-42 flex gap-4">
      <img src={img} alt="" className="h-full w-32 object-cover" />
      <div className="flex flex-col items-start justify-center space-y-3 ">
        <button
          className="font-medium text-sm  flex items-center gap-1 capitalize"
          onClick={() => handleAddWatchlist(movie, movie.imdbID, type)}
        >
          {type === "plus" ? (
            <PlusCircle size={18} className="text-blue-500" />
          ) : (
            <MinusCircle size={18} className="text-blue-500" />
          )}
          {btnText}
        </button>
        <h2 className="text-sm font-extrabold italic ">
          <span className="text-blue-500 font-bold">Title</span> {movie.Title}
        </h2>
        <p className=" text-sm">
          {" "}
          <span className="text-blue-500 font-bold">Year</span> : {movie.Year}
        </p>
        <p className=" text-sm capitalize">
          <span className="text-blue-500 font-bold">Type</span> : {movie.Type}
        </p>
      </div>
    </li>
  );
}

export default Movie;
