import { Card, CardContent } from "@/components/ui/card"

interface TimelineItemProps {
  time: string
  title: string
  description: string
  icon: string
  side: "left" | "right"
}

export function TimelineItem({ time, title, description, icon, side }: TimelineItemProps) {
  return (
    <div className={`flex items-center ${side === "right" ? "md:flex-row-reverse" : ""} gap-8`}>
      <div className={`flex-1 ${side === "right" ? "md:text-right" : ""}`}>
        <Card className="bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-stone-800">{title}</h3>
                <p className="text-stone-600 font-medium">{time}</p>
              </div>
            </div>
            <p className="text-stone-700">{description}</p>
          </CardContent>
        </Card>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:flex w-4 h-4 bg-stone-400 rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>

      <div className="flex-1 hidden md:block"></div>
    </div>
  )
}
