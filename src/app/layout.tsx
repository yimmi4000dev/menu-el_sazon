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
        <title>El Sazon Arepas Burguer - Menú</title>
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

