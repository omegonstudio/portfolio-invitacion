import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Josué & Ariana - Boda 23 de Noviembre 2025",
  description:
    "Te invitamos a celebrar nuestro amor. Sábado 23 de noviembre de 2025 en La Arboleda, Comodoro Rivadavia.",
  openGraph: {
    title: "Josué & Ariana - ¡Nos casamos!",
    description: "Te invitamos a celebrar nuestro amor el 23 de noviembre de 2025",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
