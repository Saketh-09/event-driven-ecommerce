// services/products.ts
import { Product } from '../types';

export async function fetchAllProducts(): Promise<Product[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
}

export async function fetchProductById(id: string): Promise<Product> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with ID: ${id}`);
  }
  return await response.json();
}
