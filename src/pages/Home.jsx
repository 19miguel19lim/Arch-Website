import HomeAboutSection from "../components/HomeAboutSection";
import HomeFeature from "../components/HomeFeatured";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeToAbout from "../components/HomeToAbout";

function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeToAbout />
      <HomeFeature />
    </>
  );
}

export default Home;
