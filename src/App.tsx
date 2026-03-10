import { useState } from "react";
import Hero from "./components/landing/Hero";
import Benefits from "./components/landing/Benefits";
import HowItWorks from "./components/landing/HowItWorks";
import OfferDetails from "./components/landing/OfferDetails";
import FAQ from "./components/landing/FAQ";
import CTAStrong from "./components/landing/CTAStrong";
import Footer from "./components/landing/Footer";
import ValorSimulacaoModal from "./components/landing/ValorSimulacaoModal";

function App() {
  const [modalSimulacaoAberto, setModalSimulacaoAberto] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main>
        <Hero onOpenSimulacao={() => setModalSimulacaoAberto(true)} />
        <Benefits onOpenSimulacao={() => setModalSimulacaoAberto(true)} />
        <HowItWorks />
        <OfferDetails onOpenSimulacao={() => setModalSimulacaoAberto(true)} />
        <FAQ />
        <CTAStrong />
      </main>
      <Footer />
      <ValorSimulacaoModal
        isOpen={modalSimulacaoAberto}
        onClose={() => setModalSimulacaoAberto(false)}
      />
    </div>
  );
}

export default App;
