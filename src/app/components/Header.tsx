import Link from "next/link"; // Añade esta importación
import Image from "next/image"; // Importa el componente Image

interface HeaderProps {
  activePage?: string;
}

export default function Header({ activePage }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm w-full">
      <nav className="mx-auto w-full max-w-[1100px] px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo (usa Link en lugar de <a>) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/LOGO.png"
              alt="Logo de El Sazón"
              width={64}
              height={64}
            />
          </Link>

          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className={`text-base font-bold ${
                  activePage === "home"
                    ? "font-bold text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/cart" // Cambiado a /cart
                className={`text-base font-bold ${
                  activePage === "cart"
                    ? "font-bold text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                Carrito
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
