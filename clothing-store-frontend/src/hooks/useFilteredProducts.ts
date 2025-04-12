// src/hooks/useFilteredProducts.ts
import { Product } from '@/types/product';

export const useFilteredProducts = (
  products: Product[],
  category: 'All' | 'Men' | 'Women',
  subcategory: string
): Product[] => {
  return products.filter((product) => {
    const matchesCategory =
      category === 'All' || product.category?.toLowerCase() === category.toLowerCase();
    const matchesSubcategory =
      category === 'All' || subcategory === 'All' || product.subcategory?.toLowerCase() === subcategory.toLowerCase();
    return matchesCategory && matchesSubcategory;
  });
};
