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
    <section className="flex flex-col items-center max-w-[1248px] gap-[24px] mt-32 md:px-0">
      <h2 className="text-[#002050] text-[28px] md:text-[48px] w-full mb-16">
        Certificados
      </h2>

      <div className="w-[390px] md:w-full grid gap-[12px] md:gap-[24px] md:grid-cols-3 carroussel">
        {certificates.map((certificate) => (
          <div className="col-span-4 md:col-span-1 flex justify-center">
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
