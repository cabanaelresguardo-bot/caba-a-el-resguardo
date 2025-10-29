import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-800 font-sans">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/images/image4.jpeg" alt="logo" className="w-16 h-16 rounded-lg object-contain" />
          <div>
            <h1 className="text-2xl font-extrabold text-emerald-800">Cabaña El Resguardo</h1>
            <p className="text-sm text-gray-600">Tu escapada perfecta al corazón de la naturaleza</p>
          </div>
        </div>
        <a href="https://www.instagram.com/cabana_el_resguardo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border">
          Síguenos en Instagram
        </a>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <section className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg p-6">
          <div className="p-4 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold mb-3 text-emerald-900">Escápate a la tranquilidad</h2>
            <p className="text-gray-600 mb-4">Disfruta una estadía única en un lugar donde la calma y la naturaleza se combinan para ofrecerte descanso y desconexión total.</p>
            <ul className="text-sm space-y-2 mb-6">
              <li>• Jacuzzi</li>
              <li>• Wifi</li>
              <li>• TV</li>
              <li>• Cocina equipada</li>
              <li>• Parqueadero</li>
            </ul>
            <div className="flex gap-3">
              <a href="https://w.app/4dtloq" className="px-5 py-3 bg-emerald-600 text-white rounded-lg font-semibold shadow">Contactar / Reservar</a>
              <a href="#gallery" className="px-5 py-3 border rounded-lg">Ver galería</a>
            </div>
          </div>
          <div className="bg-gray-100 flex items-center justify-center">
            <img src="/images/image3.jpeg" alt="fachada" className="w-full h-full object-cover" />
          </div>
        </section>

        <section id="gallery" className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Galería</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <img src="/images/image1.jpg" alt="promo1" className="w-full h-48 object-cover rounded-xl" />
            <img src="/images/image2.jpg" alt="promo2" className="w-full h-48 object-cover rounded-xl" />
            <img src="/images/image3.jpeg" alt="fachada2" className="w-full h-48 object-cover rounded-xl" />
          </div>
        </section>

        <section id="contact" className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-3">Contacto y cómo llegar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600">Dirección: <strong>Vía Tenza – Capilla</strong></p>
              <p className="mt-3 text-gray-600">Teléfono / WhatsApp: <strong>3132004832 / 3214476128</strong></p>
              <p className="mt-3 text-gray-600">Reserva rápida: <a href="https://w.app/4dtloq" className="text-emerald-600">https://w.app/4dtloq</a></p>
            </div>
            <div>
              <div className="w-full h-60 rounded-lg overflow-hidden">
                <iframe
                  title="ubicacion"
                  src="https://www.google.com/maps?q=V%C3%ADa%20Tenza%20Capilla&output=embed"
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Cabaña El Resguardo — Todos los derechos reservados</footer>
      </main>

      {/* WhatsApp floating button */}
      <a href="https://w.app/4dtloq" target="_blank" rel="noreferrer" className="fixed right-4 bottom-4 bg-emerald-600 text-white p-4 rounded-full shadow-lg">
        WhatsApp
      </a>
    </div>
  )
}