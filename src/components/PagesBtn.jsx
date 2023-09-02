import { useMovieContext } from "../context/MovieContext";

function PagesBtn() {
  const { currentPage, handlePrevPage, handleNextPage, numResults } =
    useMovieContext();
  let totalPages = Math.ceil(numResults / 10);

  return (
    <div>
      <h1 className="mb-4">
        Page {currentPage} of {totalPages}
      </h1>
      <div className="flex justify-between mb-8">
        <button
          className={`text-blue-600 uppercase font-bold text-xl ${
            currentPage === 1 ? "invisible" : "block"
          }`}
          onClick={handlePrevPage}
        >
          Prev
        </button>
        <button
          className={`text-blue-600 uppercase font-bold text-xl ${
            currentPage === totalPages ? "hidden" : "block"
          } `}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PagesBtn;
