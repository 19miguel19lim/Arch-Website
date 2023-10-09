import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const featured = [
  {
    key: 1,
    name: "Project Del Sol",
    img: "/public/portfolio/mobile/image-del-sol.jpg",
  },
  {
    key: 2,
    name: "228B Tower",
    img: "/public/portfolio/mobile/image-228b.jpg",
  },
  {
    key: 3,
    name: "Le Prototype",
    img: "/public/portfolio/mobile/image-prototype.jpg",
  },
];

function HomeFeature() {
  return (
    <div className="container mx-auto max-w-lg">
      <div className="flex flex-col items-start jusitfy-center py-24 px-8 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Featured</h1>
        <div className="flex flex-col items-center justify-center mx-auto space-y-6">
          {featured.map((curr) => {
            return (
              <div className="relative" key={curr.key}>
                <div className="absolute top-0 bottom-0 right-0 left-0 z-0 bg-gradient-to-b from-transparent to-gray-800 "></div>

                <img src={curr.img} alt="" />
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
          className=" flex items-center justify-center space-x-4 px-10 py-6 bg-gray-800 w-full text-sm  text-white -mt-[20%]"
        >
          <p className="tracking-wider">See All</p>
          <BsArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
export default HomeFeature;
