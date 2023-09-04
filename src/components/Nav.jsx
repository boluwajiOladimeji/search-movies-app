import movieBg from "../assets/movie-bg.jpg";

function Nav({ children }) {
  return (
    <nav className=" bg-gradient-to-b from-slate-800 to-slate-800  h-52 w-screen bg-no-repeat bg-cover bg-center relative flex justify-center items-center z-50 ">
      <img
        src={movieBg}
        className="absolute w-full h-full object-cover "
        alt="background"
      ></img>
      {children}
    </nav>
  );
}

export default Nav;
