import type { Certificate } from "./certificate";

export const certificatesMock: Certificate[] = [
  {
    id: 1,
    title: "Marketing Digital para Empresas",
    description:
      "Certificado de conclusão da trilha Marketing Digital para Sua Empresa: Primeiros Passos (Sebrae), carga horária de 6h, realizado entre 29/11/2024 e 02/12/2024.",
    images: ["/certificates/marketing-1.png"],
    pdfURL: "/certificates/marketing.pdf",
    type: 'pdf',
  },
  {
    id: 2,
    title: "Tecnólogo em Design Gráfico",
    description:
      "Curso Superior em Tecnologia de Design Gráfico, em 05 de Junho de 2024, e a colação de Grau em 07 de Junho de 2024.",
    images: [
      "/certificates/graphic-designer-1.png",
      "/certificates/graphic-designer-2.png",
    ],
    pdfURL: "/certificates/graphic-designer.pdf",
    type: 'pdf',
  },
  {
    id: 3,
    title: "Nivel 3 Advanced língua inglesa",
    description:
      "Conclusão do  Nível 3 - ADVANCED do curso de língua inglesa NEW UBEST, em 06/06/2022",
    images: [
      "/certificates/UBEST-1.png",
      "/certificates/UBEST-2.png",
    ],
    pdfURL: "/certificates/UBEST.pdf",
    type: 'pdf',
  },
  {
    id: 4,
    title: "Branding Construção de Marca",
    description:
      "Certificado de conclusão da trilha Branding Construção de Marca (GINEAD), carga horária de 60h, concluído em 18/04/2024.",
    images: [
      "/certificates/branding-1.png",
      "/certificates/branding-2.png",
    ],
    pdfURL: "/certificates/branding.pdf",
    type: 'pdf',
  },
  {
    id: 5,
    title: "Teoria de Design",
    description:
      "Certificado de conclusão da trilha Teoria de Design (GINEAD), carga horária de 100h, concluído em 21/08/2024.",
    images: [
      "/certificates/design-theory-1.png",
      "/certificates/design-theory-2.png",
    ],
    pdfURL: "/certificates/design-theory.pdf",
    type: 'pdf',
  },
  {
    id: 6,
    title: "Estudo da Cor e Tipografia",
    description:
      "Certificado de conclusão da trilha Estudo de Cor e Tipografia (GINEAD), carga horária de 10h, concluído em 20/04/2024.",
    images: [
      "/certificates/color-tipography-1.png",
      "/certificates/color-tipography-2.png",
    ],
    pdfURL: "/certificates/color-tipography.pdf",
    type: 'pdf',
  },
];
