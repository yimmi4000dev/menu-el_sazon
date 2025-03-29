import { Product } from './types';
import { formatPrice } from '@/app/data/utils';

export const products: Product[] = [
  {
    id: 1,
    name: "Hamburguesa Clásica",
    description: "Carne, queso, lechuga y tomate",
    price: 6000, // Precio como número
    category: "hamburguesas",
    image: "/images/hamburguesa.jpg" // Asegúrate de tener esta imagen en /public
  },
  {
    id: 2,
    name: "Arepa rellena con todo",
    description: "Pollo, carne, huevo y chorizo",
    price: 9000,
    category: "arepa",
    image: "/images/arepa.jpg"
  }
];