// 1. Imports adicionados
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
  // 2. Ref para o formulário
  const formRef = useRef<HTMLFormElement>(null);

  // 3. State para o status do envio
  const [status, setStatus] = useState(""); // "enviando", "sucesso", "erro"

  // 4. Lógica de envio (handleSubmit) atualizada
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("enviando");

    // Lembre-se de criar sua conta no EmailJS e substituir os valores!
    emailjs
      .sendForm(
        "service_llx9yqo", // Cole seu Service ID do EmailJS
        "template_qu6f1i1", // Cole seu Template ID
        formRef.current, // O formulário
        "46WIxnAcV8BvKptrv" // Cole sua Public Key
      )
      .then(
        (result) => {
          console.log("EmailJS Sucesso:", result.text);
          setStatus("sucesso");
          formRef.current?.reset(); // Limpa o formulário
        },
        (error) => {
          console.error("EmailJS Erro:", error.text);
          setStatus("erro");
        }
      );
  };

  return (
    // Fundo azul escuro, texto claro, padding vertical
    <footer className="bg-[#002050] text-white py-16 md:py-24 mt-32">
      <div className="mx-auto max-w-[1248px] px-4 md:px-0">
        {/* Grid principal: 1 coluna no mobile, 2 no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Coluna 1: Informações de Contato (Sem mudanças) */}
          <div className="flex flex-col gap-8">
            <h3 className="text-[16px] md:text-2xl font-semibold text-white">
              Sinta-se a vontade para interagir comigo!
            </h3>

            {/* Lista de Contatos */}
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

            {/* Ícones Sociais (Sem mudanças) */}
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#83CDFF] hover:bg-[#47B5FF] p-2 rounded-md text-[#003889] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-[#83CDFF] hover:bg-[#47B5FF] p-2 rounded-md text-[#003889] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Formulário */}
          {/* 5. Adicionado ref={formRef} */}
          <form
            ref={formRef}
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            {/* Grid interno do form: 1 col mobile, 2 col desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="nome" className="text-white">
                  Nome
                </Label>
                <Input
                  id="nome"
                  type="text"
                  name="nome" // 6. Adicionado 'name'
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
                  name="email" // 7. Adicionado 'name'
                  placeholder="Seu email"
                  className="bg-white text-[#AAAAAA] rounded-[4px]"
                  required
                />
              </div>
            </div>

            {/* Textarea (sempre 1 coluna) */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="mensagem" className="text-white">
                Mensagem
              </Label>
              <Textarea
                id="mensagem"
                name="mensagem" // 8. Adicionado 'name'
                placeholder="Sua mensagem"
                className="bg-white text-[#AAAAAA] h-44 resize-none rounded-[4px]"
                rows={10}
                required
              />
            </div>

            {/* Botão (alinhado à direita) */}
            {/* 9. Lógica de status e botão */}
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
                disabled={status === "enviando"} // Desabilita enquanto envia
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

        {/* Copyright (com borda superior) */}
        <div className="mt-16 border-t border-gray-700 pt-8">
          <p className="text-center md:text-left text-gray-400 text-sm">
            Todos os direitos reservados, Gleidson Rodrigo
          </p>
        </div>
      </div>
    </footer>
  );
}
