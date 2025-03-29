import { Product } from './types'; // Añade esta importación

// Formateador de precios COP
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price);
}

// Filtrador por categoría (ahora reconoce Product[])
export function filterByCategory(products: Product[], category: string): Product[] {
  return category === 'todos' 
    ? products 
    : products.filter(p => p.category === category);
}