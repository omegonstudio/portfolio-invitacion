import { type NextRequest, NextResponse } from "next/server"

interface RsvpData {
  name: string
  guests: string
  message?: string
  email?: string
  phone?: string
  song?: string
}

interface RsvpResponse {
  success: boolean
  message: string
  data?: RsvpData
  error?: string
}

// Simulamos una base de datos en memoria (en producción usarías una DB real)
const rsvpDatabase: RsvpData[] = []

export async function POST(request: NextRequest): Promise<NextResponse<RsvpResponse>> {
  try {
    const body: RsvpData = await request.json()

    // Validación de datos
    if (!body.name || !body.guests) {
      return NextResponse.json(
        {
          success: false,
          message: "Nombre y cantidad de invitados son requeridos",
          error: "MISSING_REQUIRED_FIELDS",
        },
        { status: 400 },
      )
    }

    // Validar que guests sea un número válido
    const guestCount = Number.parseInt(body.guests)
    if (isNaN(guestCount) || guestCount < 1 || guestCount > 10) {
      return NextResponse.json(
        {
          success: false,
          message: "La cantidad de invitados debe ser entre 1 y 10",
          error: "INVALID_GUEST_COUNT",
        },
        { status: 400 },
      )
    }

    // Verificar si ya existe una confirmación con el mismo nombre
    const existingRsvp = rsvpDatabase.find((rsvp) => rsvp.name.toLowerCase() === body.name.toLowerCase())

    if (existingRsvp) {
      return NextResponse.json(
        {
          success: false,
          message: "Ya existe una confirmación con este nombre",
          error: "DUPLICATE_RSVP",
        },
        { status: 409 },
      )
    }

    // Simular procesamiento (en producción aquí guardarías en DB)
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Guardar en nuestra "base de datos"
    const rsvpEntry: RsvpData = {
      name: body.name.trim(),
      guests: body.guests,
      message: body.message?.trim() || "",
      email: body.email?.trim() || "",
      phone: body.phone?.trim() || "",
      song: body.song?.trim() || "",
    }

    rsvpDatabase.push(rsvpEntry)

    // Aquí podrías enviar un email de confirmación
    // await sendConfirmationEmail(rsvpEntry)

    return NextResponse.json(
      {
        success: true,
        message: `¡Gracias ${body.name}! Tu confirmación para ${body.guests} persona${Number.parseInt(body.guests) > 1 ? "s" : ""} ha sido registrada exitosamente.`,
        data: rsvpEntry,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error processing RSVP:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Error interno del servidor. Por favor intenta nuevamente.",
        error: "INTERNAL_SERVER_ERROR",
      },
      { status: 500 },
    )
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    // Endpoint para obtener estadísticas (solo para los novios)
    const totalRsvps = rsvpDatabase.length
    const totalGuests = rsvpDatabase.reduce((sum, rsvp) => sum + Number.parseInt(rsvp.guests), 0)

    const stats = {
      totalConfirmations: totalRsvps,
      totalGuests: totalGuests,
      averageGuestsPerRsvp: totalRsvps > 0 ? (totalGuests / totalRsvps).toFixed(1) : 0,
      recentRsvps: rsvpDatabase.slice(-5), // Últimas 5 confirmaciones
    }

    return NextResponse.json({
      success: true,
      data: stats,
    })
  } catch (error) {
    console.error("Error getting RSVP stats:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Error obteniendo estadísticas",
        error: "INTERNAL_SERVER_ERROR",
      },
      { status: 500 },
    )
  }
}
