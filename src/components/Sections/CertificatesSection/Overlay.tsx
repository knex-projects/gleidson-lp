interface OverlayProps {
  images: string[];
  onClose: () => void;
}

export default function Overlay({ images, onClose }: OverlayProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-auto"
      onClick={onClose}
    >
      <div
        className="relative mr-8 md:mr-0 p-6 rounded-xl w-[388px] h-[558px] md:w-[1114px] md:h-[838px] centralize"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-4 items-center">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Certificado ${idx + 1}`}
              className="max-h-[80vh] w-auto rounded-md shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
