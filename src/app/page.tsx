import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Integrations from "./sections/Integrations";
import Introduction from "./sections/Introduction";
import LogoTicker from "./sections/LogoTicker";
import Navbar from "./sections/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
    </div>
  );
}
