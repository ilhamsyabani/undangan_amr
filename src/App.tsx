import { HeroSection } from "./components/HeroSection";
import { CoupleSection } from "./components/CoupleSection";
import { CountdownSection } from "./components/CountdownSection";
import { EventSection } from "./components/EventSection";
import { RSVPSection } from "./components/RSVPSection";
import { FooterSection } from "./components/FooterSection";
import { OpeningModal } from "./components/OpeningModal";
import { useState, useEffect } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    // Get guest name from URL parameter
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to") || params.get("nama") || "";
    setGuestName(name);
  }, []);

  return (
    <div className="min-h-screen">
      <OpeningModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        guestName={guestName}
      />
      <HeroSection />
      <CoupleSection />
      <CountdownSection />
      <EventSection />
      <RSVPSection />
      <FooterSection />
    </div>
  );
}
