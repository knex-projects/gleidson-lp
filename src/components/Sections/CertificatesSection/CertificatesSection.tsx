import { useState, useEffect } from "react";
import Card from "../../ui/cardCertificate";
import Overlay from "./Overlay";
import { certificatesMock } from "../../../mock/certificatesMock";
import type { Certificate } from "../../../mock/certificate";
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

  const handleCertificateClick = (certificate: Certificate) => {
    if (certificate.type === "pdf" && certificate.pdfURL) {
      window.open(certificate.pdfURL, "_blank");
      return;
    } else {
      setSelectedImages(certificate.images);
    }
  };

  return (
    <section
      className="flex flex-col items-center  max-w-[1248px] w-full gap-[24px] mt-32"
      id="certificados"
    >
      <h2 className="text-[#002050] text-[28px] md:text-[48px] w-full mb-16">
        Certificados
      </h2>

      <div className="hidden md:grid w-full gap-[12px] md:gap-[24px] md:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            className="col-span-4 md:col-span-1 flex justify-center"
            key={certificate.id}
          >
            <Card
              certificate={certificate}
              onClick={() => handleCertificateClick(certificate)}
            />
          </div>
        ))}
      </div>

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
                  certificate={certificate}
                  onClick={() => handleCertificateClick(certificate)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {selectedImages && (
        <Overlay
          images={selectedImages}
          onClose={() => setSelectedImages(null)}
        />
      )}
    </section>
  );
}
