// import { FaWhatsapp } from 'react-icons/fa';

// export default function WhatsAppButton() {
//   const phone = '+123456789'; // Reemplaza con tu número
//   const message = '¡Hola! Quiero hacer un pedido.';

//   return (
//     <a
//       href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
//     >
//       <FaWhatsapp size={24} />
//     </a>
//   );
// }

// components/WhatsAppButton.tsx


import React from "react";

const WhatsAppButton: React.FC = () => {
  return (
    //<ul className="flex space-x-1">
      <a
        href="https://wa.me/573203208915?text=Hola,%20estoy%20interesado%20en%20hacer%20un%20pedido.%20%5BDesde%20la%20Web%5D"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-bold text-[1.5rem] w-[190px] py-1 px-5 rounded-full shadow flex items-center gap-2 transition-all"
      >
        <img src="/images/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
        WhatsApp
      </a>
    //</ul>
  );
};

export default WhatsAppButton;
