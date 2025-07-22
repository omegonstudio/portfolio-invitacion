import { Card, CardContent } from "@/components/ui/card"
import { TimelineItem } from "./timeline-item"

const itineraryEvents = [
  {
    time: "15:00",
    title: "Llegada de Invitados",
    description: "Recepción y bienvenida en La Arboleda",
    icon: "👥",
    side: "left" as const,
  },
  {
    time: "15:30",
    title: "Fotografías Pre-Ceremonia",
    description: "Sesión de fotos con familiares y amigos",
    icon: "📸",
    side: "right" as const,
  },
  {
    time: "17:00",
    title: "Ceremonia Religiosa",
    description: "Intercambio de votos y anillos",
    icon: "💒",
    side: "left" as const,
  },
  {
    time: "18:00",
    title: "Cocktail y Fotografías",
    description: "Brindis de celebración y sesión fotográfica",
    icon: "🥂",
    side: "right" as const,
  },
  {
    time: "20:00",
    title: "Cena y Fiesta",
    description: "Cena, baile y celebración hasta altas horas",
    icon: "🎉",
    side: "left" as const,
  },
  {
    time: "22:00",
    title: "Primer Baile",
    description: "Baile de los novios y apertura de pista",
    icon: "💃",
    side: "right" as const,
  },
  {
    time: "00:00",
    title: "Brindis de Medianoche",
    description: "Brindis especial y continuación de la fiesta",
    icon: "🍾",
    side: "left" as const,
  },
]

export function ItinerarySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-12 text-center">Itinerario del Día</h2>

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
