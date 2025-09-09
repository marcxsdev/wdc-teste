import Image from "next/image";
import EmailInput from "../ui/EmailInput";

const CTASection = () => {
  return (
    <section className="px-7 py-11 relative overflow-hidden lg:hidden">
      <Image
        src="/images/cta/cta-bg.png"
        alt="Background da seção de chamada para a ação"
        fill
        className="object-cover z-0"
      />
      <div className="flex flex-col gap-3 justify-center items-center relative z-20 text-center">
        <h3 className="text-deep-blue font-main text-lg font-extrabold leading-5.5">
          Para aprender tudo isso e treinar comigo, ao vivo, todos os exercícios
          do meu curso de Ginástica Íntima, basta cadastrar o seu e-mail
          gratuitamente.
        </h3>
        <EmailInput buttonBgColor="bg-deep-blue" arrowColor="text-white" />
      </div>
    </section>
  );
};

export default CTASection;
