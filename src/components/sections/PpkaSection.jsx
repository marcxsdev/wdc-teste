import PpkaCard from "../ui/PpkaCard";
import Image from "next/image";

const sedentariaItems = [
  {
    id: 1,
    text: "Não sente vontade de ter relação íntima",
  },
  {
    id: 2,
    text: "Não tem lubrificação",
  },
  {
    id: 3,
    text: "Tem escape de urina quando faz esforço",
  },
  {
    id: 4,
    text: "Solta buceidos durante a relação (flatos)",
  },
  {
    id: 5,
    text: "Sente fortes cólicas menstruais todos os meses",
  },
  {
    id: 6,
    text: "Sente dor na hora da relação",
  },
];

const atletaItems = [
  {
    id: 1,
    text: "É muito mais molhadinha",
  },
  {
    id: 2,
    text: "Sente muito mais vontade de ter relação",
  },
  {
    id: 3,
    text: "Não sofre com cólicas menstruais",
  },
  {
    id: 4,
    text: "É altamente orgástica",
  },
  {
    id: 5,
    text: "É mais preparada para lidar com os sintomas da menopausa",
  },
  {
    id: 6,
    text: "Não tem escape de urina causado pela frouxidão íntima",
  },
  {
    id: 7,
    text: "Não sofre com infecções de recorrência",
  },
  {
    id: 8,
    text: "Fica muito mais resistente no pré e no pós-parto",
  },
];

const PpkaSection = () => {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/ppka/ppka-bg.png"
        alt="Imagem de fundo da seção"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />

      <div className="absolute top-0 left-0 mt-1.5">
        <Image
          src="/images/ppka/medals1.png"
          alt="Medalha na borda esquerda"
          width={40}
          height={192}
        />
      </div>

      <div className="absolute top-0 right-0 mt-1.5">
        <Image
          src="/images/ppka/medals2.png"
          alt="Medalha na borda direita"
          width={52}
          height={192}
        />
      </div>

      <div className="flex flex-col gap-4 items-center pt-9">
        <div className="w-10 h-1.5 bg-soft-gold rounded-xl" />
        <h3 className="text-white text-center font-main text-lg font-extrabold leading-5.5 mx-8">
          Existem dois tipos de ppka, aquelas que dominam a modalidade do aperta
          e solta e as que não praticam nenhum exercício, ou seja, as
          sedentárias.
        </h3>
      </div>

      <div className="flex flex-col gap-10 py-7">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="">
            <h5 className="inline-block text-deep-blue text-base font-main px-4.5 py-1 font-extrabold bg-silver border border-gold rounded-4xl">
              PPKA SEDENTÁRIA
            </h5>
          </div>

          <div className="flex flex-col gap-4">
            {sedentariaItems.map((item) => (
              <PpkaCard key={item.id} text={item.text} bgColor="bg-white" />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="">
            <h5 className="inline-block text-deep-blue text-base font-main px-4.5 py-1 font-extrabold bg-silver border border-gold rounded-4xl">
              PPKA ATLETA
            </h5>
          </div>

          <div className="flex flex-col gap-4">
            {atletaItems.map((item) => (
              <PpkaCard key={item.id} text={item.text} bgColor="bg-soft-gold" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PpkaSection;
