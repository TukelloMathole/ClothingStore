// src/components/ProductCard.tsx

import { Product } from '@/types/product';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-2 rounded-2xl shadow hover:shadow-lg transition">

      <div className="h-48 bg-gray-200 rounded-xl overflow-hidden cursor-pointer">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>


      <div className="flex flex-col gap-3 flex-grow justify-between">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col">
            <span className="text-md font-bold text-gray-900 truncate">{product.name}</span>
            {/* <p className="text-xs text-gray-600">ID: {product.id}</p> */}
          </div>
          <span className="font-bold text-red-600 text-sm">R {product.price.toFixed(2)}</span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="hover:bg-sky-700 bg-sky-800 text-white py-2 rounded-md text-sm font-medium transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
