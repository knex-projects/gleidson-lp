import { Header } from "./components/common/header";
import CertificatesSection from "./components/Sections/CertificatesSection";
import HeroSection from "./components/Sections/HeroSection";
import PortfolioSection from "./components/Sections/PortfolioSection/potfolio";

function App() {
  return (
    <div className="px-[10%] mt-5 py-6">
      <Header />
      <HeroSection />
      <CertificatesSection />
      <PortfolioSection />
    </div>
  );
}

export default App;
