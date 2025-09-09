import Image from "next/image";
import EmailInput from "../ui/EmailInput";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden border-b lg:border-soft-gold">
      {/* Imagem de fundo */}
      <Image
        src="/images/hero/BGCEL-1.png"
        alt="Imagem de fundo da seção hero"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Conteudo da seção hero */}
      <div className="relative z-10 flex flex-col items-center gap-4 h-full text-center pt-8 px-5">
        <Image
          src="/images/hero/logo.png"
          alt="Logo do evento"
          width={184}
          height={56}
        />

        {/* Titulo principal */}
        <h1 className="text-3xl font-paris2024 text-center leading-7 text-soft-pink">
          Meu Curso de Ginástica Íntima gratuito dia 13/08
        </h1>

        {/* Parágrafo */}
        <p className="text-white text-center font-main text-base font-light leading-5">
          Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula, onde
          eu vou ensinar todos os exercícios do meu curso de Ginástica Íntima.
          <span className="font-extrabold text-soft-gold">
            dia 13 de agosto, às 20h, horário de Brasília
          </span>
          . Cadastre-se, gratuitamente, e receba o link da live.
        </p>

        {/* Input pro email */}
        <EmailInput buttonBgColor="bg-soft-gold" arrowColor="text-deep-blue" />
      </div>
    </section>
  );
};

export default HeroSection;
