import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Strengths from "@/components/Strengths";
import Evidence from "@/components/Evidence";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Verification from "@/components/Verification";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProofStrip />
        <Strengths />
        {/* <Evidence /> */}
        <Projects />
        <Process />
        <Verification />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}