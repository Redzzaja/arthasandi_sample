import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoTicker />
    </main>
  );
}
