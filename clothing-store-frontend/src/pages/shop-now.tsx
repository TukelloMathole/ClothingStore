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
      <section className="px-4 py-10 sm:px-8">
        <h1 className="text-4xl font-bold text-center mb-10">Shop Now</h1>

        <CategoryFilter selected={selectedCategory} onSelect={(cat: 'All' | 'Men' | 'Women') => {
          setSelectedCategory(cat);
          setSelectedSubcategory('All');
        }} />

        {selectedCategory !== 'All' && (
          <SubcategoryFilter
            category={selectedCategory}
            selected={selectedSubcategory}
            onSelect={setSelectedSubcategory}
          />
        )}

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found for this selection.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await apiClient.get('/products');
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
