import movieBg from "../assets/movie-bg.jpg";

function Nav({ children }) {
  return (
    <nav className="bg-gradient-to-b from-black to-black to h-52 w-screen bg-no-repeat bg-cover bg-center relative flex justify-center items-center ">
      <img
        src={movieBg}
        className="absolute w-full h-full object-cover"
        alt="background"
      ></img>
      {children}
    </nav>
  );
}

export default Nav;
