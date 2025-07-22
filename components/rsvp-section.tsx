"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Users } from "lucide-react"

export function RsvpSection() {
  const [rsvpOpen, setRsvpOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    message: "",
  })

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("RSVP Data:", formData)
    setRsvpOpen(false)
    alert("¡Gracias por confirmar tu asistencia!")
  }

  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8">Confirmación de Asistencia</h2>
        <p className="text-lg text-stone-700 mb-8">Por favor, confirma tu asistencia antes del 15 de octubre</p>

        <Dialog open={rsvpOpen} onOpenChange={setRsvpOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3">
              <Users className="h-5 w-5 mr-2" />
              Confirmar Asistencia
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Confirmación de Asistencia</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleRsvpSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="guests">Cantidad de personas</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Mensaje (opcional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Déjanos un mensaje especial..."
                />
              </div>
              <Button type="submit" className="w-full">
                Confirmar
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
