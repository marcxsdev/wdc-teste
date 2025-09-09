import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-deep-blue flex flex-col gap-2.5 items-center">
      <div className="flex flex-col gap-8 mx-6 pt-20">
        <p className="text-white font-main text-lg font-light leading-5.5">
          Cátia Damasceno é fisioterapeuta especializada em uroginecologia, e
          iniciou seu trabalho ensinando exercícios de Ginástica Íntima para o
          fortalecimento da musculatura de mulheres com problema de flacidez
          íntima após o parto.
        </p>
        <p className="text-white font-main text-lg font-light leading-5.5">
          Desde então, se especializou em Ginástica Íntima feminina e, ao longo
          de mais de 15 anos de carreira, seus cursos e palestras já ajudaram
          milhares de mulheres pelo Brasil. Ao todo, são mais de 150 mil alunas
          participando ativamente das suas metodologias.
        </p>
        <p className="text-white font-main text-lg font-light leading-5.5">
          Atualmente, Cátia é bastante reconhecida por esse trabalho e se tornou
          a precursora da Ginástica Íntima no Brasil, tornando-se a maior
          referência nacional no assunto. Já participou de vários programas
          influentes na mídia, como o “Programa do Jô”, “Tonight Show'' na CNN,
          “Se Joga”, também da Rede Globo, e vários outros.
        </p>
      </div>

      <Image
        src="/images/about/catia.png"
        alt="Catia Damasceno"
        width={234}
        height={366}
        quality={100}
      />
    </section>
  );
};

export default AboutSection;
