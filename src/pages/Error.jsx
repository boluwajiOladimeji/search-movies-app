import { Link } from "react-router-dom";
import notfound from "../assets/notfound.svg";
function Error() {
  return (
    <div className="min-h-screen bg-yellow-200/50 p-8 flex flex-col space-y-4 justify-center">
      <img src={notfound} className="w-full max-w-2xl mx-auto" alt="" />
      <Link
        className="text-blue-500 text-2xl text-center mt-8 hover:text-yellow-400 transition-all duration-150"
        to="/"
      >
        Back Home
      </Link>
    </div>
  );
}

export default Error;
