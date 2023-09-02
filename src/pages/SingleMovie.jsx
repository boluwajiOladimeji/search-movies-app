import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import LoaderMovieSearch from "../components/LoaderMovieSearch";

export default function SingleMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, setIsLoading, handleAddWatchlist } = useMovieContext();

  const type = useRef("plus");

  const [selectedMovie, setSelectedMovie] = useState({});

  const getMovie = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=90e2854f&i=${id}&plot=full`,
      );
      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <div className="pb-8 bg-yellow-200/50 md:flex md:p-8 md:items-center md:justify-between min-h-screen md:gap-3">
      {isLoading && <LoaderMovieSearch />}
      {/* {selectedMovie && <h2>hello there {selectedMovie.Title}</h2>} */}

      <div className="md:w-3/6">
        {selectedMovie.Poster !== "N/A" && (
          <img
            className="w-full h-64 object-center"
            src={selectedMovie.Poster}
            alt=""
          />
        )}
      </div>

      <div className="p-4 md:w-3/6 flex flex-col gap-4">
        <h1 className="text-xl md:text-2xl font-bold ">
          {selectedMovie.Title} <span> ({selectedMovie.Rated})</span>
        </h1>
        <div className="flex justify-between text-sm">
          <p className="text-blue-500">{selectedMovie.Genre}</p>
          <p>{selectedMovie.Runtime}</p>
        </div>
        <div className="flex justify-between text-xs md:text-sm">
          <p>Released: {selectedMovie.Released}</p>
          <ul className="">
            {selectedMovie?.Ratings?.map((rating, i) => {
              return (
                <li key={i}>
                  {rating.Source}: <span>{rating.Value}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="italic">{selectedMovie.Plot}</p>
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-blue-500 font-bold hover:text-yellow-600 transition-all duration-200"
            onClick={() => handleAddWatchlist(selectedMovie, id, type.current)}
          >
            Add to watchlist
          </button>
          <button
            className="text-blue-500 font-bold hover:text-yellow-600 transition-all duration-200"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
