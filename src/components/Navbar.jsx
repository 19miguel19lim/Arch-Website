import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  return (
    <div className="flex container  justify-between items-center max-w-7xl mx-auto h-24 py-4 px-4">
      {/* logo */}
      <div className="logl">
        <Link className="text-lg" to="/">
          <h1>Logo here</h1>
        </Link>
      </div>
      {/* navLinks */}
      <ul className="hidden md:flex justify-between items-center space-x-6">
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
      <div className="md:hidden">
        <AiOutlineMenu size={20} />
      </div>
    </div>
  );
}

export default Navbar;
