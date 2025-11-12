import Img from "../../../assets/hero_photo.png";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row md:items-center max-w-[1248px] w-full py-4 relative overflow-hidden"
      id="home"
    >
      <div className="order-2 md:order-none w-full md:w-1/2 pr-8 sm:mt-16">
        <p className="text-[#898989] text-[16px] lg:text-[24px]">
          Prazer, me chamo
        </p>
        <h1 className="text-[#002050] text-[32px] lg:text-[64px] lg:my-[-8px]">
          Gleidson Rodrigo
        </h1>
        <p className="text-[#AAAAAA] text-[16px] lg:text-[20px]">
          Branding & Design Digital
        </p>
        <a
          href="#contato"
          className="blue-btn transition delay-150 duration-300 ease-in-out my-6 lg:my-[32px] inline-block"
        >
          <p className="text-[16px] lg:text-[20px] text-[#FAF9F8]">
            Entrar em contato
          </p>
        </a>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=61575258052486"
            className="inline-block fill-[#83CDFF] hover:fill-[#47B5FF] hover:bg-[#47B5FF] bg-[#83CDFF] px-[12px] py-[6px]  md:px-[14px] md:py-[10px] rounded shadow-[1px_1px_2px_rgba(0,0,0,0.25)] transition delay-150 duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="14"
              height="22"
              viewBox="0 0 14 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1H9.72727C8.28064 1 6.89325 1.52678 5.87033 2.46447C4.8474 3.40215 4.27273 4.67392 4.27273 6V9H1V13H4.27273V21H8.63636V13H11.9091L13 9H8.63636V6C8.63636 5.73478 8.7513 5.48043 8.95588 5.29289C9.16047 5.10536 9.43795 5 9.72727 5H13V1Z"
                stroke="#003889"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          {/* ... SVG Instagram ... */}
          <a
            href="https://www.instagram.com/gr.design_oficial/"
            className="inline-block fill-[#83CDFF] hover:fill-[#47B5FF] hover:bg-[#47B5FF] bg-[#83CDFF] px-[8px] py-[6px]  md:px-[10px] md:py-[10px] rounded shadow-[1px_1px_2px_rgba(0,0,0,0.25)] transition delay-150 duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 5.5H16.51M6 1H16C18.7614 1 21 3.23858 21 6V16C21 18.7614 18.7614 21 16 21H6C3.23858 21 1 18.7614 1 16V6C1 3.23858 3.23858 1 6 1ZM15 10.37C15.1234 11.2022 14.9813 12.0522 14.5938 12.799C14.2063 13.5458 13.5931 14.1514 12.8416 14.5297C12.0901 14.9079 11.2384 15.0396 10.4078 14.9059C9.57713 14.7723 8.80976 14.3801 8.21484 13.7852C7.61992 13.1902 7.22773 12.4229 7.09407 11.5922C6.9604 10.7616 7.09207 9.90989 7.47033 9.15837C7.84859 8.40685 8.45419 7.79374 9.20098 7.40624C9.94778 7.01874 10.7978 6.87659 11.63 7C12.4789 7.12588 13.2649 7.52146 13.8717 8.12831C14.4785 8.73515 14.8741 9.52108 15 10.37Z"
                stroke="#003889"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* CONTAINER DA IMAGEM (Ajustado) */}
      {/* 1. REMOVIDO: 'absolute', 'right-0', 'top-1/2', '-translate-y-1/2' (quebravam o mobile)
        2. ALTERADO: 'justify-end' para 'justify-center' (no mobile)
        3. ADICIONADO: 'md:justify-end' (para manter o alinhamento desktop)
      */}
      <figure className="order-1 md:order-none md:relative md:translate-y-0 w-full md:w-1/2 md:h-[600px] flex justify-center md:justify-end">
        <img
          src={Img}
          alt="Foto do Gleidson, com moldura gráfica estilizada"
          /* 1. ALTERADO: 'w-[400px]' para 'w-full' (para ser responsivo no mobile)
            2. ADICIONADO: 'max-w-xs sm:max-w-sm' (para limitar o tamanho no mobile, como no protótipo)
            3. MANTIDO: 'md:w-[500px] lg:w-[600px]' (para o desktop, como você pediu)
          */
          className="h-auto w-full max-w-xs sm:max-w-sm md:w-[500px] lg:w-[600px] object-contain md:h-full"
        />
      </figure>
    </section>
  );
}
