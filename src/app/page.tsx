'use client';
import { useState } from 'react';
import { products } from '@/app/data/products';
import { formatPrice, filterByCategory } from '@/app/data/utils';
import type { Product } from '@/app/data/types';

export default function MenuPage() {
  const [currentCategory, setCurrentCategory] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);

  const filteredProducts = filterByCategory(products, currentCategory);

  const addToCart = (product: Product) => {
    const productWithQuantity = { ...product, quantity };
    setCart([...cart, productWithQuantity]);
    setSelectedProduct(null);
    setQuantity(1);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['todos', 'hamburguesas', 'arepas'].map((category) => (
          <button
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={`px-4 py-2 rounded-full ${
              currentCategory === category 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Lista de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {product.description}
              </p>
              <p className="font-bold mt-2 text-orange-500">
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de producto */}
      {selectedProduct && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50 p-4">
          <div 
            className="bg-white rounded-lg max-w-md w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()} // Evita que el clic en el modal lo cierre
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
              <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
              <p className="text-orange-500 font-bold text-xl mt-4">
                {formatPrice(selectedProduct.price)}
              </p>

              {/* Selector de cantidad */}
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Botones de acción */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setQuantity(1);
                  }}
                  className="flex-1 py-2 border border-gray-300 rounded-lg"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => addToCart(selectedProduct)}
                  className="flex-1 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}