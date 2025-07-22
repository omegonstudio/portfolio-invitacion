import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Heart } from "lucide-react"

export function CeremonySection() {
  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-12 text-center">Ceremonia y Celebración</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/70 backdrop-blur-sm border-stone-200">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-stone-600" />
                <h3 className="text-2xl font-serif text-stone-800">Ubicación</h3>
              </div>
              <p className="text-lg text-stone-700 mb-6">La Arboleda, Comodoro Rivadavia</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-stone-600" />
                  <div>
                    <p className="font-semibold text-stone-800">Ceremonia</p>
                    <p className="text-stone-600">17:00 hs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-stone-600" />
                  <div>
                    <p className="font-semibold text-stone-800">Fiesta</p>
                    <p className="text-stone-600">20:00 hs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white/70 backdrop-blur-sm border border-stone-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.234567890123!2d-67.5!3d-45.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ4JzAwLjAiUyA2N8KwMzAnMDAuMCJX!5e0!3m2!1ses!2sar!4v1234567890123"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la boda"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
