import { useState, useEffect } from "react";
import Card from "../../ui/cardCertificate";
import Overlay from "./Overlay";
import { certificatesMock } from "../../../mock/certificatesMock";
import type { Certificate } from "../../../mock/certificate";

export default function CertificatesSection() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  useEffect(() => {
    setCertificates(certificatesMock);
  }, []);

  return (
    <section className="md:justify-center items-center mx-auto max-w-[1248px] grid gap-[24px] lg:[grid-template-columns:repeat(6,200px)] ml-4 md:ml-auto">
      <h2 className="text-[#002050] text-[28px] md:text-[48px] col-span-4 md:col-span-6 md:mb-[36px]">
        Certificados
      </h2>
      <div className="w-[390px] md:mx-auto md:max-w-[1248px] grid gap-[12px] md:gap-[24px] lg:[grid-template-columns:repeat(6,200px)] carroussel">
        {certificates.map((certificate) => (
          <div className="col-span-4 md:col-span-2 flex justify-center">
            <Card
              key={certificate.id}
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
