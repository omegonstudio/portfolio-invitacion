"use client";
import { useState } from "react";
import { MusicControl } from "@/components/music-control";
import { HeroSection } from "@/components/hero-section";
import { OurStorySection } from "@/components/our-story-section";
import { CeremonySection } from "@/components/ceremony-section";
import { ItinerarySection } from "@/components/itinerary-section";
import { DressCodeSection } from "@/components/dress-code-section";
import { RsvpSection } from "@/components/rsvp-section";
import { GiftRegistrySection } from "@/components/gift-registry-section";
import { ClosingSection } from "@/components/closing-section";
import { MenuDrinksSection } from "@/components/menu-drinks-section";

export default function WeddingInvitation() {
  const [showInvitation, setShowInvitation] = useState(false);

  const handleOpenInvitation = () => {
    setShowInvitation(true);
    const audio = document.getElementById(
      "background-music"
    ) as HTMLAudioElement;
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Preview Screen */}
      {!showInvitation && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center p-6">
          <div className="absolute inset-0 z-[-1] opacity-20">
            <img
              src="/florescolaboracion.png"
              alt="Flores en acuarela decorativas"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-serif mb-4">¡Estás invitado!</h1>
          <p className="mb-6 text-stone-600">
            Josué & Ariana - 25 de Octubre 2025
          </p>
          <button
            onClick={handleOpenInvitation}
            className="px-6 py-3 bg-stone-800 text-white rounded-lg shadow-lg hover:bg-stone-700 transition"
          >
            Abrir Invitación
          </button>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${
          showInvitation ? "opacity-100" : "opacity-0"
        }`}
      >
        <MusicControl />
        <div className="relative z-10">
          <HeroSection />
          <OurStorySection />
          <CeremonySection />
          <ItinerarySection />
          <MenuDrinksSection />
          <DressCodeSection />
          <RsvpSection />
          <GiftRegistrySection />
          <ClosingSection />
        </div>
      </div>
    </div>
  );
}
