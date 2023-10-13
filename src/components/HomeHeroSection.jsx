import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function HomeHeroSection() {
  return (
    <div className="container mx-auto max-w-lg">
      <div className="bg-home-hero-mobile bg-cover bg-no-repeat py-8 brightness-90 md:bg-home-hero-tablet">
        <div className="absolute top-0 bottom-0 right-0 left-0 z-0 bg-gradient-to-b from-transparent to-gray-800 "></div>
        <div className="flex flex-col relative items-start z-10  justify-center space-y-20  py-24 pl-6 text-white md:space-y-32 md:pl-12">
          <div className="flex-flex-col space-y-4">
            <h1 className="text-5xl font-extrabold max-w-xs md:text-6xl md:tracking-wider lg:max-w-7xl">
              Project Paramour
            </h1>
            <p className="text-sm md:text-md max-w-xs">
              Project made for an art museum near Southwest London. Project
              Paramour is a statement of bold, modern architecture.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="flex space-x-4  px-10 py-6 bg-gray-800 text-sm"
          >
            <p className="tracking-wider">See Our Portfolio</p>
            <BsArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeHeroSection;
