"use client"
import { MusicControl } from "@/components/music-control"
import { HeroSection } from "@/components/hero-section"
import { OurStorySection } from "@/components/our-story-section"
import { CeremonySection } from "@/components/ceremony-section"
import { ItinerarySection } from "@/components/itinerary-section"
import { DressCodeSection } from "@/components/dress-code-section"
import { RsvpSection } from "@/components/rsvp-section"
import { GiftRegistrySection } from "@/components/gift-registry-section"
import { ClosingSection } from "@/components/closing-section"

export default function WeddingInvitation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 relative overflow-hidden">
      <MusicControl />

      <div className="relative z-10">
        <HeroSection />
        <OurStorySection />
        <CeremonySection />
        <ItinerarySection />
        <DressCodeSection />
        <RsvpSection />
        <GiftRegistrySection />
        <ClosingSection />
      </div>
    </div>
  )
}
