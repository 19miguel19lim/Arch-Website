import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="flex container justify-between items-center max-w-7xl mx-auto h-24 py-4 px-4 overflow-hidden md:justify-around ">
      {/* logo */}
      <div className="logl">
        <Link className="text-lg" to="/">
          <img src="/public/logo.svg" alt="" />
        </Link>
      </div>
      {/* navLinks */}
      <ul className="hidden md:flex justify-between items-center space-x-6 ">
        <li className="nav-item">
          <Link className="nav-link font-semibold text-lg" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link font-semibold text-lg" to="/about">
            About us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link font-semibold text-lg" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className="block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-24 right-0 py-4 z-50 pl-8 bg-white w-[80%]  ease-in-out duration-500"
            : "right-[-100%] fixed"
        }
      >
        <ul className="flex flex-col items-start justify-center text-left space-y-3 ">
          <li className="nav-item">
            <Link className="nav-link font-bold text-xl" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link font-bold text-xl" to="/about">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link font-bold text-xl" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
