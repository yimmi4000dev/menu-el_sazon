export default function Footer() {
  return (
    // {/* Capa externa para el fondo (full-width) */}
    <div className="bg-[#59280f] w-full">
      {/* Capa interna para el contenido (centrado y con max-width) */}
      <footer className="text-white p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-full max-w-[1100px]">
        {/* Columna izquierda - Contacto */}
        <div>
          <h3 className="text-xl font-bold mb-4">Síguenos</h3>
          <div className="flex items-center gap-4">
            <img src="/images/instagram.svg" alt="Logo Bre-b" className="w-6 h-6" />
            <p>el_sazon_arepas (Instagram)</p>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <img src="/images/facebook.svg" alt="Logo Bre-b" className="w-6 h-6" />
            <p>El Sazon Arepas (Facebook)</p>
          </div>

          
          <h3 className="text-xl font-bold mt-6 mb-4">Medio de pago</h3>
          <div className="flex gap-6 items-center">
            <img src="/images/nequi.svg" alt="Logo Nequi" className="w-15 h-15" />
            <img
              src="/images/daviplata.svg"
              alt="Logo Daviplata"
              className="w-15 h-15"
            />
            <img src="/images/bre-b.svg" alt="Logo Bre-b" className="w-15 h-15" />
          </div>
          <div className="flex gap-4">
            <p> 320 320 8915</p>
            <p> - </p>
            <p> 311 499 9126</p>
          </div>
        </div>

        {/* Columna derecha - Mapa */}
        <div className="h-64 w-full">
          <h3 className="text-xl font-bold mb-4">Ubicacion</h3>
          <div className="flex items-center gap-2">
            <img src="/images/maps.svg" alt="Logo Bre-b" className="w-6 h-6" />
            <p>Carrera 15 N°15B - 63, Nueva Florencia</p>
          </div>
          
          <iframe 
            src="https://maps.google.com/maps?q=1.6030088616342788,-75.60118919683323&z=18&output=embed&markers=color:red%7C1.6030488616342788,-75.60104919683323"
            width="100%"
            height="70%"
            className="border-0 mt-2"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </footer>
    </div>
  );
}
