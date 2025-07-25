import { Card, CardContent } from "@/components/ui/card"
import { TimelineItem } from "./timeline-item"

const itineraryEvents = [
  {
    time: "12:00",
    title: "Recepción de Invitados",
    description: "Llegada y bienvenida en La Arboleda",
    icon: "👥",
    side: "left" as const,
  },
  {
    time: "13:00",
    title: "Ceremonia Civil",
    description: "Intercambio de votos y anillos",
    icon: "💒",
    side: "right" as const,
  },
  {
    time: "13:30",
    title: "Almuerzo",
    description: "Almuerzo de celebración con todos los invitados",
    icon: "🍽️",
    side: "left" as const,
  },
  {
    time: "14:30",
    title: "Postre",
    description: "Momento dulce para compartir",
    icon: "🍰",
    side: "right" as const,
  },
  {
    time: "17:30",
    title: "Corte de Torta",
    description: "Tradicional corte de torta de bodas",
    icon: "🎂",
    side: "left" as const,
  },
  {
    time: "18:00 a 20:00",
    title: "Fiesta",
    description: "Baile y celebración hasta altas horas",
    icon: "🎉",
    side: "right" as const,
  },
]

export function ItinerarySection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Imagen decorativa fondo */}
      <div className="absolute bottom-0 left-0 opacity-30 hidden lg:block pointer-events-none">
        <img
          src="/floresacuarelaitinerario.png"
          alt="Flores en acuarela decorativas"
          className="w-[36rem] h-auto xl:w-[42rem] 2xl:w-[48rem] object-contain"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-12 text-center">
          Itinerario del Día
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-stone-300 h-full hidden md:block"></div>

          <div className="space-y-8">
            {itineraryEvents.map((event, index) => (
              <TimelineItem
                key={index}
                time={event.time}
                title={event.title}
                description={event.description}
                icon={event.icon}
                side={event.side}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-white/70 backdrop-blur-sm border-stone-200">
            <CardContent className="p-6">
              <p className="text-stone-700 italic">
                <strong>Nota:</strong> Los horarios son aproximados y pueden variar ligeramente. ¡Lo importante es
                disfrutar juntos de este día especial!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
