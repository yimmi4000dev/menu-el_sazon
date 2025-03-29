export default function Footer() {
  return (
    // {/* Capa externa para el fondo (full-width) */}
    <div className="bg-[#59280f] w-full">
    {/* Capa interna para el contenido (centrado y con max-width) */}
    <footer className="text-white p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-full max-w-[1100px]">
      {/* Columna izquierda - Contacto */}
      <div>
        <h3 className="text-xl font-bold mb-4">Síguenos</h3>
        <p>✅ el_sazon_arepas (Instagram)</p>
        <p>✅ El Sazon Arepas (Facebook)</p>
        <h3 className="text-xl font-bold mt-6 mb-4">Medio de pago</h3>
        <p>💳 Nequi y Davi Plata:</p>
        <p>💲 320 320 8915</p>
        <p>💲 311 499 9126</p>
      </div>

      {/* Columna derecha - Mapa */}
      <div className="h-64 w-full">
      <h3 className="text-xl font-bold mb-4">Ubicacion</h3>
      <p className="mb-2">📍 Carrera 15 N°15B - 63, Nueva Florencia</p>
        <iframe
          src="https://maps.google.com/maps?q=1.6030088616342788,-75.60118919683323&z=18&output=embed&markers=color:red%7C1.6030488616342788,-75.60104919683323"
          width="100%"
          height="70%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </footer>
    </div>
  );
}
