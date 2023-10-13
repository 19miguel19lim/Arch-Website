import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { data } from "./utils/constants";

const newData = data.slice(0, 3);

function HomeFeature() {
  return (
    <div className="container mx-auto max-w-lg">
      <div className="flex flex-col items-start jusitfy-center py-24 px-8 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Featured</h1>
        <div className="flex flex-col items-center justify-center mx-auto space-y-6">
          {newData.map((curr) => {
            return (
              <div className="relative" key={curr.key}>
                <div className="absolute top-0 bottom-0 right-0 left-0 z-0 bg-gradient-to-b from-transparent to-gray-800 "></div>

                <img src={curr.mobileImage} alt="" className="" />
                <div className="absolute bottom-[10%] left-[10%] text-white">
                  <p className=" text-xl font-bold">{curr.name}</p>
                  <Link
                    to="/portfolio"
                    className="text-xs font-light text-gray-400"
                  >
                    View All Projects
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          to="/portfolio"
          className=" flex items-center justify-center space-x-4 w-full py-6 bg-gray-800  mx-auto  text-sm  text-white -mt-[20%]"
        >
          <p className="tracking-wider">See All</p>
          <BsArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
export default HomeFeature;
