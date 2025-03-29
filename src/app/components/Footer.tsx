export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Columna izquierda - Contacto */}
      <div>
        <h3 className="text-xl font-bold mb-4">Contacto</h3>
        <p>📍 Carrera 15 N°15B - 63, Barrio Nueva Florencia</p>
        <p>📞 +57 320 320 8915</p>
        <p>📞 +57 311 499 9126</p>
        <p>_</p>
        <p>💳 Nequi y Davi Plata:</p>
        <p>💲 320 320 8915</p>
        <p>💲 311 499 9126</p>
      </div>

      {/* Columna derecha - Mapa */}
      <div className="h-64 w-full">
        <iframe
          src="https://maps.google.com/maps?q=1.6030088616342788,-75.60118919683323&z=18&output=embed&markers=color:red%7C1.6030488616342788,-75.60104919683323"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </footer>
  );
}
