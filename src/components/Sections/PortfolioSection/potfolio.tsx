"use client"; // Necessário para hooks como useState e useEffect em Next.js 13+ App Router

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi, // Importe o tipo da API
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils"; // Importe sua função 'cn' se ainda não tiver

// Seus dados do portfólio
export const portfolioItems = [
  {
    id: 1,
    title: "Curso de português - Socorro Vieira",
    imageUrl: "./portfolio-01.png",
    description:
      "O Curso de Língua Portuguesa Socorro Vieira prepara estudantes do Ensino Médio e Superior para provas textuais de exames e vestibulares.",
  },
  {
    id: 2,
    title: "Conceito: Instituto Semente do Saber",
    imageUrl: "./portfolio-02.png",
    description:
      "O Instituto Semente do Saber é um conceito de escola particular, cujo briefing eu mesmo gerei com IA como orientação nos meus processos.",
  },
  {
    id: 3,
    title: "Conceito: Logotipo do app BetterStorm",
    imageUrl: "./portfolio-03.png",
    description:
      "BetterStorm é um conceito de aplicativo de finanças mobile, gerado pelo site goodbrief.io, voltado para pessoas com orçamento limitado.",
  },
  {
    id: 4,
    title: "Conceito: Campanha publicitária Barion",
    imageUrl: "./portfolio-04.png",
    description:
      "Este é um anúncio de revista, da marca de chocolates Barion, para um trabalho de minha graduação. ",
  },
  {
    id: 5,
    title: "Conceito: Cartaz do 35º Prêmio Design MCB",
    imageUrl: "./portfolio-05.png",
    description:
      "O Museu da Casa Brasileira (MCB) é uma organização sem fins lucrativos voltada à valorização da identidade cultural brasileira pelo artesanato, arquitetura e design. ",
  },
];

const PortfolioSection = () => {
  // 1. Estados para controlar a API do carrossel e o slide atual
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  // 2. Efeito para ouvir as mudanças de slide e atualizar o estado 'current'
  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Define o slide inicial e ouve por mudanças
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    // Um container geral para a seção
    <div className="w-full max-w-2xl mx-auto p-5 flex flex-col items-center">
      {/* 3. O componente Carousel */}
      <Carousel
        setApi={setApi} // Conecta o estado da API ao carrossel
        opts={{
          align: "start", // Alinha os slides pelo início
          loop: true, // Faz o carrossel ser infinito
        }}
        className="w-full"
      >
        {/* Adicionado ml- (margem negativa) para ajudar no efeito vazado */}
        <CarouselContent className="-ml-4">
          {portfolioItems.map((item) => (
            // Apenas a imagem vai dentro do slide
            <CarouselItem
              key={item.id}
              className="pl-4 md:basis-1/2 lg:basis-2/3"
            >
              <Card className="py-0 bg-transparent">
                <CardContent className="p-0">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* 4. Pontos de navegação (Dots) criados manualmente */}
      <div className="flex items-center justify-center gap-2 py-4">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              current === index + 1 ? "w-4 bg-primary" : "bg-primary/20"
            )}
          />
        ))}
      </div>

      {/* 5. Título e descrição RENDERIZADOS FORA do carrossel */}
      <div className="mt-4 text-center">
        <h3 className="text-[16px]  text-primary">
          {portfolioItems[current - 1]?.title}
        </h3>
        <p className="mt-2 text-[14px] text-justify text-muted-foreground">
          {portfolioItems[current - 1]?.description}
        </p>
      </div>
    </div>
  );
};

export default PortfolioSection;
