import React from "react";
import { Product } from "../types/product";

interface CartProps {
  cart: Product[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex justify-center flex-wrap gap-6">
          {cart.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md w-48 text-center"
            >
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Cart;
