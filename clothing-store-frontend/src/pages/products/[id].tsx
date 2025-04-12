// // src/pages/product/[id].tsx
// import { GetServerSideProps } from 'next';
// import { apiClient } from '@/lib/apiClient';
// import { Product } from '@/types/product';

// interface ProductPageProps {
//   product: Product;
// }

// export default function ProductPage({ product }: ProductPageProps) {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">{product.name}</h1>
//       <p className="text-gray-600">{product.description}</p>
//       <p className="text-lg mt-2">R{product.price}</p>
//     </div>
//   );
// }

// // Get data from microservice using SSR
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.params!;
  
//   try {
//     const response = await apiClient.get(`/products/${id}`);
//     return {
//       props: {
//         product: response.data,
//       },
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// };
