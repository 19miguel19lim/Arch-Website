function HomeAboutSection() {
  return (
    <div className="container my-26 mx-auto max-w-lg">
      <div className="flex flex-col items-start justify-center  my-24 px-6 space-y-12 text-left ">
        <div className="w-24 border-b-2 mb-16 border-veryDarkBlue"></div>
        <h1 className="text-5xl font-extrabold max-w-[60%]">
          Welcome to Arch Studio
        </h1>
        <div className="flex flex-col items-start justify-center space-y-6 text-sm font-light md:text-md">
          <p>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p>
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
