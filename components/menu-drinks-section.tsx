"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { UtensilsCrossed, Wine } from "lucide-react"

const menuData = {
  recepcion: ["Copa de champagne de bienvenida"],
  principal: ["Delicioso plato principal"],
  postre: ["Postre especial"],
  mesaDulce: ["Mesa dulce para cerrar con algo rico"],
}

const drinksData = {
  descripcion: [
    "Vamos a tener barra con cerveza artesanal, variedad de vinos, fernet y gin tonic para brindar y disfrutar juntos toda la noche.",
  ],
  bebidas: ["Cerveza artesanal", "Variedad de vinos", "Fernet", "Gin Tonic"],
}

export function MenuDrinksSection() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [drinksOpen, setDrinksOpen] = useState(false)

  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-12 text-center">Menú y Bebidas</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Menu Card */}
          <Card className="bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <UtensilsCrossed className="h-16 w-16 mx-auto text-stone-600 mb-6" />
              <h3 className="text-2xl font-serif text-stone-800 mb-4">Menú</h3>
              <p className="text-stone-700 mb-6">
                Descubre el delicioso menú que hemos preparado especialmente para nuestro día
              </p>

              <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-stone-700 hover:bg-stone-800 text-white">Ver Menú Completo</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif text-stone-800">Menú del Día</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-stone-800 mb-3 border-b border-stone-200 pb-2">
                        Recepción
                      </h4>
                      <ul className="space-y-2">
                        {menuData.recepcion.map((item, index) => (
                          <li key={index} className="text-stone-700 flex items-start">
                            <span className="text-stone-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-stone-800 mb-3 border-b border-stone-200 pb-2">
                        Plato Principal
                      </h4>
                      <ul className="space-y-2">
                        {menuData.principal.map((item, index) => (
                          <li key={index} className="text-stone-700 flex items-start">
                            <span className="text-stone-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-stone-800 mb-3 border-b border-stone-200 pb-2">
                        Postre
                      </h4>
                      <ul className="space-y-2">
                        {menuData.postre.map((item, index) => (
                          <li key={index} className="text-stone-700 flex items-start">
                            <span className="text-stone-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-stone-800 mb-3 border-b border-stone-200 pb-2">
                        Mesa Dulce
                      </h4>
                      <ul className="space-y-2">
                        {menuData.mesaDulce.map((item, index) => (
                          <li key={index} className="text-stone-700 flex items-start">
                            <span className="text-stone-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Drinks Card */}
          <Card className="bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <Wine className="h-16 w-16 mx-auto text-stone-600 mb-6" />
              <h3 className="text-2xl font-serif text-stone-800 mb-4">Barra de Tragos</h3>
              <p className="text-stone-700 mb-6">
                Una selección especial de bebidas y cócteles para brindar y celebrar
              </p>

              <Dialog open={drinksOpen} onOpenChange={setDrinksOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-stone-700 hover:bg-stone-800 text-white">Ver Carta de Bebidas</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif text-stone-800">Carta de Bebidas</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-stone-800 mb-3 border-b border-stone-200 pb-2">
                        Descripción
                      </h4>
                      <ul className="space-y-2">
                        {drinksData.descripcion.map((item, index) => (
                          <li key={index} className="text-stone-700 flex items-start">
                            <span className="text-stone-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-stone-800 mb-3 border-b border-stone-200 pb-2">
                        Bebidas
                      </h4>
                      <ul className="space-y-2">
                        {drinksData.bebidas.map((item, index) => (
                          <li key={index} className="text-stone-700 flex items-start">
                            <span className="text-stone-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-stone-50 rounded-lg p-4 mt-6">
                      <p className="text-sm text-stone-600 text-center italic">
                        Barra libre durante toda la celebración
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
