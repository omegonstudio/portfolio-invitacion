import { type NextRequest, NextResponse } from "next/server"

interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactResponse {
  success: boolean
  message: string
  data?: ContactData
  error?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse>> {
  try {
    const body: ContactData = await request.json()

    // Validación de datos
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Todos los campos son requeridos",
          error: "MISSING_REQUIRED_FIELDS",
        },
        { status: 400 },
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Por favor ingresa un email válido",
          error: "INVALID_EMAIL_FORMAT",
        },
        { status: 400 },
      )
    }

    // Simular procesamiento
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Aquí podrías integrar con un servicio de email como SendGrid, Resend, etc.
    // await sendContactEmail(body)

    console.log("Nuevo mensaje de contacto:", {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: `¡Gracias ${body.name}! Tu mensaje ha sido enviado exitosamente. Te responderemos pronto.`,
        data: {
          name: body.name,
          email: body.email,
          subject: body.subject,
          message: body.message,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Error enviando el mensaje. Por favor intenta nuevamente.",
        error: "INTERNAL_SERVER_ERROR",
      },
      { status: 500 },
    )
  }
}
