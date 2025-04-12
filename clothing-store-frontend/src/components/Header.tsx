import { useState } from 'react';
import LoginModal from '../components/LogInRegister';
import Link from 'next/link';
import {
  ShoppingCart,
  Heart,
  HelpCircle,
  CreditCard,
  Bell,
  User,
  PackageSearch,
  Menu,
  X,
} from 'lucide-react';

const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const toggleForm = () => setIsRegister(!isRegister);

  return (
    <>
      <header className="backdrop-blur-md bg-white/70 shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
        <span className="text-indigo-500">Style</span>Rack
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation */}
        <nav
        className={`${menuOpen ? 'block' : 'hidden'
          } lg:flex gap-x-4 items-center lg:block overflow-x-auto`}
        >
        <Link
          href="/"
          className="text-xs sm:text-xs md:text-xs lg:text-xs text-gray-700 hover:text-indigo-500 font-medium"
        >
          Home
        </Link>
        <Link
          href="/fashion"
          className="text-xs sm:text-xs md:text-xs lg:text-xs text-gray-700 hover:text-indigo-500 font-medium"
        >
          Fashion
        </Link>
        <Link
          href="/wishlist"
          className="flex items-center gap-1 text-xs sm:text-xs md:text-xs lg:text-xs text-gray-700 hover:text-indigo-500 font-medium"
        >
          <Heart className="w-4 h-4" />
          Wishlist
        </Link>
        <Link
          href="/orders"
          className="text-xs sm:text-xs md:text-xs lg:text-xs text-gray-700 hover:text-indigo-500 font-medium"
        >
          Orders
        </Link>
        <Link
          href="/track-order"
          className="flex items-center gap-1 text-xs sm:text-xs md:text-xs lg:text-xs text-gray-700 hover:text-indigo-500 font-medium"
        >
          <PackageSearch className="w-4 h-4" />
          Track Order
        </Link>
        <Link
          href="/payment-options"
          className="flex items-center gap-1 text-xs sm:text-xs md:text-xs lg:text-xs text-gray-700 hover:text-indigo-500 font-medium"
        >
          <CreditCard className="w-4 h-4" />
          Payments
        </Link>
        <Link
          href="/notifications"
          className="flex items-center gap-1 text-xs sm:text-xs md:text-xs lg:text-xs text-gray-700 hover:text-indigo-500 font-medium"
        >
          <Bell className="w-4 h-4" />
          Notifications
        </Link>
        <Link
          href="/help"
          className="flex items-center gap-1 text-xs sm:text-xs md:text-xs lg:text-xs text-gray-700 hover:text-indigo-500 font-medium"
        >
          <HelpCircle className="w-4 h-4" />
          Help
        </Link>
        </nav>

        {/* Right-side */}
        <div className="flex items-center gap-4">
        <Link href="/cart" className="flex items-center gap-2 text-xs text-gray-700 hover:text-indigo-500 font-medium">
          <ShoppingCart className="w-4 h-4" /> Cart
        </Link>
        {isLoggedIn ? (
          <>
          <Link href="/profile" className="flex items-center gap-1 bg-indigo-500 text-white px-3 py-1.5 rounded-full shadow hover:opacity-90 text-xs">
            <User className="w-3 h-3" /> Profile
          </Link>
          <Link href="/logout" className="flex items-center gap-1 bg-red-500 text-white px-3 py-1.5 rounded-full shadow hover:opacity-90 text-xs">
            <User className="w-3 h-3" /> Logout
          </Link>
          </>
        ) : (
          <Link
          href="#"
          onClick={openLoginModal}
          className="flex items-center gap-1 bg-indigo-500 text-white px-3 py-1.5 rounded-full shadow hover:opacity-90 text-xs"
          >
          <User className="w-3 h-3" /> Login
          </Link>
        )}
        </div>
      </div>
      </header>

      {/* ABSOLUTE Login Modal (outside header) */}
      <LoginModal
      isOpen={isLoginModalOpen}
      closeModal={closeLoginModal}
      isRegister={isRegister}
      toggleForm={toggleForm}
      />
    </>
  );
};

export default Header;
