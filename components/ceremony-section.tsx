import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Heart } from "lucide-react"

export function CeremonySection() {
  return (
     <section className="relative py-20 px-4 overflow-hidden">
      {/* Imagen decorativa fondo */}
      <div className="absolute bottom-0 right-0 opacity-50 hidden lg:block pointer-events-none">
        <img
          src="/floresceremonia.png"
          alt="Flores en acuarela decorativas"
          className="w-[36rem] h-auto xl:w-[42rem] 2xl:w-[48rem] object-contain"
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-12 text-center">Ceremonia y Celebración</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/70 backdrop-blur-sm border-stone-200">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-stone-600" />
                <h3 className="text-2xl font-serif text-stone-800">Ubicación</h3>
              </div>
              <p className="text-lg text-stone-700 mb-4">La Arboleda, Comodoro Rivadavia</p>
              <p className="text-sm text-stone-600 mb-6">✓ Estacionamiento propio disponible</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-stone-600" />
                  <div>
                    <p className="font-semibold text-stone-800">Ceremonia Civil</p>
                    <p className="text-stone-600">13:00 hs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-stone-600" />
                  <div>
                    <p className="font-semibold text-stone-800">Fiesta</p>
                    <p className="text-stone-600">18:00 hs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white/70 backdrop-blur-sm border border-stone-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.123456789!2d-67.5326769!3d-45.8254595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde4550073474819:0xe347a5ffe381464e!2sLa+Arboleda!5e0!3m2!1ses!2sar!4v1234567890123"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la boda - La Arboleda, Comodoro Rivadavia"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
