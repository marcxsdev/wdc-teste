import Image from "next/image";

const PpkaCard = ({ text, bgColor }) => {
  return (
    <div
      className={`${bgColor} flex flex-row items-center gap-5.5 w-81 h-15 lg:w-88 lg:h-16 rounded-lg`}
    >
      <div className="relative h-full w-11 lg:w-12 flex-shrink-0 overflow-hidden rounded-lg ">
        <Image
          src="/images/ppka/Rectangle1599.png"
          alt="Banner do card"
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      <h4 className="text-deep-blue font-main text-lg lg:text-xl font-extrabold leading-4">
        {text}
      </h4>
    </div>
  );
};

export default PpkaCard;
