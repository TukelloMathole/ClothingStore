import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Importing a cart icon

interface NavbarProps {
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount }) => {
  // State for managing the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold hidden lg:block">
          <span className="text-white">MyShop</span>
        </Link>

        {/* Burger Icon for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col items-center space-y-1"
        >
          <div className={`w-6 h-1 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-1 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-1 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed top-0 left-0 h-full bg-blue-600 text-white z-50 transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:static lg:flex lg:space-x-8 lg:transform-none lg:transition-none lg:bg-transparent lg:h-auto lg:opacity-100 lg:overflow-visible`}
          style={{ width: '50%' }}
        >
          <li className="mt-16 lg:mt-0">
            <Link
              href="/"
              className="block py-2 lg:py-0 hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop-now"
              className="block py-2 lg:py-0 hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Shop Now
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 lg:py-0 hover:text-blue-200 transition duration-300 ease-in-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 lg:py-0 hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Cart Icon with Badge */}
        <div className="relative">
          <Link href="/cart" className="flex items-center">
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-block bg-red-600 text-white text-xs rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;