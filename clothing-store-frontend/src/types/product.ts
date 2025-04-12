// Define and export the Product type
export interface Product {
  id: string;
  name: string;
  price: number;
  category?: string;
  subcategory?: string;
  imageUrl?: string;
  description?: string;
}