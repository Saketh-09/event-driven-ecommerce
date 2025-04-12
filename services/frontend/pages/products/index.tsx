// pages/products/index.tsx
import React from 'react';
import { fetchAllProducts } from '../../services/products';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types';

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => (
  <div>
    <h1>Product Catalog</h1>
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export async function getServerSideProps() {
  const products = await fetchAllProducts();
  return { props: { products } };
}

export default ProductsPage;
