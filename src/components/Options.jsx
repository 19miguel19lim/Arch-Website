function Options({ setBgImg }) {
  const opt = [1, 2, 3, 4];

  function handleClick(e) {
    const value = e.currentTarget.getAttribute("data-value");

    setBgImg(value);
  }

  return (
    <div className="absolute bottom-0 left-0 z-10">
      <div className="flex items-center ">
        {opt.map((curr, i) => (
          <div
            onClick={handleClick}
            key={i}
            data-value={i}
            className="px-8 py-8 bg-white group  hover:bg-black duration-300"
          >
            <h1 className="text-lg font-bold text-mediumGrey group-hover:text-white duration-300">
              0{curr}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Options;
