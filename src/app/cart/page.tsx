"use client"; // Necesario para interactividad
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // Cargar carrito desde localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const removeItem = (index: number) => {
    // Tipo explícito para index
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="container mx-auto p-4 mt-16">
      <h1 className="text-2xl font-bold mb-6">Domicilios: </h1>
      <a
        href="https://wa.me/573203208915?text=Hola,%20estoy%20interesado%20en%20hacer%20un%20pedido.%20%5BDesde%20la%20Web%5D"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-bold text-[1.7rem] w-[200px] py-2 px-4 rounded-full shadow flex items-center gap-2 transition-all"
      >
        <img src="/images/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
        WhatsApp
      </a>

      <h1 className="text-2xl font-bold mt-6 mb-6">Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeItem(index)}
                className="text-red-500"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
