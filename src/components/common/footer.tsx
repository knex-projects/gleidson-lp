import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("enviando");

    emailjs
      .sendForm(
        "service_llt2a26",
        "template_wpy8ihb",
        formRef.current,
        "0nV_J6IbhbsPKt20w"
      )
      .then(
        (result) => {
          console.log("EmailJS Sucesso:", result.text);
          setStatus("sucesso");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Erro:", error.text);
          setStatus("erro");
        }
      );
  };

  return (
    <footer
      className="bg-[#002050] text-white py-16 md:py-24 mt-32"
      id="contato"
    >
      <div className="mx-auto max-w-[1248px] px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="flex flex-col gap-8">
            <h3 className="text-[16px] md:text-2xl font-semibold text-white">
              Sinta-se a vontade para interagir comigo!
            </h3>

            <ul className="flex flex-col gap-4 text-[#D4D3D3]">
              <li className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#E83283]" />
                <span>Email: grdesignpb.contato@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#E83283]" />
                <span>Telefone: +55 (83) 87971512</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#E83283]" />
                <span>Endereço: Rua Luís Gomes de Araújo</span>
              </li>
            </ul>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575258052486"
                className="bg-[#83CDFF] hover:bg-[#47B5FF] p-2 rounded-md text-[#003889] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/gr.design_oficial/"
                className="bg-[#83CDFF] hover:bg-[#47B5FF] p-2 rounded-md text-[#003889] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="nome" className="text-white">
                  Nome
                </Label>
                <Input
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  className="bg-white text-[#AAAAAA] rounded-[4px]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  className="bg-white text-[#AAAAAA] rounded-[4px]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="mensagem" className="text-white">
                Mensagem
              </Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                placeholder="Sua mensagem"
                className="bg-white text-[#AAAAAA] h-44 resize-none rounded-[4px]"
                rows={10}
                required
              />
            </div>

            <div className="flex justify-end items-center gap-4">
              {status === "sucesso" && (
                <p className="text-green-400">Mensagem enviada!</p>
              )}
              {status === "erro" && (
                <p className="text-red-400">Falha ao enviar.</p>
              )}
              <Button
                type="submit"
                className="bg-[#E83283] text-white hover:bg-[#d02c73] transition-colors rounded-[4px]"
                disabled={status === "enviando"}
              >
                {status === "enviando" ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8">
          <p className="text-center md:text-left text-gray-400 text-sm">
            Todos os direitos reservados, Gleidson Rodrigo
          </p>
        </div>
      </div>
    </footer>
  );
}
