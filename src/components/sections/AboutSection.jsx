import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-deep-blue flex flex-col gap-2.5 items-center relative ">
      {/* Container de todo o conteúdo para desktop */}
      <div className="lg:container lg:mx-auto lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-[6px] lg:h-[852px] lg:pt-20 lg:mt-[-60px]">
        {/* Container da linha e do texto */}
        <div className="flex flex-col gap-8 mx-6 pt-20 lg:flex-row lg:items-center lg:gap-[24px] lg:mx-0 lg:pt-0">
          {/* Linha decorativa */}
          <div className="w-[16px] h-[229px] relative hidden lg:block">
            <Image
              src="/images/about/Group33.png"
              alt="Linha decorativa"
              fill
              quality={100}
              className="object-cover"
            />
          </div>

          {/* Container do título e parágrafos */}
          <div className="flex flex-col gap-8 lg:w-[556px]">
            <h2 className="text-soft-gold font-paris2024 text-5xl hidden lg:block">
              Quem vai te ensinar
            </h2>
            <p className="text-white font-main text-lg font-light leading-5.5 lg:text-2xl lg:leading-7.5">
              Cátia Damasceno é fisioterapeuta especializada em uroginecologia,
              e iniciou seu trabalho ensinando exercícios de Ginástica Íntima
              para o fortalecimento da musculatura de mulheres com problema de
              flacidez íntima após o parto.
            </p>
            <p className="text-white font-main text-lg font-light leading-5.5 lg:text-2xl lg:leading-7.5">
              Desde então, se especializou em Ginástica Íntima feminina e, ao
              longo de mais de 15 anos de carreira, seus cursos e palestras já
              ajudaram milhares de mulheres pelo Brasil. Ao todo, são mais de
              150 mil alunas participando ativamente das suas metodologias.
            </p>
            <p className="text-white font-main text-lg font-light leading-5.5 lg:text-2xl lg:leading-7.5">
              Atualmente, Cátia é bastante reconhecida por esse trabalho e se
              tornou a precursora da Ginástica Íntima no Brasil, tornando-se a
              maior referência nacional no assunto. Já participou de vários
              programas influentes na mídia, como o “Programa do Jô”, “Tonight
              Show'' na CNN, “Se Joga”, também da Rede Globo, e vários outros.
            </p>
          </div>
        </div>

        {/* imagem principal */}
        <div className="w-[234px] h-[366px] relative mx-auto lg:w-[545px] lg:h-[852px] lg:mt-[-80px] lg:mx-0">
          <Image
            src="/images/about/catia.png"
            alt="Cátia Damasceno"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
