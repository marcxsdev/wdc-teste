import Image from "next/image";
import Carousel from "../ui/Carousel";

const CarouselSection = () => {
  return (
    <section className="relative flex flex-col lg:items-center">
      <Image
        src="/images/carousel/carouselbg.png"
        alt="Imagem de fundo da seção de carrossel para desktop"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="hidden lg:block z-0"
      />

      <div className="bg-deep-blue relative mx-5 rounded-2xl overflow-hidden border-3 border-soft-gold lg:w-[1144px] lg:h-[244px] mt-[-84px] lg:mt-[-38] ">
        <Image
          src="/images/carousel/Rectangle1628.png"
          alt="Imagem de fundo decorativa"
          fill
          quality={100}
          className="object-cover z-0 opacity-35 lg:hidden"
        />
        <Image
          src="/images/carousel/Rectangle1626.png"
          alt="Imagem de fundo decorativa"
          fill
          quality={100}
          className="object-cover z-0 opacity-35 hidden lg:block"
        />

        {/* Conteúdo acima da imagem usando z index */}
        <div className="relative z-10 flex flex-col gap-6 lg:gap-4 px-7 pt-6.5 pb-9 lg:py-10 lg:px-16">
          <h2 className="text-soft-gold text-center font-paris2024 text-3xl leading-8 lg:text-4xl lg:leading-9">
            O que você vai aprender nas Pompolimpíadas
          </h2>
          <p className="text-white text-center font-main text-base font-light leading-5 lg:text-2xl lg:leading-8">
            Participe da superaula gratuita de Ginástica Íntima no dia 13 de
            agosto, às 20h, e tenha acesso a todo o conteúdo do curso. Aprenda a
            dominar a arte do aperta e solta e conquiste o ouro em saúde íntima,
            autoestima e prazer. Inscreva-se nas Pompolimpíadas 2024 para
            alcançar o topo em todas as suas relações.{" "}
            <span className="text-soft-gold font-extrabold">
              Veja abaixo o que você vai aprender:
            </span>
          </p>
        </div>
      </div>

      <div className="z-50">
        <Carousel />
      </div>

      <div className="flex justify-center py-4.5 lg:hidden">
        <svg
          width="109"
          height="8"
          viewBox="0 0 109 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52 4.5C52.2761 4.5 52.5 4.27614 52.5 4C52.5 3.72386 52.2761 3.5 52 3.5L52 4L52 4.5ZM0.646446 3.64644C0.451183 3.8417 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976307 4.7308 0.659724 4.53553 0.464462C4.34027 0.2692 4.02369 0.2692 3.82843 0.464462L0.646446 3.64644ZM52 4L52 3.5L1 3.5L1 4L1 4.5L52 4.5L52 4Z"
            fill="#1A18BB"
          />
          <path
            d="M57 3.5C56.7239 3.5 56.5 3.72386 56.5 4C56.5 4.27614 56.7239 4.5 57 4.5V4V3.5ZM108.354 4.35355C108.549 4.15829 108.549 3.84171 108.354 3.64645L105.172 0.464466C104.976 0.269204 104.66 0.269204 104.464 0.464466C104.269 0.659728 104.269 0.976311 104.464 1.17157L107.293 4L104.464 6.82843C104.269 7.02369 104.269 7.34027 104.464 7.53553C104.66 7.7308 104.976 7.7308 105.172 7.53553L108.354 4.35355ZM57 4V4.5L108 4.5V4V3.5L57 3.5V4Z"
            fill="#1A18BB"
          />
        </svg>
      </div>
    </section>
  );
};

export default CarouselSection;
