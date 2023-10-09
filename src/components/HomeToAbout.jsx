import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function HomeToAbout() {
  return (
    <div className="container mx-auto max-w-lg">
      <div className="bg-small-team-mobile bg-cover bg-no-repeat brightness-90">
        <div className="absolute top-0 bottom-0 right-0 left-0 z-0 bg-gradient-to-b from-transparent to-gray-800 "></div>
        <div className="flex flex-col relative items-start z-10  justify-center space-y-6  py-24 px-4 text-white">
          <h1 className="text-5xl font-bold md:text-5xl md:tracking-wider lg:max-w-7xl">
            Project Paramour
          </h1>
          <p>
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
          <Link
            to="/about"
            className="flex space-x-4 px-10 py-6 bg-gray-800 text-sm"
          >
            <p className="tracking-wider">About Us</p>
            <BsArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeToAbout;
