import { Link } from "react-router-dom";
import error from "../assets/404.gif";

const Error = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img src={error} alt="" />
          <Link
            to={"/"}
            className="px-8 py-3 font-semibold text-white hover:bg-[#bb8a40] transition-all duration-300 rounded bg-gradient-to-r from-[#835D23] to-[#B58130]"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
