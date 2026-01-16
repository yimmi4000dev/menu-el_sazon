"use client";
import { useState, useEffect } from "react";
import { products } from "@/app/data/products";
import { formatPrice } from "@/app/data/utils";
import type { Product } from "@/app/data/types";

export default function MenuPage() {
  const [currentCategory, setCurrentCategory] = useState("todos");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Función de filtro estricta con validación
  const filterProducts = (category: string): Product[] => {
    if (category === "todos") return [...products];

    return products.filter((product) => {
      // Validación completa del producto
      if (!product.id || !product.category) return false;

      // Verificación exacta de la categoría
      return product.category.toLowerCase() === category.toLowerCase();
    });
  };

  // Efecto para filtrar productos cuando cambia la categoría
  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      const result = filterProducts(currentCategory);
      console.log("Productos filtrados:", result); // Para debug
      setFilteredProducts(result);
      setIsLoading(false);
    }, 50);

    return () => clearTimeout(timer);
  }, [currentCategory]);

  // Categorías disponibles
  const categories = [
    "todos",
    "arepas",
    "chorizos",
    "hamburguesas",
    "perros calientes",
    "salchipapas",
    "patacon",
    "bebidas",
    "adicciones",
  ];

  // Lógica para que el botón "atrás" del celular cierre el modal
useEffect(() => {
  if (selectedProduct) {
    // 1. Añadimos una entrada "ficticia" al historial cuando se abre el modal
    window.history.pushState({ modalOpen: true }, "");

    const handlePopState = () => {
      // 2. Si el usuario da "atrás", cerramos el modal manualmente
      setSelectedProduct(null);
    };

    // Escuchamos el evento del botón físico/atrás del navegador
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }
}, [selectedProduct]);


  return (
    <div className="container mx-auto p-4 mt-24">
      {/* Filtros anclados debajo del header */}
      <div className="fixed top-[70px] left-0 w-full bg-gray-100 flex justify-center">
        <div className="max-w-[1020px] w-full px-4 flex items-center gap-3 md:gap-4 overflow-x-auto whitespace-nowrap py-3 [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`px-3 py-1 text-sm md:text-base rounded-full transition-all duration-200 ${
                currentCategory === category
                  ? "bg-orange-500 text-white font-bold hover:bg-orange-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Estado de carga */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      )}

      {/* Lista de productos */}
      {!isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={`${product.id}-${product.category}-${Math.random()
                .toString(36)
                .substr(2, 5)}`}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="w-full h-38 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-2">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-1">
                  {product.description}
                </p>
                <p className="font-bold mt-2 text-orange-500">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mensaje cuando no hay productos */}
      {!isLoading && filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No hay productos disponibles en esta categoría
          </p>
        </div>
      )}

      {/* Modal del producto */}
      {selectedProduct && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-lg max-w-md w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full aspect-square overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
              <p className="text-gray-600 mt-2">
                {selectedProduct.description}
              </p>
              <p className="text-orange-500 font-bold text-xl mt-4">
                {formatPrice(selectedProduct.price)}
              </p>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 py-3 border bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
