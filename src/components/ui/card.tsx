interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export default function Card({ title, description, onClick }: CardProps) {
  return (
    <div className="w-[364px] min-h-[236px] md:w-[424px] md:h-[342px] rounded-md bg-[#FFF] shadow-[0px_2px_2px_rgba(0,0,0,0.25)] items-center p-6">
      <h3 className="text-[#454647] text-[20px] md:text-[24px] px-4 py-1 h-[80px]">
        {title}
      </h3>
      <p className="text-[#898989] text-[14px] md:text-[16px]/6 px-5 md:py-3 break-words max-w-[286px] h-[64px] md:max-w-[320px] md:h-[94px]">
        {description}
      </p>
      <div className="justify-end flex mt-[38px]">
        <button
          onClick={onClick}
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
