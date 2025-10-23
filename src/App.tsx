import { Header } from "./components/common/header";
import AboutSection from "./components/Sections/AboutSection/about-section";
import CertificatesSection from "./components/Sections/CertificatesSection";
import HeroSection from "./components/Sections/HeroSection";
import PortfolioSection from "./components/Sections/PortfolioSection/potfolio";

function App() {
  return (
    <div className="flex items-center justify-center flex-col px-[10%] mt-5 py-6">
      <Header />
      <HeroSection />
      <AboutSection />
      <CertificatesSection />
      <PortfolioSection />
    </div>
  );
}

export default App;
