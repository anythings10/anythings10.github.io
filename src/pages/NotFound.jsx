import { Link } from "react-router-dom";
import { Typografi } from "../components/Components";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600">
        404 | NOT FOUND!
      </h1>

      <Typografi
        variant="h3"
        child="UPS 🥲 MAYBE IN ANOTHER UNIVERSE ☹️"
        className="font-bold mt-10"
      />
      <Link to="/" className="mt-4 text-xl text-blue-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
