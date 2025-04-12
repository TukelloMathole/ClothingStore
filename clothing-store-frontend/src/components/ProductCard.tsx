// src/components/ProductCard.tsx

import { Product } from '@/types/product';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border rounded-2xl shadow hover:shadow-lg transition p-4 cursor-pointer">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500 mt-1">{product.category}</p>
        <p className="mt-2 font-bold text-lg text-primary">R {product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
