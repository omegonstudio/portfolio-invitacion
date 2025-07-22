import { Card, CardContent } from "@/components/ui/card"
import { ColorPalette } from "./color-palette"

const colorPalette = [
  { name: "Negro", color: "#000000" },
  { name: "Marrón Oscuro", color: "#312817" },
  { name: "Marrón", color: "#7a4900" },
  { name: "Verde Oliva", color: "#697b43" },
  { name: "Verde Bosque", color: "#2e6417" },
  { name: "Lavanda", color: "#ac9bd1" },
  { name: "Rosa Suave", color: "#d18ebb" },
  { name: "Rosa Vibrante", color: "#de5fb2" },
  { name: "Azul Océano", color: "#0097b2" },
  { name: "Celeste Claro", color: "#80eef2" },
  { name: "Naranja", color: "#ff9d09" },
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
