import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const cart = useSelector((state) => state.cart); // Get cart from Redux
  // const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0); // Calculate total quantity

  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer list-none">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li className="cursor-pointer">
              Cart <sup className="text-black-500 text-sm font-bold">{cart.length}</sup>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

