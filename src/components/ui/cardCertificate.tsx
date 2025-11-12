interface Certificate {
  id: number;
  title: string;
  description: string;
}

interface CardProps {
  certificate: Certificate;
  onClick?: (certificate: Certificate) => void;
}

export default function Card({ certificate, onClick }: CardProps) {
  return (
    // Correção: Trocado 'md:h-[342px]' por 'md:min-h-[342px]'
    <div className="w-[364px] min-h-[236px] md:w-[424px] md:min-h-[342px] rounded-md bg-[#FFF] shadow-[0px_2px_2px_rgba(0,0,0,0.25)] p-6 flex flex-col">
      {/* 2. Este 'div' agora cresce, empurrando o botão para baixo */}
      <div className="flex-grow">
        {/* 3. Removida altura fixa 'h-[80px]' */}
        <h3 className="text-[#454647] text-[20px] md:text-[24px] px-4 py-1">
          {certificate.title}
        </h3>
        {/* 4. Removidas alturas fixas 'h-[64px]' e 'md:h-[94px]' */}
        <p className="text-[#898989] text-[14px] md:text-[16px]/6 px-5 md:py-3 break-words max-w-[286px] md:max-w-[320px]">
          {certificate.description}
        </p>
      </div>

      {/* 5. Removida margem fixa 'mt-[38px]' */}
      <div className="justify-end flex">
        <button
          onClick={() => onClick?.(certificate)}
          className="bg-[#B8E3FF] hover:bg-[#83CDFF] px-[14px] py-[8px] md:px-[24px] md:py-[16px] rounded-md transition delay-150 duration-300 ease-in-out"
        >
          <p className="text-[#002050] text-[12px] md:text-[16px] font-[700]">
            Exibir →{" "}
          </p>
        </button>
      </div>
    </div>
  );
}
