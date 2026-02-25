export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  likes: number;
  categoryId: number;
}

const product: Partial<Product> = {
  likes: 0,
};
