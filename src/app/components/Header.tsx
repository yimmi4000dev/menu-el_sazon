import Link from "next/link"; // Añade esta importación
import Image from "next/image"; // Importa el componente Image

interface HeaderProps {
  activePage?: string;
}

export default function Header({ activePage }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <nav className="mx-auto w-full max-w-[1100px] px-3 py-2">
        <div className="flex justify-between items-center">
          {/* Logo (usa Link en lugar de <a>) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/LOGO.png"
              alt="Logo de El Sazón"
              width={56}
              height={56}
            />
            <h1 className="text-lg font-bold ml-2 text-gray-600">El Sazón</h1>
          </Link>

          <ul className="flex space-x-6">
            <a
              href="https://wa.me/573203208915?text=Hola,%20estoy%20interesado%20en%20hacer%20un%20pedido.%20%5BDesde%20la%20Web%5D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-[1.7rem] w-[200px] py-1 px-5 rounded-full shadow flex items-center gap-2 transition-all"
            >
              <img
                src="/images/whatsapp.png"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              WhatsApp
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
}
