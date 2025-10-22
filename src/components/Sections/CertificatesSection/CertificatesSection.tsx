import { useState, useEffect } from "react";
import Card from "../../ui/cardCertificate";
import Overlay from "./Overlay";
import { certificatesMock } from "../../../mock/certificatesMock";
import type { Certificate } from "../../../mock/certificate";
// Importações da feature branch (Carrossel)
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CertificatesSection() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  useEffect(() => {
    setCertificates(certificatesMock);
  }, []);

  // Função para lidar com o clique (preparando para a task que criamos)
  const handleCertificateClick = (certificate: Certificate) => {
    // Por enquanto, apenas abre as imagens como antes
    setSelectedImages(certificate.images);

    // Lembre-se da task:
    // if (certificate.type === 'pdf' && certificate.pdfUrl) {
    //   window.open(certificate.pdfUrl, '_blank', 'noopener,noreferrer');
    // } else if (certificate.type === 'image') {
    //   setSelectedImages(certificate.images);
    // }
  };

  return (
    // 1. Usamos a base da 'main' (flex-col, centralizado, com padding)
    <section className="flex flex-col items-center mx-auto max-w-[1248px] gap-[24px] mt-32 px-4 md:px-0">
      {/* 2. Usamos o Título unificado da 'main' */}
      <h2 className="text-[#002050] text-[28px] md:text-[48px] w-full mb-16">
        Certificados
      </h2>

      {/* 3. Lógica de Desktop: O grid da 'main', mas escondido em mobile */}
      <div className="hidden md:grid w-full gap-[12px] md:gap-[24px] md:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            className="col-span-4 md:col-span-1 flex justify-center"
            key={certificate.id} // Adicionado o 'key' que estava no DesktopCertificates
          >
            <Card
              title={certificate.title}
              description={certificate.description}
              onClick={() => handleCertificateClick(certificate)}
            />
          </div>
        ))}
      </div>

      {/* 4. Lógica de Mobile: O Carrossel da 'feature branch', escondido em desktop */}
      <div className="md:hidden w-full max-w-[390px]">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2">
            {certificates.map((certificate) => (
              <CarouselItem className="pl-2" key={certificate.id}>
                <Card
                  title={certificate.title}
                  description={certificate.description}
                  onClick={() => handleCertificateClick(certificate)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* 5. Overlay compartilhado (já estava em ambas as branches) */}
      {selectedImages && (
        <Overlay
          images={selectedImages}
          onClose={() => setSelectedImages(null)}
        />
      )}
    </section>
  );
}
