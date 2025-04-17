// src/components/ProductCard.tsx

import { Product } from '@/types/product';

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void; // ✅ Add this line
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
      <img src={product.imageUrl} alt={product.name} className="h-48 object-cover rounded" />
      <div className="mt-2">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-lg font-bold mt-2">R{product.price.toFixed(2)}</p>
        <button
          onClick={() => onAddToCart?.(product)}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
