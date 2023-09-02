// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Watchlist from "./pages/Watchlist";
// import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./pages/Error";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        theme="dark"
        bodyStyle={{ color: "yellow" }}
      />
      <MovieProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      </MovieProvider>
    </>
  );
}

export default App;
