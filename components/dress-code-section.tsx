import { Card, CardContent } from "@/components/ui/card"
import { ColorPalette } from "./color-palette"

const colorPalette = [
  { name: "Negro", color: "#000000" },
  { name: "Verde Oscuro", color: "#2D5016" },
  { name: "Marrón", color: "#8B4513" },
  { name: "Mostaza", color: "#FFDB58" },
  { name: "Terracota", color: "#E2725B" },
  { name: "Rosado", color: "#FFB6C1" },
  { name: "Lavanda", color: "#E6E6FA" },
  { name: "Celeste", color: "#87CEEB" },
  { name: "Menta", color: "#98FB98" },
]

export function DressCodeSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-12 text-center">
          Dresscode / Vestimenta – Formal
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-stone-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Hombres</h3>
              <p className="text-stone-700">Traje: saco, camisa, pantalón de vestir, zapatos, corbata.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-stone-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Mujeres</h3>
              <p className="text-stone-700">Vestido largo, pollera larga, traje, zapatos.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/70 backdrop-blur-sm border-stone-200 mb-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-stone-800 mb-6 text-center">Paleta de Colores Recomendada</h3>
            <ColorPalette colors={colorPalette} />
            <p className="text-center text-stone-700 italic">
              Lo más importante para nosotros es que estés cómodo, pero nos gustaría que la vestimenta sea formal y lisa
              (sin estampas).
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
