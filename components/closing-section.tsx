import { Heart } from "lucide-react"

export function ClosingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-stone-100 to-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Heart className="h-16 w-16 mx-auto text-stone-600 mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">
            ¡Gracias por ser parte de este momento único!
          </h2>
          <p className="text-xl text-stone-700">Los esperamos con amor.</p>
        </div>

        <div className="text-2xl font-serif text-stone-600">Josué & Ariana</div>
      </div>
    </section>
  )
}
