import { useState } from "react";
import Buttons from "./Buttons";
import Options from "./Options";
import { BreakPoints } from "./utils/BreakPoints";
import { heroImg } from "./utils/constants";

function HomeHeroSection() {
  const windowSize = BreakPoints();
  const smScreen = windowSize.width >= 0;
  const mdScreen = windowSize.width >= 768;
  const lgScreen = windowSize.width >= 1020;

  const [bgImg, setBgImg] = useState(0);

  return (
    <div className="flex w-full items-center justify-center mx-auto">
      <div className="relative">
        <img
          className="block md:hidden"
          src={heroImg[bgImg].mobileImage}
          alt=""
        />
        <img
          className="hidden md:block lg:hidden"
          src={heroImg[bgImg].tabletImage}
          alt=""
        />
        <img
          className="hidden lg:block"
          src={heroImg[bgImg].desktopImage}
          alt=""
        />

        <div className="absolute top-0 bottom-0 right-0 left-0 z-0 bg-gradient-to-b from-transparent to-gray-800"></div>
        <div className="absolute top-6 md:top-12 md:left-4 lg:top-20 lg:left-32 ">
          <div className="flex flex-col relative items-start z-10   space-y-12  py-24 pl-6 text-white md:space-y-20 md:pl-12 lg:py-12">
            <div className="flex-flex-col space-y-4">
              <h1 className="text-6xl font-bold max-w-xs md:text-7xl lg:text-[5rem] lg:max-w-md">
                {heroImg[bgImg].name}
              </h1>
              <p className="text-lg md:text-md max-w-xs lg:max-w-md lg:text-xl">
                {heroImg[bgImg].description}
              </p>
            </div>
            <div className="text-lg font-bold">
              <Buttons data="/portfolio">See out Portfolio</Buttons>
            </div>
          </div>
        </div>
        {!lgScreen ? "" : <Options setBgImg={setBgImg} />}
      </div>
    </div>
  );
}

export default HomeHeroSection;
