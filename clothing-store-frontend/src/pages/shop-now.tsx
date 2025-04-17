// pages/shop-now.tsx

import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Product } from '@/types/product';
import apiClient from '@/lib/apiClient';
import ProductCard from '@/components/ProductCard';
import MainLayout from '@/layout/mainLayout';
import CategoryFilter from '../components/CategoryFilter';
import SubcategoryFilter from '../components/SubcategoryFilter';
import { useFilteredProducts } from '../hooks/useFilteredProducts';

interface ShopNowProps {
  products: Product[];
}

const ShopNowPage = ({ products }: ShopNowProps) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Men' | 'Women'>('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');

  const filteredProducts: Product[] = useFilteredProducts(products, selectedCategory, selectedSubcategory);

  return (
    <MainLayout>
      <section className="px-4 py-12 sm:px-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">🛍️ Shop Now</h1>

        <div className="flex flex-col gap-4 mb-6 p-4">
          <div>
            <CategoryFilter
              selected={selectedCategory}
              onSelect={(cat: 'All' | 'Men' | 'Women') => {
                setSelectedCategory(cat);
                setSelectedSubcategory('All');
              }}
            />
          </div>

          {selectedCategory !== 'All' && (
            <div>
              <SubcategoryFilter
                category={selectedCategory}
                selected={selectedSubcategory}
                onSelect={setSelectedSubcategory}
              />
            </div>
          )}
        </div>




        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 mt-20 text-lg">
            😕 No products found for this selection.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-8 gap-4 sm:gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(product) => {
                  console.log('Product added to cart:', product);
                }}
              />
            ))}
          </div>

        )}
      </section>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await apiClient.get('http://localhost:5000/products/getproducts');
    return {
      props: {
        products: res.data,
      },
    };
  } catch (err) {
    console.error('Error fetching products:', err);
    return {
      props: {
        products: [],
      },
    };
  }
};

export default ShopNowPage;
