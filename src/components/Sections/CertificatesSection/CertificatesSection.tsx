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

  return (
    <section>
      <div className="hidden md:block">
        <DesktopCertificates
          certificates={certificates}
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      </div>
      <div className="md:hidden">
        <MobileCertificates
          certificates={certificates}
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      </div>
    </section>
  );
}

type DesktopCertificatesProps = {
  certificates: Certificate[];
  selectedImages: string[] | null;
  setSelectedImages: React.Dispatch<React.SetStateAction<string[] | null>>;
};

function DesktopCertificates({
  certificates,
  selectedImages,
  setSelectedImages,
}: DesktopCertificatesProps) {
  return (
    <section className="justify-center items-center mx-auto max-w-[1248px] grid gap-[24px] lg:[grid-template-columns:repeat(6,200px)] mb-4 ml-auto">
      <h2 className="text-[#002050] text-[48px] col-span-6 md:mb-[36px]">
        Certificados
      </h2>
      <div className="w-[390px] mx-auto max-w-[1248px] grid gap-[24px] lg:[grid-template-columns:repeat(6,200px)]">
        {certificates.map((certificate) => (
          <div
            className="col-span-2 flex justify-center"
            key={certificate.id}
          >
            <Card
              title={certificate.title}
              description={certificate.description}
              onClick={() => setSelectedImages(certificate.images)}
            />
          </div>
        ))}
        {selectedImages && (
          <Overlay
            images={selectedImages}
            onClose={() => setSelectedImages(null)}
          />
        )}
      </div>
    </section>
  );
}

function MobileCertificates({
  certificates,
  selectedImages,
  setSelectedImages,
}: DesktopCertificatesProps) {
  return (
    <section>
      <h2 className="text-[#002050] text-[28px] md:text-[48px] mb-[36px]">
        Certificados
      </h2>
      <Carousel className="w-[368px] h-auto pb-4 -ml-4 ">
        <CarouselContent className="-ml-2">
          {certificates.map((certificate) => (
            <CarouselItem className="pl-2" key={certificate.id}>
              <Card
                title={certificate.title}
                description={certificate.description}
                onClick={() => setSelectedImages(certificate.images)}
              />
              <br />
            </CarouselItem>
          ))}
          {selectedImages && (
            <Overlay
              images={selectedImages}
              onClose={() => setSelectedImages(null)}
            />
          )}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
