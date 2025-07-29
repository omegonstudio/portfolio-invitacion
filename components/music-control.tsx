"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

export function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {
    const audio = document.getElementById("background-music") as HTMLAudioElement
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const audio = document.getElementById("background-music") as HTMLAudioElement
    if (audio) {
      audio.addEventListener('play', () => setIsPlaying(true))
      audio.addEventListener('pause', () => setIsPlaying(false))
    }
    return () => {
      if (audio) {
        audio.removeEventListener('play', () => setIsPlaying(true))
        audio.removeEventListener('pause', () => setIsPlaying(false))
      }
    }
  }, [])

  return (
    <>
      <audio id="background-music" loop>
        <source src="/music/2009.mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleMusic}
          variant="outline"
          size="icon"
          className="bg-white/80 backdrop-blur-sm border-stone-200 hover:bg-white/90"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>
    </>
  )
}