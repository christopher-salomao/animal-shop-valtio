import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useSnapshot } from "valtio";
import { cartState } from "../../cartStore";


import logo from "../../assets/logo.png";

function Header() {
  const snap = useSnapshot(cartState.cart);

  return (
    <header className="bg-lime-900 text-white px-4 border-amber-200 border-b-2 shadow-md">
      <div className="mx-auto w-full max-w-7xl flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/meu-carrinho" className="relative mr-10">
          <FaCartShopping size={28} />
          {snap.length > 0 && (
            <span className="absolute h-5 w-5 -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1 flex items-center justify-center">
              {snap.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
