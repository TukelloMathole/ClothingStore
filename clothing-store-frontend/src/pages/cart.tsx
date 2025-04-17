// pages/cart.tsx

import { useCart } from '@/hooks/useCart'; // Import useCart to access the cart context
import { Product } from '@/types/product'; // Import Product type for type safety
import Link from 'next/link';
import MainLayout from '@/layout/mainLayout'; // Adjust the path based on your project structure

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart(); // Get cart items and remove function from context

    // Calculate the total price of all items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

    return (
        <MainLayout>

<section className="px-4 py-12 sm:px-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">🛒 Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 mt-20 text-lg">Your cart is empty.</p>
            ) : (
                <div className="space-y-6">
                    {/* Display Cart Items */}
                    <div className="space-y-4">
                        {cartItems.map((product: Product) => (
                            <div
                                key={product.id}
                                className="flex justify-between items-center p-4 bg-white shadow rounded-md"
                            >
                                <div className="flex items-center gap-4">
                                    <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                        <p className="text-sm text-gray-600">R {product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(product.id)}
                                    className="text-red-600 font-semibold hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Display Total Price */}
                    <div className="flex justify-between items-center p-4 bg-white shadow rounded-md mt-4">
                        <span className="text-xl font-semibold">Total:</span>
                        <span className="text-xl font-semibold">R {totalPrice}</span>
                    </div>

                    {/* Checkout Button */}
                    <div className="mt-6">
                        <Link
                            href="/checkout"
                            className="w-full sm:w-auto py-3 px-6 bg-sky-800 text-white text-center rounded-md font-semibold hover:bg-sky-700 transition"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>

                </div>
            )}
        </section>
        </MainLayout>
        
    );
};

export default CartPage;
