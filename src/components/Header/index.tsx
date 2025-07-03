import { FaCartShopping } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-lime-900 text-white px-4 border-amber-200 border-b-2 shadow-md">
      <div className="mx-auto w-full max-w-7xl flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/meu-carrinho" className="relative mr-10">
          <FaCartShopping size={28} />
          <span className="absolute h-6 w-6 -top-3 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-1 flex items-center justify-center">
            1
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
