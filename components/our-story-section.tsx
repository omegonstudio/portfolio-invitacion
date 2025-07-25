import { Card, CardContent } from "@/components/ui/card"

export function OurStorySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8">Nuestra Historia</h2>
        <Card className="bg-green/70 backdrop-blur-sm border-stone-200">
          <CardContent className="p-8">
            <p className="text-lg text-stone-700 leading-relaxed">
              Después de años de amistad, el amor floreció entre nosotros como las flores en primavera. Cada momento
              compartido nos ha llevado a este día especial, donde queremos celebrar nuestro amor rodeados de las
              personas más importantes de nuestras vidas. Este es el comienzo de nuestra nueva aventura juntos, y no
              podríamos estar más emocionados de compartirla con ustedes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
