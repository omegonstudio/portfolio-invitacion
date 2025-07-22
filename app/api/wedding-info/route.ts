import { NextResponse } from "next/server"

interface WeddingInfo {
  couple: {
    bride: string
    groom: string
  }
  date: string
  time: {
    ceremony: string
    reception: string
  }
  venue: {
    name: string
    address: string
    city: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  dressCode: {
    formal: boolean
    colors: string[]
    restrictions: string[]
  }
  contact: {
    email: string
    phone: string
  }
}

const weddingData: WeddingInfo = {
  couple: {
    bride: "Ariana",
    groom: "Josué",
  },
  date: "2025-10-25",
  time: {
    ceremony: "17:00",
    reception: "20:00",
  },
  venue: {
    name: "La Arboleda",
    address: "Dirección del venue",
    city: "Comodoro Rivadavia",
    coordinates: {
      lat: -45.8,
      lng: -67.5,
    },
  },
  dressCode: {
    formal: true,
    colors: ["Negro", "Verde Oscuro", "Marrón", "Mostaza", "Terracota", "Rosado", "Lavanda", "Celeste", "Menta"],
    restrictions: ["Sin estampas", "Vestimenta formal"],
  },
  contact: {
    email: "josue.ariana.boda@email.com",
    phone: "+54 9 XXX XXX XXXX",
  },
}

export async function GET(): Promise<NextResponse> {
  try {
    // Simular una pequeña latencia
    await new Promise((resolve) => setTimeout(resolve, 200))

    return NextResponse.json({
      success: true,
      data: weddingData,
      message: "Información de la boda obtenida exitosamente",
    })
  } catch (error) {
    console.error("Error getting wedding info:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Error obteniendo información de la boda",
        error: "INTERNAL_SERVER_ERROR",
      },
      { status: 500 },
    )
  }
}
