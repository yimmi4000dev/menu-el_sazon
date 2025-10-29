import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import "@/app/styles/globals.css"; // Asegúrate de que la ruta sea correcta

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>El Sazon Arepas - Burguer</title>

          {/* Metadatos Open Graph */}
  <meta property="og:title" content="El Sazón Arepas - Burguer" />
  <meta property="og:description" content="Explora nuestro menú interactivo y haz tu pedido fácilmente por WhatsApp." />
  <meta property="og:image" content="https://menu-el-sazon.vercel.app/images/LOGO_Meta.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta property="og:url" content="https://menu-el-sazon.vercel.app/" />
  <meta property="og:type" content="website" />

  {/* Metadatos para Twitter (opcional) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="El Sazón Arepas - Burguer" />
  <meta name="twitter:description" content="Explora nuestro menú interactivo y haz tu pedido fácilmente por WhatsApp." />
  <meta name="twitter:image" content="https://menu-el-sazon.vercel.app/images/LOGO_Meta.png" />

      </head>
      <body className="bg-gray-100 min-h-screen flex flex-col overflow-y-scroll">
        <Header /> 
        <main className="container mx-auto p-4 max-w-[1000px] flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

