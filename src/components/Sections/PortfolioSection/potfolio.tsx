"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Seus dados do portfólio...
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
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="p-5">
      <h1 className="text-3xl text-primary-foreground">
        Conheça alguns dos <br /> meus trabalhos
      </h1>
      <div className="w-full max-w-4xl py-16 mx-auto flex flex-col items-center">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {portfolioItems.map((item, index) => (
              <CarouselItem
                key={item.id}
                // ▼▼▼ LINHA ALTERADA AQUI ▼▼▼
                className="pl-4 basis-11/12 md:basis-[400px]"
              >
                <div
                  className={cn(
                    "transition-all duration-300 ease-in-out",
                    current === index + 1
                      ? "scale-100 opacity-100"
                      : "scale-80 opacity-50"
                  )}
                >
                  <Card className="w-full py-0 bg-transparent border-none">
                    <CardContent className="p-0">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>

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

        <div className="mt-4 text-center h-32 md:h-28">
          <h3 className="text-[16px] text-primary font-semibold">
            {portfolioItems[current - 1]?.title}
          </h3>
          <p className="mt-2 text-[14px] text-justify md:text-center text-muted-foreground max-w-lg mx-auto">
            {portfolioItems[current - 1]?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
