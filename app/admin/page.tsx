"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Calendar, Mail, RefreshCw } from "lucide-react"

interface RsvpStats {
  totalConfirmations: number
  totalGuests: number
  averageGuestsPerRsvp: string
  recentRsvps: Array<{
    name: string
    guests: string
    message?: string
  }>
}

export default function AdminPage() {
  const [stats, setStats] = useState<RsvpStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchStats = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/rsvp")
      const result = await response.json()

      if (result.success) {
        setStats(result.data)
      } else {
        setError("Error cargando estadísticas")
      }
    } catch (err) {
      console.error("Error fetching stats:", err)
      setError("Error de conexión")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-stone-600" />
          <p className="text-stone-600">Cargando estadísticas...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-serif text-stone-800 mb-2">Panel de Administración</h1>
          <p className="text-stone-600">Estadísticas de confirmaciones para la boda de Josué & Ariana</p>
          <Button onClick={fetchStats} variant="outline" className="mt-4 bg-transparent">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualizar
          </Button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {stats && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Confirmaciones</CardTitle>
                  <Users className="h-4 w-4 text-stone-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalConfirmations}</div>
                  <p className="text-xs text-stone-600">familias/grupos confirmados</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Invitados</CardTitle>
                  <Calendar className="h-4 w-4 text-stone-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalGuests}</div>
                  <p className="text-xs text-stone-600">personas confirmadas</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Promedio por Grupo</CardTitle>
                  <Mail className="h-4 w-4 text-stone-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.averageGuestsPerRsvp}</div>
                  <p className="text-xs text-stone-600">personas por confirmación</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Confirmaciones Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                {stats.recentRsvps.length > 0 ? (
                  <div className="space-y-4">
                    {stats.recentRsvps.map((rsvp, index) => (
                      <div key={index} className="border-b border-stone-200 pb-4 last:border-b-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-stone-800">{rsvp.name}</h3>
                            <p className="text-sm text-stone-600">
                              {rsvp.guests} persona{Number.parseInt(rsvp.guests) > 1 ? "s" : ""}
                            </p>
                            {rsvp.message && <p className="text-sm text-stone-500 mt-1 italic">"{rsvp.message}"</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-stone-500 text-center py-8">No hay confirmaciones aún</p>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
