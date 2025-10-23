import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Brush } from "lucide-react";

export default function SkillsAndEducationSection() {
  return (
    <section className="mx-auto max-w-[1248px] mt-28 px-4 md:px-0">
      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8">
        <div className="w-full md:w-1/2">
          <_CardFormacoes />
        </div>
        <div className="w-full md:w-1/2">
          <_CardHabilidades />
        </div>
      </div>
    </section>
  );
}

function _CardFormacoes() {
  return (
    <Card className="h-full pt-8 px-2 mb:px-16 pb-20">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-secondary-foreground rounded-[8px]">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <span className="text-primary-foreground text-3xl font-bold">
            Formações
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-1 flex flex-col gap-6">
        <div>
          <p className="text-gray-700 text-[16px]">
            <strong className="text-gray-900">Pós-graduação:</strong> MBA em
            Branding e Design Digital, Centro Universitário Internacional
            UNINTER (2023 - 2025)
          </p>
        </div>
        <div>
          <p className="text-gray-700 text-[16px]">
            <strong className="text-gray-900">Graduação:</strong> Tecnólogo em
            Design Gráfico, Centro Universitário Internacional UNINTER (2022 -
            2024)
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function _CardHabilidades() {
  return (
    <Card className="h-full pt-8 px-2 mb:px-16 pb-20">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-secondary-foreground rounded-[8px]">
            <Brush className="w-5 h-5 text-primary" />
          </div>
          <span className="text-primary-foreground text-3xl font-bold">
            Habilidades
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-0 gap-x-6">
          <ul className="flex flex-col gap-y-2 list-disc list-outside text-muted-foreground text-[16px] pl-5">
            <li>Perfis de cores RGB & CMYK</li>
            <li>Teoria das cores</li>
            <li>Teoria da Gestalt</li>
          </ul>

          <ul className="flex flex-col gap-y-2 list-disc list-outside text-muted-foreground text-[16px] pl-5">
            <li>
              Metodologias em Design
              <br />
              Thinking
            </li>
            <li>
              Fundamentos de
              <br />
              composição
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
