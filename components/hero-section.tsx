import { Calendar } from "lucide-react"
import { CountdownTimer } from "./countdown-timer"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
      {/* Large botanical decorations on sides */}
      <div className="absolute -left-16 top-1/2 transform -translate-y-1/4 opacity-40 hidden lg:block">
        <img
          src="/images/spring-flowers-clean.png"
          alt="Flores de primavera - campanillas, narcisos y azafranes"
          className="w-[28rem] h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem] object-contain"
        />
      </div>

      <div className="absolute -right-8 top-1/2 transform -translate-y-3/4 opacity-40 hidden lg:block">
        <img
          src="/images/bee-botanical.png"
          alt="Ilustración botánica con abeja"
          className="w-80 h-80 xl:w-96 xl:h-96 object-contain"
        />
      </div>

      {/* Medium size for tablets */}
      <div className="absolute -left-8 top-1/2 transform -translate-y-1/4 opacity-30 hidden md:block lg:hidden">
        <img src="/images/spring-flowers-clean.png" alt="Flores de primavera" className="w-64 h-64 object-contain" />
      </div>

      <div className="absolute -right-4 top-1/2 transform -translate-y-3/4 opacity-30 hidden md:block lg:hidden">
        <img
          src="/images/bee-botanical.png"
          alt="Ilustración botánica con abeja"
          className="w-48 h-48 object-contain"
        />
      </div>

      {/* Small accents for mobile */}
      <div className="absolute left-2 top-1/3 transform -translate-y-1/4 opacity-25 block md:hidden">
        <img src="/images/spring-flowers-clean.png" alt="Flores de primavera" className="w-32 h-32 object-contain" />
      </div>

      <div className="absolute right-2 bottom-1/3 transform translate-y-1/4 opacity-25 block md:hidden">
        <img
          src="/images/bee-botanical.png"
          alt="Ilustración botánica con abeja"
          className="w-24 h-24 object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-8 animate-fade-in">
          <p className="text-lg md:text-xl text-stone-600 font-light mb-4">¡Nos casamos!</p>

          {/* Monogram */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 border-2 border-stone-300 rounded-full bg-white/50 backdrop-blur-sm">
              <span className="text-3xl md:text-4xl font-serif text-stone-700">J & A</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-800 mb-6">
            Josué <span className="text-stone-500">&</span> Ariana
          </h1>

          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-stone-600 mb-8">
            <Calendar className="h-6 w-6" />
            <span>Sábado 25 de octubre de 2025</span>
          </div>

          <CountdownTimer targetDate="2025-10-25T17:00:00" />
        </div>
      </div>
    </section>
  )
}
