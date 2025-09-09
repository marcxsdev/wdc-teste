import Image from "next/image";

const CarouselCard = ({ imageUrl, title, text }) => {
  return (
    <div className="bg-deep-blue flex flex-col justify-between w-[268px] h-[484px] rounded-2xl border-3 border-soft-gold overflow-hidden flex-shrink-0">
      <div className="w-66 h-53 rounded-xl border-3 border-soft-gold overflow-hidden mx-auto">
        <Image
          src={imageUrl}
          alt="Imagem do card"
          width={265}
          height={214}
          quality={100}
        />
      </div>

      {/* Bloco central com conteúdo */}
      <div className="flex flex-col items-center gap-2.5 px-5 flex-grow py-4">
        {/* Linha decorativa */}
        <Image
          src="/images/carousel/cards/Group40.png"
          alt="Linha decorativa"
          width={122}
          height={8}
          quality={100}
        />
        <h3 className="text-soft-gold text-center font-paris2024 text-2xl leading-7">
          {title}
        </h3>
        <p className="text-silver text-center font-main text-base font-light leading-4.5">
          {text}
        </p>
      </div>

      {/* Banner no rodapé do card */}
      <div className="relative w-full h-10">
        <Image
          src="/images/carousel/cards/Rectangle1577.png"
          alt="Banner em ondas decorativo"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
