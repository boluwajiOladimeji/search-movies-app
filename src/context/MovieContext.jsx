import { createContext, useContext, useRef, useState } from "react";
import { toast } from "react-toastify";

const MovieContext = createContext();

// const API_KEY = "90e2854f";

const URL = `https://omdbapi.com/?apikey=173c63ec`;

// const testUrl = `https://www.omdbapi.com/?apikey=90e2854f&i=${id}&plot=full`

const MovieProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState(
    () => JSON.parse(localStorage.getItem("watchlist")) || [],
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [numResults, setNumResults] = useState(null);

  let currSearch = useRef("");
  let activePage = useRef(1);

  const handleGetMovies = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    let newPage = 1;
    // prevents use from fetching if its still the same query
    if (currSearch.current === searchQuery && activePage.current === newPage)
      return;
    // allows to fetch
    setCurrentPage(newPage);
    getMovies(searchQuery, newPage);
    currSearch.current = searchQuery;
    activePage.current = currentPage;
  };

  const handleNextPage = () => {
    let nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    getMovies(searchQuery, nextPage);
  };

  const handlePrevPage = () => {
    let prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    getMovies(searchQuery, prevPage);
  };

  const handleAddWatchlist = (movie, id, type) => {
    const isIn = watchlist.some((movie) => movie.imdbID === id);

    if (isIn && type === "plus") {
      toast.error(`${movie.Title} already in List`);
      return;
    }

    let newList =
      type === "plus"
        ? [...watchlist, movie]
        : watchlist.filter((movie) => movie.imdbID !== id);
    setWatchlist(newList);
    toast(
      `${movie.Title} ${
        type === "plus" ? "added to" : "removed from"
      }  watchlist`,
    );
    localStorage.setItem("watchlist", JSON.stringify(newList));
  };

  const getMovies = async (search, page) => {
    try {
      setIsLoading(true);

      const response = await fetch(`${URL}&s=${search.trim()}&page=${page}`);

      if (!response.ok) throw new Error("Please try again");

      const data = await response.json();
      if (data.Response === "False") {
        throw new Error("Movie not Found");
      }
      setMovies(data.Search);
      setNumResults(data.totalResults);
    } catch (error) {
      toast(error.message);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        watchlist,
        searchQuery,
        handleGetMovies,
        setSearchQuery,
        isLoading,
        setIsLoading,
        currentPage,
        numResults,
        handleNextPage,
        handlePrevPage,
        handleAddWatchlist,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

const useMovieContext = () => useContext(MovieContext);

export { MovieProvider, useMovieContext };
