import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift } from "lucide-react"

export function GiftRegistrySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8">Lista de Regalos</h2>
        <Card className="bg-white/70 backdrop-blur-sm border-stone-200">
          <CardContent className="p-8">
            <Gift className="h-12 w-12 mx-auto text-stone-600 mb-6" />
            <p className="text-lg text-stone-700 mb-6">
              Tu presencia es nuestro regalo más preciado, pero si deseas obsequiarnos algo, puedes hacerlo a través de
              nuestra cuenta bancaria:
            </p>
            <div className="bg-stone-100 rounded-lg p-6 mb-6">
              <p className="font-semibold text-stone-800">Banco: [Nombre del Banco]</p>
              <p className="text-stone-700">CBU: [Número de CBU]</p>
              <p className="text-stone-700">Alias: [Alias de la cuenta]</p>
            </div>
            <Button variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-50 bg-transparent">
              Ver Lista de Regalos Online
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
