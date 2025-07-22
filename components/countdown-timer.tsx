"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date(targetDate).getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
      {[
        { label: "Días", value: timeLeft.days },
        { label: "Horas", value: timeLeft.hours },
        { label: "Min", value: timeLeft.minutes },
        { label: "Seg", value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-stone-200">
            <div className="text-2xl font-bold text-stone-800">{item.value}</div>
            <div className="text-sm text-stone-600">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
