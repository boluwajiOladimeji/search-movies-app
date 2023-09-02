function Nav({ children }) {
  return (
    <nav className="bg-gradient-to-b from-slate-900/40 to-slate-900/60 to h-52 w-screen bg-no-repeat bg-cover bg-center relative flex justify-center items-center ">
      {children}
    </nav>
  );
}

export default Nav;
