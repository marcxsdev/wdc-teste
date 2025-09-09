import Image from "next/image";
import EmailInput from "../ui/EmailInput";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden border-b lg:border-soft-gold">
      {/* Imagem de fundo */}
      {/* mobile */}
      <Image
        src="/images/hero/BGCEL-1.png"
        alt="Imagem de fundo da seção principal para mobile"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="lg:hidden"
      />
      {/* desktop */}
      <Image
        src="/images/hero/BGD.png"
        alt="Imagem de fundo da seção principal para desktop"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="hidden lg:block"
      />

      {/* Conteudo */}
      <div className="relative z-10 flex flex-col items-center gap-4 lg:gap-10 h-full text-center pt-8 px-5 lg:items-start lg:text-left lg:justify-center lg:container lg:mx-auto lg:pl-16 lg:pr-12">
        <div className="relative w-46 h-14 lg:w-101 lg:h-31">
          <Image
            src="/images/hero/logo.png"
            alt="Logo do evento"
            fill
            quality={100}
            priority
          />
        </div>

        <h1 className="text-3xl font-paris2024 text-center leading-7 text-soft-pink lg:hidden">
          Meu Curso de Ginástica Íntima gratuito dia 13/08
        </h1>

        {/* Parágrafo apenas mobile */}
        <p className="text-white text-center font-main text-base font-light leading-5 lg:hidden ">
          Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula, onde
          eu vou ensinar todos os exercícios do meu curso de Ginástica Íntima.
          <span className="font-extrabold text-soft-gold">
            dia 13 de agosto, às 20h, horário de Brasília
          </span>
          . Cadastre-se, gratuitamente, e receba o link da live.
        </p>

        {/* Parágrafos apenas desktop */}
        <div className="flex flex-col gap-6 max-w-133">
          <p className="hidden text-white font-main text-3xl font-light leading-8 lg:block lg:text-left lg:text-xl lg:font-normal">
            Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula
            on-line e gratuita, onde eu vou ensinar todos os exercícios do meu
            curso de Ginástica Íntima para todas as mulheres que se preocupam em
            desenvolver a própria intimidade.
          </p>
          <p className="hidden text-white font-main text-3xl font-light leading-8 lg:block lg:text-left lg:text-xl lg:font-normal">
            <span className="text-soft-gold font-extrabold">
              Ao vivo, dia 13 de agosto, às 20h, horário de Brasília.
            </span>{" "}
            Cadastre-se, gratuitamente, e receba o link da live
          </p>
        </div>

        {/* Input pro email */}
        <div className="flex flex-col gap-4">
          <EmailInput
            buttonBgColor="bg-soft-gold"
            arrowColor="text-deep-blue"
          />

          {/* Texto de LGPD (apenas desktop) */}
          <p className="hidden text-white text-xs uppercase font-main font-extralight lg:block">
            Não se preocupe, seus dados estão protegidos de acordo com a lei
            LGPD.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
