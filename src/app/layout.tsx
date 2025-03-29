import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import "@/app/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
  activePage?: string; // Prop opcional para la página activa
}

export default function RootLayout({ children, activePage }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Yimmy Muñoz - Portfolio</title>
      </head>
      <body className="bg-gray-100 min-h-screen flex flex-col overflow-y-scroll">
        <Header activePage={activePage} />
        <main className="container mx-auto p-4 max-w-5xl flex-grow">
          {children} {/* Equivalente al <slot /> de Astro */}
        </main>
        <Footer />
      </body>
    </html>
  );
}