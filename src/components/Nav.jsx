import navBg from "../assets/THJJRUhNlec.png";

function Nav({ children }) {
  return (
    <nav className="bg-gradient-to-b from-slate-900/70 to-slate-900/90 to h-52 w-screen bg-no-repeat bg-cover bg-center relative flex justify-center items-center ">
      <img src={navBg} className="absolute w-full h-full object-cover"></img>
      {children}
    </nav>
  );
}

export default Nav;
