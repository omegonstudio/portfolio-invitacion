"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Users, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function RsvpSection() {
  const [rsvpOpen, setRsvpOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    message: "",
    email: "",
    phone: "",
    song: "",
  })

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setStatusMessage(result.message)
        // Limpiar formulario
        setFormData({
          name: "",
          guests: "1",
          message: "",
          email: "",
          phone: "",
          song: "",
        })
        // Cerrar modal después de 2 segundos
        setTimeout(() => {
          setRsvpOpen(false)
          setSubmitStatus("idle")
        }, 2000)
      } else {
        setSubmitStatus("error")
        setStatusMessage(result.message || "Error al enviar la confirmación")
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error)
      setSubmitStatus("error")
      setStatusMessage("Error de conexión. Por favor intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      guests: "1",
      message: "",
      email: "",
      phone: "",
      song: "",
    })
    setSubmitStatus("idle")
    setStatusMessage("")
  }

  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8">Confirmación de Asistencia</h2>
        <p className="text-lg text-stone-700 mb-8">Por favor, confirma tu asistencia antes del 1 de septiembre</p>

        <Dialog
          open={rsvpOpen}
          onOpenChange={(open) => {
            setRsvpOpen(open)
            if (!open) resetForm()
          }}
        >
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

            {submitStatus === "success" ? (
              <div className="text-center py-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <p className="text-green-700 font-medium">{statusMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="guests">Cantidad de personas *</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email (opcional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isSubmitting}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono (opcional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={isSubmitting}
                    placeholder="+54 9 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="song">Recomendación de canción (opcional)</Label>
                  <Input
                    id="song"
                    value={formData.song}
                    onChange={(e) => setFormData({ ...formData, song: e.target.value })}
                    disabled={isSubmitting}
                    placeholder="Recomienda una canción para la fiesta"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje (opcional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Déjanos un mensaje especial..."
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Confirmar Asistencia"
                  )}
                </Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
