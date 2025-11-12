import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const portfolioItems = [
  {
    id: 0,
    title: "Curso de português - Socorro Vieira",
    imageUrl: "./portfolio-01.png",
    description:
      "O Curso de Língua Portuguesa Socorro Vieira prepara estudantes do Ensino Médio e Superior para provas textuais de exames e vestibulares.",
  },
  {
    id: 1,
    title: "Conceito: Instituto Semente do Saber",
    imageUrl: "./portfolio-02.png",
    description:
      "O Instituto Semente do Saber é um conceito de escola particular, cujo briefing eu mesmo gerei com IA como orientação nos meus processos.",
  },
  {
    id: 2,
    title: "Conceito: Logotipo do app BetterStorm",
    imageUrl: "./portfolio-03.png",
    description:
      "BetterStorm é um conceito de aplicativo de finanças mobile, gerado pelo site goodbrief.io, voltado para pessoas com orçamento limitado.",
  },
  {
    id: 3,
    title: "Conceito: Campanha publicitária Barion",
    imageUrl: "./portfolio-04.png",
    description:
      "Este é um anúncio de revista, da marca de chocolates Barion, para um trabalho de minha graduação. ",
  },
  {
    id: 4,
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

    const onSelect = () => {
      if (api.scrollSnapList().length === 0) return;
      const count = api.scrollSnapList().length;
      const rawIndex = api.selectedScrollSnap();
      const normalizedIndex = ((rawIndex % count) + count) % count;
      setCurrent(normalizedIndex);
    };

    onSelect();

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="mt-32 max-w-[1248px] w-full" id="portfolio">
      <h1 className="text-[#002050] text-[28px] md:text-[48px] w-full mb-8 md:mb-28">
        Conheça alguns dos <br /> meus trabalhos
      </h1>
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent className="h-auto flex items-center my-6">
          {portfolioItems.map((item, index) => {
            return (
              <CarouselItem
                key={item.id}
                className="basis-full md:basis-1/2 lg:w-[32rem] flex items-end justify-center"
              >
                <div className="w-full flex items-center justify-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={cn(
                      "object-cover rounded-lg transition-all duration-500 ease-out",
                      index === current
                        ? "md:scale-110 z-20"
                        : "md:scale-90 z-10 md:opacity-60"
                    )}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="w-12 h-12 left-0 md:-left-16 bg-primary text-white rounded-full p-3 hover:bg-primary/90 hover:text-white transition-colors z-[100] border-0 hidden md:flex" />
        <CarouselNext className="w-12 h-12 right-0 md:-right-16 bg-primary text-white rounded-full p-3 hover:bg-primary/90 hover:text-white transition-colors z-[100] border-0 hidden md:flex" />
      </Carousel>

      <div className="flex items-center justify-center gap-2 mt-4">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              current === index ? "w-8 bg-primary" : "w-2 bg-primary/20"
            )}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="mt-8 max-w-2xl mx-auto min-h-[120px]">
        <h3 className="text-xl text-left font-semibold text-primary mb-2">
          {portfolioItems[current]?.title}
        </h3>
        <p className="text-sm text-justify text-muted-foreground">
          {portfolioItems[current]?.description}
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
