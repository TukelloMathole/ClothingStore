import { useState, useContext, useEffect } from 'react';
import LoginModal from '../components/LogInRegister';
import Link from 'next/link';
import { AuthContext } from '@/context/AuthContext';
import { useCart } from '@/hooks/useCart'; // ✅ NEW import
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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { getItemCount } = useCart(); // ✅ Access item count from cart

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const toggleForm = () => setIsRegister(!isRegister);

  useEffect(() => {
    const handleFocus = () => {
      const token = localStorage.getItem('token');
      // optional token checks
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  return (
    <>
      <header className="backdrop-blur-md bg-white/70 shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
            <span className="text-indigo-500">Style</span>Rack
          </Link>

          {/* Mobile menu button */}
          <button className="lg:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Navigation */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:flex gap-x-6 items-center lg:block overflow-x-auto`}>
            <Link href="/" className="text-xs text-gray-700 hover:text-indigo-500 font-medium mt-2">Home</Link>
            <Link href="/fashion" className="text-xs text-gray-700 hover:text-indigo-500 font-medium mt-2">Fashion</Link>
            <Link href="/wishlist" className="flex items-center gap-1 text-xs text-gray-700 hover:text-indigo-500 font-medium mt-2">
              <Heart className="w-4 h-4" /> Wishlist
            </Link>
            <Link href="/orders" className="relative flex items-center gap-1 text-xs text-gray-700 hover:text-indigo-500 font-medium mt-2">
              <PackageSearch className="w-4 h-4" /> Orders
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs font-bold animate-bounce absolute -top-1 -right-1">
                4
              </span>
            </Link>
            <Link href="/track-order" className="relative flex items-center gap-1 text-xs text-gray-700 hover:text-indigo-500 font-medium mt-2">
              <PackageSearch className="w-4 h-4" /> Track Order
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs font-bold animate-bounce absolute -top-1 -right-1">
                3
              </span>
            </Link>
            <Link href="/payment-options" className="flex items-center gap-1 text-xs text-gray-700 hover:text-indigo-500 font-medium mt-2">
              <CreditCard className="w-4 h-4" /> Payments
            </Link>
            <Link href="/notifications" className="relative flex items-center gap-1 text-xs text-gray-700 hover:text-indigo-500 font-medium mt-2">
              <Bell className="w-4 h-4" /> Notifications
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs font-bold animate-bounce absolute -top-1 -right-1">
                8
              </span>
            </Link>
            <Link href="/help" className="flex items-center gap-1 text-xs text-gray-700 hover:text-indigo-500 font-medium mt-2">
              <HelpCircle className="w-4 h-4" /> Help
            </Link>
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative flex items-center gap-2 text-xs text-gray-700 hover:text-indigo-500 font-medium">
              <ShoppingCart className="w-4 h-4" />
              Cart
              {getItemCount() > 0 && (
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs font-bold absolute -top-1 -right-2 animate-bounce">
                  {getItemCount()}
                </span>
              )}
            </Link>

            {isLoggedIn ? (
              <>
                <Link href="/profile" className="relative flex items-center gap-1 bg-indigo-500 text-white px-3 py-1.5 rounded-full shadow-md hover:opacity-90 text-xs">
                  <User className="w-3 h-3" /> Profile
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-yellow-500 text-white text-xs font-bold absolute -top-1 -right-1 animate-ping">
                    !
                  </span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center gap-1 bg-red-500 text-white px-3 py-1.5 rounded-full shadow-md hover:opacity-90 text-xs"
                >
                  <User className="w-3 h-3" /> Logout
                </button>
              </>
            ) : (
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openLoginModal();
                }}
                className="flex items-center gap-1 bg-indigo-500 text-white px-3 py-1.5 rounded-full shadow-md hover:opacity-90 text-xs"
              >
                <User className="w-3 h-3" /> Login
              </Link>
            )}
          </div>
        </div>
      </header>

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
