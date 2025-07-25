import { Card, CardContent } from "@/components/ui/card"
import { Gift } from "lucide-react"

export function GiftRegistrySection() {
  return (
 <section className="relative py-20 px-4 overflow-hidden">
      {/* Imagen decorativa fondo */}
      <div className="absolute bottom-0 left-90 opacity-30 hidden lg:block pointer-events-none">
        <img
          src="/florescolaboracion.png"
          alt="Flores en acuarela decorativas"
          className="w-[36rem] h-auto xl:w-[42rem] 2xl:w-[48rem] object-contain"
        />
      </div>      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8">Colaboración</h2>
        <Card className="bg-white/70 backdrop-blur-sm border-stone-200">
          <CardContent className="p-8">
            <Gift className="h-12 w-12 mx-auto text-stone-600 mb-6" />
            <p className="text-lg text-stone-700 mb-6">
              Gracias por acompañarnos en este momento tan especial. Si querés hacernos un regalo, lo que más deseamos
              es sumar a nuestra luna de miel. Podés hacerlo a través de este CBU.
            </p>
            <div className="bg-stone-100 rounded-lg p-6 mb-6">
              <p className="font-semibold text-stone-800">Banco: [Nombre del Banco]</p>
              <p className="text-stone-700">CBU: [Número de CBU]</p>
              <p className="text-stone-700">Alias: [Alias de la cuenta]</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
